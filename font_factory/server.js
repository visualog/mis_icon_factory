const express = require('express');
const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const { getOutputDir, getProjectRoot } = require('./runtime-paths');
const { buildLibraryEntries, buildSourceLibraryEntries } = require('./library-manifest');
// build-engine is lazy loaded in the route handler

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const DEFAULT_PATHS = {
    projectRoot: getProjectRoot(),
    outputDir: getOutputDir()
};

let PROJECT_ROOT = DEFAULT_PATHS.projectRoot;
let OUTPUT_DIR = DEFAULT_PATHS.outputDir;
let HISTORY_FILE = path.join(OUTPUT_DIR, 'build-history.json');
let OUTPUT_CSS_FILE = path.join(OUTPUT_DIR, 'my-icon-font.css');
let METADATA_FILE = path.join(PROJECT_ROOT, 'font_factory', 'icon-metadata.json');
let LINE_DIR = path.join(PROJECT_ROOT, 'line');
let FILL_DIR = path.join(PROJECT_ROOT, 'fill');
let activeBuildPromise = null;
let buildRunner = async (selectedIcons) => {
    const { buildAllWeights } = require('./build-engine');
    return buildAllWeights(selectedIcons);
};
const VALID_METADATA_CATEGORIES = new Set([
    'actions',
    'navigation',
    'communication',
    'files',
    'user',
    'security',
    'feedback',
    'layout',
    'device',
    'time',
    'misc'
]);

function sanitizeGlyphStem(fileName = '') {
    const baseName = fileName.trim().toLowerCase();
    const normalized = baseName
        .replace(/[\s-]+/g, '_')
        .replace(/[^a-z0-9_]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');

    return normalized;
}

function sanitizeUploadFileName(fileName = '') {
    const extension = path.extname(fileName).toLowerCase();
    if (extension !== '.svg') {
        return '';
    }

    const normalized = sanitizeGlyphStem(path.basename(fileName, extension));

    return normalized ? `${normalized}.svg` : '';
}

function setRuntimePaths(overrides = {}) {
    PROJECT_ROOT = overrides.projectRoot || DEFAULT_PATHS.projectRoot;
    OUTPUT_DIR = overrides.outputDir || DEFAULT_PATHS.outputDir;
    LINE_DIR = overrides.lineDir || path.join(PROJECT_ROOT, 'line');
    FILL_DIR = overrides.fillDir || path.join(PROJECT_ROOT, 'fill');
    METADATA_FILE = overrides.metadataFile || path.join(PROJECT_ROOT, 'font_factory', 'icon-metadata.json');
    HISTORY_FILE = overrides.historyFile || path.join(OUTPUT_DIR, 'build-history.json');
    OUTPUT_CSS_FILE = overrides.outputCssFile || path.join(OUTPUT_DIR, 'my-icon-font.css');
}

function resetRuntimePaths() {
    setRuntimePaths();
}

function setBuildRunnerForTests(nextBuildRunner) {
    buildRunner = nextBuildRunner;
}

function resetBuildRunner() {
    buildRunner = async (selectedIcons) => {
        const { buildAllWeights } = require('./build-engine');
        return buildAllWeights(selectedIcons);
    };
}

function resolveAppStaticDir(projectRoot = PROJECT_ROOT) {
    const reactBuildDir = path.join(projectRoot, 'frontend', 'dist');
    if ((process.env.USE_REACT_FRONTEND === '1' || process.env.VERCEL === '1') && fs.pathExistsSync(reactBuildDir)) {
        return reactBuildDir;
    }

    return path.join(projectRoot, 'font_factory', 'public');
}

async function runBuildExclusively(job) {
    if (activeBuildPromise) {
        return null;
    }

    activeBuildPromise = (async () => job())();

    try {
        return await activeBuildPromise;
    } finally {
        activeBuildPromise = null;
    }
}

async function restoreUploadedFiles(uploadedNames, backupDir) {
    for (const fileName of uploadedNames) {
        const sourcePath = path.join(backupDir, fileName);
        const targetPath = path.join(LINE_DIR, fileName);
        if (await fs.pathExists(sourcePath)) {
            await fs.copy(sourcePath, targetPath);
        } else {
            await fs.remove(targetPath);
        }
    }
}

async function restoreOutputBackup(backupDir) {
    if (await fs.pathExists(backupDir)) {
        await fs.remove(OUTPUT_DIR);
        await fs.copy(backupDir, OUTPUT_DIR);
        return;
    }

    await fs.remove(OUTPUT_DIR);
}

async function ensureBuildCoverage() {
    const cssExists = await fs.pathExists(OUTPUT_CSS_FILE);
    if (!cssExists) {
        throw new Error('Build completed without generated CSS output');
    }

    const css = await fs.readFile(OUTPUT_CSS_FILE, 'utf8');
    const iconGroups = [
        { dir: LINE_DIR, suffix: '_line' },
        { dir: FILL_DIR, suffix: '_fill' }
    ];

    for (const { dir, suffix } of iconGroups) {
        if (!await fs.pathExists(dir)) {
            continue;
        }

        const files = (await fs.readdir(dir)).filter((file) => file.endsWith('.svg'));
        for (const fileName of files) {
            const glyphStem = sanitizeGlyphStem(fileName.replace(/\.svg$/i, ''));
            const expectedPattern = new RegExp(`\\.icon--${glyphStem}${suffix}::?before`);
            if (!expectedPattern.test(css)) {
                throw new Error(`Build completed but missing glyph for ${fileName}`);
            }
        }
    }
}

async function readBuildHistory() {
    try {
        const history = await fs.readJson(HISTORY_FILE);
        if (!history || typeof history !== 'object') {
            return { lastBuildAt: null, icons: {} };
        }
        if (!history.icons || typeof history.icons !== 'object') {
            history.icons = {};
        }
        return history;
    } catch (err) {
        return { lastBuildAt: null, icons: {} };
    }
}

async function saveBuildHistory(builtIcons = []) {
    const history = await readBuildHistory();
    const builtAt = new Date().toISOString();

    history.lastBuildAt = builtAt;
    builtIcons.forEach((iconName) => {
        const previous = history.icons[iconName];
        history.icons[iconName] = {
            lastBuiltAt: builtAt,
            buildCount: previous?.buildCount ? previous.buildCount + 1 : 1
        };
    });

    await fs.ensureDir(path.dirname(HISTORY_FILE));
    await fs.writeJson(HISTORY_FILE, history, { spaces: 2 });
}

async function inferBuiltIconsFromCss() {
    try {
        const exists = await fs.pathExists(OUTPUT_CSS_FILE);
        if (!exists) return { icons: {} };

        const css = await fs.readFile(OUTPUT_CSS_FILE, 'utf-8');
        const stat = await fs.stat(OUTPUT_CSS_FILE);
        const inferredAt = stat.mtime.toISOString();
        const iconMap = {};

        const lineMatches = css.matchAll(/\.icon--([a-z0-9_-]+)_line::?before/g);
        for (const match of lineMatches) {
            const iconName = `${match[1]}.svg`;
            iconMap[iconName] = {
                lastBuiltAt: inferredAt,
                buildCount: 1
            };
        }

        return { icons: iconMap };
    } catch (err) {
        return { icons: {} };
    }
}

async function getBuildArtifactMeta() {
    try {
        const distDir = OUTPUT_DIR;
        const exists = await fs.pathExists(distDir);
        if (!exists) return null;

        const files = await fs.readdir(distDir);
        const fontFiles = files.filter((file) => /^MyIconFont-.*\.woff2$/i.test(file));
        if (fontFiles.length === 0) return null;

        let latestMs = 0;
        for (const file of fontFiles) {
            const stat = await fs.stat(path.join(distDir, file));
            latestMs = Math.max(latestMs, stat.mtimeMs);
        }

        if (latestMs <= 0) return null;
        return { lastBuiltAt: new Date(latestMs).toISOString() };
    } catch (err) {
        return null;
    }
}

async function readIconMetadata() {
    try {
        const exists = await fs.pathExists(METADATA_FILE);
        if (!exists) {
            return { icons: {} };
        }

        const metadata = await fs.readJson(METADATA_FILE);
        if (!metadata || typeof metadata !== 'object') {
            return { icons: {} };
        }

        if (!metadata.icons || typeof metadata.icons !== 'object') {
            metadata.icons = {};
        }

        return metadata;
    } catch (err) {
        return { icons: {} };
    }
}

function normalizeMetadataTokens(values) {
    if (!Array.isArray(values)) {
        return null;
    }

    const seen = new Set();
    const normalized = [];

    values.forEach((value) => {
        if (typeof value !== 'string') {
            return;
        }

        const trimmed = value.trim().replace(/\s+/g, ' ');
        if (!trimmed || seen.has(trimmed)) {
            return;
        }

        seen.add(trimmed);
        normalized.push(trimmed);
    });

    return normalized;
}

function sanitizeMetadataUpdate(payload = {}) {
    const displayName = typeof payload.displayName === 'string'
        ? payload.displayName.trim().replace(/\s+/g, ' ')
        : '';
    const category = typeof payload.category === 'string' ? payload.category.trim() : '';
    const keywords = normalizeMetadataTokens(payload.keywords);
    const synonyms = normalizeMetadataTokens(payload.synonyms);

    if (!displayName || !VALID_METADATA_CATEGORIES.has(category) || !keywords || !synonyms) {
        return null;
    }

    return {
        displayName,
        category,
        keywords,
        synonyms
    };
}

async function saveIconMetadataEntry(iconKey, nextEntry) {
    const metadata = await readIconMetadata();
    const existingEntry = metadata.icons?.[iconKey] || {};

    metadata.version = metadata.version || 1;
    metadata.icons = metadata.icons || {};
    metadata.icons[iconKey] = {
        ...existingEntry,
        displayName: nextEntry.displayName,
        category: nextEntry.category,
        keywords: nextEntry.keywords,
        synonyms: nextEntry.synonyms
    };

    await fs.ensureDir(path.dirname(METADATA_FILE));
    await fs.writeJson(METADATA_FILE, metadata, { spaces: 2 });
    return metadata.icons[iconKey];
}

app.use(express.json({ limit: '10mb' }));
app.use(express.static(resolveAppStaticDir()));
// 원본 아이콘 서빙 (미리보기용)
app.use('/line-icons', express.static(LINE_DIR));
app.use('/fill-icons', express.static(FILL_DIR));
// 빌드된 폰트/스타일 서빙 (Vercel에서는 /tmp를 사용)
app.use('/generated-fonts', express.static(OUTPUT_DIR, {
    etag: true,
    lastModified: true,
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
    }
}));

// 아이콘 목록 가져오기 API
app.get('/api/icons', async (req, res) => {
    try {
        const files = await fs.readdir(LINE_DIR);
        const sort = req.query.sort || 'name';
        const history = await readBuildHistory();
        const inferred = await inferBuiltIconsFromCss();
        const artifactMeta = await getBuildArtifactMeta();
        const iconFiles = files.filter(f => f.endsWith('.svg'));
        const hasHistory = Object.keys(history.icons || {}).length > 0;
        const hasInferred = Object.keys(inferred.icons || {}).length > 0;
        const fallbackAllBuiltMeta = (!hasHistory && !hasInferred && artifactMeta) ? artifactMeta : null;

        const iconsWithMeta = await Promise.all(
            iconFiles.map(async (name) => {
                const stat = await fs.stat(path.join(LINE_DIR, name));
                const buildMeta = history.icons[name] || inferred.icons[name] || fallbackAllBuiltMeta || null;
                return {
                    name,
                    mtimeMs: stat.mtimeMs,
                    built: !!buildMeta,
                    lastBuiltAt: buildMeta?.lastBuiltAt || null
                };
            })
        );

        if (sort === 'recent') {
            iconsWithMeta.sort((a, b) => b.mtimeMs - a.mtimeMs || a.name.localeCompare(b.name));
        } else {
            iconsWithMeta.sort((a, b) => a.name.localeCompare(b.name));
        }

        res.json(iconsWithMeta);
    } catch (err) {
        res.status(500).json({ error: 'Failed to list icons' });
    }
});

app.get('/api/library-icons', async (req, res) => {
    try {
        const metadata = await readIconMetadata();
        const cssExists = await fs.pathExists(OUTPUT_CSS_FILE);
        if (!cssExists) {
            const [lineFiles, fillFiles] = await Promise.all([
                await fs.pathExists(LINE_DIR) ? fs.readdir(LINE_DIR) : [],
                await fs.pathExists(FILL_DIR) ? fs.readdir(FILL_DIR) : []
            ]);

            return res.json({
                icons: buildSourceLibraryEntries({ lineFiles, fillFiles }, metadata),
                lastBuiltAt: null,
                hasGeneratedFontStyles: false
            });
        }

        const css = await fs.readFile(OUTPUT_CSS_FILE, 'utf-8');
        const artifactMeta = await getBuildArtifactMeta();

        return res.json({
            icons: buildLibraryEntries(css, metadata),
            lastBuiltAt: artifactMeta?.lastBuiltAt || null,
            hasGeneratedFontStyles: true
        });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to load built library' });
    }
});

app.post('/api/icon-metadata/:key', async (req, res) => {
    try {
        const iconKey = typeof req.params?.key === 'string' ? req.params.key.trim() : '';
        const nextEntry = sanitizeMetadataUpdate(req.body);

        if (!iconKey || !nextEntry) {
            return res.status(400).json({ error: 'Invalid metadata payload' });
        }

        const savedEntry = await saveIconMetadataEntry(iconKey, nextEntry);
        return res.json({
            success: true,
            icon: {
                key: iconKey,
                ...savedEntry
            }
        });
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Failed to update metadata' });
    }
});

app.post('/api/upload-icons', async (req, res) => {
    try {
        const buildResult = await runBuildExclusively(async () => {
            const files = Array.isArray(req.body?.files) ? req.body.files : [];
            if (files.length === 0) {
                return { status: 400, body: { error: 'files payload is required' } };
            }

            const normalizedFiles = [];
            const normalizedNameSet = new Set();
            for (const file of files) {
                const fileName = sanitizeUploadFileName(file?.name || '');
                const content = typeof file?.content === 'string' ? file.content : '';

                if (!fileName) {
                    return { status: 400, body: { error: 'Only SVG files can be uploaded' } };
                }

                if (!content.includes('<svg')) {
                    return { status: 400, body: { error: `Invalid SVG content for ${fileName}` } };
                }

                if (normalizedNameSet.has(fileName)) {
                    return { status: 409, body: { error: `Duplicate upload name: ${fileName}` } };
                }

                normalizedNameSet.add(fileName);
                normalizedFiles.push({ fileName, content });
            }

            await fs.ensureDir(LINE_DIR);

            for (const { fileName } of normalizedFiles) {
                if (await fs.pathExists(path.join(LINE_DIR, fileName))) {
                    return { status: 409, body: { error: `Icon already exists: ${fileName}` } };
                }
            }

            const rollbackRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'iconfont-upload-'));
            const originalsBackupDir = path.join(rollbackRoot, 'originals');
            const outputBackupDir = path.join(rollbackRoot, 'output');
            const uploadedNames = [];

            try {
                if (await fs.pathExists(OUTPUT_DIR)) {
                    await fs.copy(OUTPUT_DIR, outputBackupDir);
                }

                for (const { fileName, content } of normalizedFiles) {
                    const targetPath = path.join(LINE_DIR, fileName);
                    if (await fs.pathExists(targetPath)) {
                        await fs.ensureDir(originalsBackupDir);
                        await fs.copy(targetPath, path.join(originalsBackupDir, fileName));
                    }

                    await fs.writeFile(targetPath, content, 'utf8');
                    uploadedNames.push(fileName);
                }

                await buildRunner();
                await ensureBuildCoverage();

                const currentLineFiles = (await fs.readdir(LINE_DIR)).filter((file) => file.endsWith('.svg'));
                await saveBuildHistory(currentLineFiles);

                return {
                    status: 200,
                    body: {
                        success: true,
                        uploaded: uploadedNames,
                        count: uploadedNames.length
                    }
                };
            } catch (err) {
                await restoreUploadedFiles(uploadedNames, originalsBackupDir);
                await restoreOutputBackup(outputBackupDir);
                throw err;
            } finally {
                await fs.remove(rollbackRoot);
            }
        });

        if (!buildResult) {
            return res.status(409).json({ error: 'A build is already in progress' });
        }

        if (buildResult.status !== 200) {
            return res.status(buildResult.status).json(buildResult.body);
        }

        return res.json(buildResult.body);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message || 'Failed to upload icons' });
    }
});

// 빌드 실행 API
app.post('/api/build', async (req, res) => {
    // 이제 strokeWidth 파라미터는 사용하지 않습니다.
    console.log("Requesting multi-weight build...");

    const buildResult = await runBuildExclusively(async () => {
        try {
            const { selectedIcons } = req.body; // Array of filenames e.g. ["icon1.svg", "icon2.svg"]
            await buildRunner(selectedIcons);
            let builtIcons = Array.isArray(selectedIcons) ? selectedIcons : [];
            if (builtIcons.length === 0) {
                const files = await fs.readdir(LINE_DIR);
                builtIcons = files.filter((f) => f.endsWith('.svg'));
            }
            await saveBuildHistory(builtIcons);
            return { status: 200, body: { success: true, message: '멀티 웨이트 웹폰트 빌드가 성공적으로 완료되었습니다!' } };
        } catch (err) {
            console.error(err);
            return { status: 500, body: { error: '빌드 중 오류가 발생했습니다: ' + err.message } };
        }
    });

    if (!buildResult) {
        return res.status(409).json({ error: 'A build is already in progress' });
    }

    return res.status(buildResult.status).json(buildResult.body);
});


if (require.main === module) {
    app.listen(PORT, HOST, () => {
        console.log(`================================================`);
        console.log(`🚀 아이콘 팩토리 서버가 시작되었습니다!`);
        console.log(`🔗 접속 주소: http://localhost:${PORT}`);
        if (HOST === '0.0.0.0') {
            console.log(`🌐 내부망 접속 가능: http://<이 컴퓨터 IP>:${PORT}`);
        }
        console.log(`================================================`);
    });
}

module.exports = app;
app.__internal = {
    resolveAppStaticDir,
    sanitizeUploadFileName,
    setRuntimePaths,
    resetRuntimePaths,
    setBuildRunnerForTests,
    resetBuildRunner
};
