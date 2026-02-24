const fs = require('fs-extra');
const path = require('path');
const SVGFixer = require('oslllo-svg-fixer');
const { getBuildTempDir, getOutputDir, getProjectRoot } = require('./runtime-paths');

let cachedGenerateFonts = null;

async function getGenerateFonts() {
    if (!cachedGenerateFonts) {
        // `fantasticon`의 CJS 엔트리는 Node 22에서 ESM 의존성과 충돌할 수 있으므로 dynamic import 사용
        const fantasticon = await import('fantasticon');
        cachedGenerateFonts = fantasticon.generateFonts;
    }
    return cachedGenerateFonts;
}

// 사용자 지정 웨이트 매핑 (뭉개짐 방지를 위해 최대 2.0px로 제한)
const WEIGHT_MAP = {
    300: { name: 'Light', width: 1.0 },
    400: { name: 'Regular', width: 1.25 },
    500: { name: 'Medium', width: 1.5 },
    600: { name: 'SemiBold', width: 1.75 },
    700: { name: 'Bold', width: 2.0 }
};

const rootDir = getProjectRoot();
const buildDir = getBuildTempDir();
const lineSrcDir = path.join(rootDir, 'line');
const fillSrcDir = path.join(rootDir, 'fill');
const outputDir = getOutputDir();

function sanitizeIconId(fileName) {
    const base = fileName.replace(/\.svg$/i, '').toLowerCase().trim();
    const normalized = base
        .replace(/[\s-]+/g, '_')
        .replace(/[^a-z0-9_]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '');

    return normalized || 'icon';
}

async function buildAllWeights(selectedIcons = []) {
    console.log("🚀 Starting Multi-Weight Font Build...");
    if (selectedIcons.length > 0) {
        console.log(`🎯 Building specific icons only: ${selectedIcons.length} icons selected`);
    } else {
        console.log("📦 Building ALL icons (Default)");
    }

    // 1. 초기화
    await fs.remove(buildDir);
    await fs.ensureDir(buildDir);
    await fs.remove(outputDir);
    await fs.ensureDir(outputDir);

    const generatedFonts = [];
    let fixedCodepoints = null;

    // 2. 웨이트별 반복 빌드
    for (const [weight, config] of Object.entries(WEIGHT_MAP)) {
        console.log(`\n----------------------------------------`);
        console.log(`🔨 Building ${config.name} (${weight}) - Stroke: ${config.width}px`);
        console.log(`----------------------------------------`);

        const weightDir = path.join(buildDir, `w_${weight}`);
        const tempIconsDir = path.join(weightDir, 'icons_all');
        const fixedLineDir = path.join(weightDir, 'line_fixed');
        const tempLineDir = path.join(weightDir, 'line_temp');

        await fs.ensureDir(tempIconsDir);
        await fs.ensureDir(fixedLineDir);
        await fs.ensureDir(tempLineDir);

        // 2-1. 라인 아이콘 처리 (두께 조절)
        const lineFiles = await fs.readdir(lineSrcDir);
        for (const file of lineFiles) {
            if (!file.endsWith('.svg')) continue;

            // Selection Filtering
            if (selectedIcons.length > 0 && !selectedIcons.includes(file)) {
                continue;
            }

            let content = await fs.readFile(path.join(lineSrcDir, file), 'utf-8');

            // 기존 속성 제거
            content = content.replace(/stroke-width="[^"]*"/g, '');
            content = content.replace(/stroke="[^"]*"/g, '');
            content = content.replace(/fill="[^"]*"/g, '');

            // 새 두께 적용
            content = content.replace(/<(path|rect|circle|line|polyline|polygon)/g,
                `<$1 fill="none" stroke="black" stroke-width="${config.width}" stroke-linejoin="round" stroke-linecap="round" `);

            await fs.writeFile(path.join(tempLineDir, file), content);
        }

        // 2-2. Outline 변환 (Stroke -> Fill)
        const fixer = new SVGFixer(tempLineDir, fixedLineDir, { showProgressBar: false });
        await fixer.fix();

        // 2-3. 통합 폴더로 이동 (라인)
        const fixedFiles = await fs.readdir(fixedLineDir);
        for (const file of fixedFiles) {
            if (file.endsWith('.svg')) {
                const cleanName = sanitizeIconId(file);
                await fs.copy(path.join(fixedLineDir, file), path.join(tempIconsDir, `${cleanName}_line.svg`));
            }
        }

        // 2-4. 통합 폴더로 이동 (필) - 필 아이콘은 두께 변화 없음, 그대로 복사
        const fillFiles = await fs.readdir(fillSrcDir);
        for (const file of fillFiles) {
            if (file.endsWith('.svg')) {
                const cleanName = sanitizeIconId(file);
                await fs.copy(path.join(fillSrcDir, file), path.join(tempIconsDir, `${cleanName}_fill.svg`));
            }
        }

        // 2-5. Fantasticon 실행 (개별 웨이트용)
        // 주의: WOFF2 만 생성하여 용량 절약 (필요시 추가)
        const generateFonts = await getGenerateFonts();
        const generationOptions = {
            inputDir: tempIconsDir,
            outputDir: outputDir,
            name: `MyIconFont-${config.name}`,
            fontTypes: ['woff2'],
            assetTypes: [], // CSS는 마지막에 통합 생성
            prefix: 'icon--',
            formatOptions: { json: { indent: 2 } },
            normalize: true
        };
        if (fixedCodepoints) {
            generationOptions.codepoints = fixedCodepoints;
        }

        const result = await generateFonts(generationOptions);
        if (!fixedCodepoints) {
            fixedCodepoints = result.codepoints;
        }

        generatedFonts.push({ weight, name: config.name, codepoints: result.codepoints });
    }

    // 3. 통합 CSS 및 HTML 생성
    await generateCombinedAssets(generatedFonts);

    console.log("\n✅ All weights built successfully!");
    return outputDir;
}

async function generateCombinedAssets(fonts) {
    const cssContent = [];
    const htmlDemoContent = [];

    // 기본 CSS (아이콘 공통 스타일)
    cssContent.push(`
@charset "UTF-8";

/* Base Class */
.icon {
    font-family: 'MyIconFont';
    font-style: normal;
    font-display: block;
    display: inline-block;
    line-height: 1;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`);

    // 1. Font-face 선언 생성
    fonts.forEach(f => {
        cssContent.push(`
@font-face {
    font-family: 'MyIconFont';
    src: url('./MyIconFont-${f.name}.woff2') format('woff2');
    font-weight: ${f.weight};
    font-style: normal;
}
`);
    });

    // 2. Fantasticon이 실제 생성한 코드포인트를 사용하여 클래스 매핑 생성
    const lastWeight = fonts[fonts.length - 1];
    const codepoints = lastWeight.codepoints || {};
    const iconEntries = Object.entries(codepoints).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));

    cssContent.push(`/* Icon Classes */`);

    iconEntries.forEach(([name, codepoint]) => {
        const currentHex = codepoint.toString(16);

        cssContent.push(`.icon--${name}::before { content: "\\${currentHex}"; }`);
        htmlDemoContent.push(`
        <div class="icon-item">
            <i class="icon icon--${name}" title="${name}" aria-label="${name}"></i>
            <span>${name}</span>
        </div>`);
    });

    // CSS 파일 쓰기
    await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), cssContent.join('\n'));

    // HTML 데모 파일 쓰기
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Icon Font - Multi Weight Demo</title>
    <link rel="stylesheet" href="my-icon-font.css">
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .controls { 
            position: sticky; top: 0; background: white; padding: 20px; 
            border-bottom: 1px solid #ddd; margin-bottom: 20px; display: flex; gap: 20px; align-items: center;
        }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 20px; }
        .icon-item { 
            display: flex; flex-direction: column; align-items: center; gap: 10px; 
            padding: 20px; border: 1px solid #eee; border-radius: 8px;
        }
        .icon { font-size: 32px; transition: all 0.2s; }
        label { font-weight: bold; }
    </style>
</head>
<body>
    <div class="controls">
        <div>
            <label for="weight-slider">Font Weight: <span id="weight-val">400</span></label>
            <input type="range" id="weight-slider" min="100" max="900" step="100" value="400" style="width: 200px">
        </div>
    </div>

    <div class="grid" id="icon-grid">
        ${htmlDemoContent.join('')}
    </div>

    <script>
        const slider = document.getElementById('weight-slider');
        const valDisplay = document.getElementById('weight-val');
        const grid = document.getElementById('icon-grid');

        slider.addEventListener('input', (e) => {
            const w = e.target.value;
            valDisplay.textContent = w;
            grid.style.fontWeight = w;
        });
    </script>
</body>
</html>
    `;

    await fs.writeFile(path.join(outputDir, 'demo.html'), htmlContent);
}

module.exports = { buildAllWeights };
