const fs = require('fs-extra');
const path = require('path');
const SVGFixer = require('oslllo-svg-fixer');
const { generateFonts } = require('fantasticon');
const re = /stroke-width="[^"]*"/g;

async function buildFont(strokeWidth) {
    const rootDir = path.join(__dirname, '..');
    const buildDir = path.join(__dirname, 'build_temp');
    const lineSrcDir = path.join(rootDir, 'line');
    const fillSrcDir = path.join(rootDir, 'fill');
    const tempIconsDir = path.join(buildDir, 'icons_all');
    const fixedLineDir = path.join(buildDir, 'line_fixed');
    const outputDir = path.join(rootDir, 'dist_font_custom');

    console.log(`Building font with stroke-width: ${strokeWidth}`);

    // 1. 디렉토리 정리 및 생성
    await fs.remove(buildDir);
    await fs.ensureDir(fixedLineDir);
    await fs.ensureDir(tempIconsDir);
    await fs.ensureDir(outputDir);

    // 2. 라인 아이콘 두께 변경 및 임시 저장
    const lineFiles = await fs.readdir(lineSrcDir);
    for (const file of lineFiles) {
        if (!file.endsWith('.svg')) continue;
        let content = await fs.readFile(path.join(lineSrcDir, file), 'utf-8');

        // 1. 기존에 아이콘마다 다르게 설정된 속성들을 제거하여 초기화합니다 (일괄 리셋)
        content = content.replace(/stroke-width="[^"]*"/g, '');
        content = content.replace(/stroke="[^"]*"/g, '');
        content = content.replace(/fill="[^"]*"/g, '');

        // 2. 모든 드로잉 태그에 선택한 두께와 검정색 설정을 일괄 주입합니다.
        content = content.replace(/<(path|rect|circle|line|polyline|polygon)/g,
            `<$1 fill="black" stroke="black" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round" `);

        await fs.writeFile(path.join(buildDir, `temp_${file}`), content);
    }

    // 3. oslllo-svg-fixer로 라인 아이콘 아웃라인화
    const fixer = new SVGFixer(path.join(buildDir), fixedLineDir, {
        showProgressBar: false
    });
    await fixer.fix();

    // 4. 모든 아이콘을 하나로 통합 (파일명 정규화 포함)
    // 보정된 라인 아이콘
    const fixedFiles = await fs.readdir(fixedLineDir);
    for (const file of fixedFiles) {
        if (file.endswith('.svg')) {
            const cleanName = file.replace('temp_', '').replace(' ', '_').replace('.svg', '').toLowerCase();
            await fs.copy(path.join(fixedLineDir, file), path.join(tempIconsDir, `${cleanName}_line.svg`));
        }
    }
    // 필 아이콘
    const fillFiles = await fs.readdir(fillSrcDir);
    for (const file of fillFiles) {
        if (file.endswith('.svg')) {
            const cleanName = file.replace(' ', '_').replace('.svg', '').toLowerCase();
            await fs.copy(path.join(fillSrcDir, file), path.join(tempIconsDir, `${cleanName}_fill.svg`));
        }
    }

    // 5. Fantasticon 실행
    await generateFonts({
        inputDir: tempIconsDir,
        outputDir: outputDir,
        name: 'MyIconFont',
        fontTypes: ['woff2', 'woff'],
        assetTypes: ['css', 'html', 'json'],
        prefix: 'icon--',
        formatOptions: {
            json: { indent: 2 }
        }
    });

    console.log("Font build complete in dist_font_custom/");
    return outputDir;
}

module.exports = { buildFont };
