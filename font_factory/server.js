const express = require('express');
const path = require('path');
const fs = require('fs-extra');
// build-engine is lazy loaded in the route handler

const app = express();
const PORT = 3000;
const HISTORY_FILE = path.join(process.cwd(), 'dist_font_custom', 'build-history.json');
const OUTPUT_CSS_FILE = path.join(process.cwd(), 'dist_font_custom', 'my-icon-font.css');

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

        const lineMatches = css.matchAll(/\.icon-([a-z0-9_-]+)_line:before/g);
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
        const distDir = path.join(process.cwd(), 'dist_font_custom');
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

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'font_factory/public')));
// 원본 아이콘 서빙 (미리보기용)
app.use('/line-icons', express.static(path.join(process.cwd(), 'line')));

// 아이콘 목록 가져오기 API
app.get('/api/icons', async (req, res) => {
    try {
        const lineDir = path.join(process.cwd(), 'line');
        const files = await fs.readdir(lineDir);
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
                const stat = await fs.stat(path.join(lineDir, name));
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

// 빌드 실행 API
app.post('/api/build', async (req, res) => {
    // 이제 strokeWidth 파라미터는 사용하지 않습니다.
    console.log("Requesting multi-weight build...");

    try {
        const { selectedIcons } = req.body; // Array of filenames e.g. ["icon1.svg", "icon2.svg"]
        const { buildAllWeights } = require('./build-engine');
        await buildAllWeights(selectedIcons);
        let builtIcons = Array.isArray(selectedIcons) ? selectedIcons : [];
        if (builtIcons.length === 0) {
            const lineDir = path.join(process.cwd(), 'line');
            const files = await fs.readdir(lineDir);
            builtIcons = files.filter((f) => f.endsWith('.svg'));
        }
        await saveBuildHistory(builtIcons);
        res.json({ success: true, message: '멀티 웨이트 웹폰트 빌드가 성공적으로 완료되었습니다!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: '빌드 중 오류가 발생했습니다: ' + err.message });
    }
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`================================================`);
        console.log(`🚀 아이콘 팩토리 서버가 시작되었습니다!`);
        console.log(`🔗 접속 주소: http://localhost:${PORT}`);
        console.log(`================================================`);
    });
}

module.exports = app;
