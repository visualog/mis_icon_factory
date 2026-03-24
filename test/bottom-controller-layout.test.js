const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const indexHtml = fs.readFileSync(
    '/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html',
    'utf8'
);

test('category and kind dropdowns are placed before search and weight controls in the bottom controller', () => {
    assert.match(
        indexHtml,
        /<aside id="bottomController"[\s\S]*<div class="controller-group">[\s\S]*<div class="category-dropdown dropdown dropdown--up">[\s\S]*<button id="categoryTrigger" class="dropdown-trigger category-trigger"[\s\S]*<div id="categoryMenu" class="dropdown-menu category-menu"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group">[\s\S]*<div class="kind-dropdown dropdown dropdown--up">[\s\S]*<button id="kindTrigger" class="dropdown-trigger kind-trigger"[\s\S]*<div id="kindMenu" class="dropdown-menu kind-menu"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group controller-search-group">[\s\S]*<div class="search-combo controller-search">[\s\S]*<input id="searchInput" class="search-field"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group">[\s\S]*<div class="weight-dropdown dropdown dropdown--up">/s
    );
});

test('bottom category menu is anchored from the left edge of its trigger', () => {
    assert.match(indexHtml, /\.category-menu\s*\{[\s\S]*left:\s*0;[\s\S]*right:\s*auto;[\s\S]*transform-origin:\s*bottom left;/s);
});

test('bottom kind menu is anchored from the left edge of its trigger', () => {
    assert.match(indexHtml, /\.kind-menu\s*\{[\s\S]*left:\s*0;[\s\S]*right:\s*auto;[\s\S]*transform-origin:\s*bottom left;/s);
    assert.match(indexHtml, /const kindDropdownComponent = createDropdownComponent\(\s*\{/);
    assert.match(indexHtml, /function getKindOptions\(\)\s*\{/);
    assert.match(indexHtml, /const matchesKind = state\.kind === 'all' \|\| icon\.kind === state\.kind;/);
});

test('weight dropdown uses the shared dropdown component instead of a range slider', () => {
    assert.match(
        indexHtml,
        /<div class="controller-group">[\s\S]*<div class="weight-dropdown dropdown dropdown--up">[\s\S]*<button id="weightTrigger" class="dropdown-trigger weight-trigger"[\s\S]*<div id="weightMenu" class="dropdown-menu weight-menu"[\s\S]*<\/div>[\s\S]*<\/div>/s
    );
    assert.doesNotMatch(indexHtml, /<input id="weightSlider"/);
    assert.match(indexHtml, /const weightDropdownComponent = createDropdownComponent\(\s*\{/);
});

test('size dropdown uses a custom button and menu instead of native select', () => {
    assert.match(
        indexHtml,
        /<div class="controller-group">[\s\S]*<div class="size-dropdown dropdown dropdown--up">[\s\S]*<button id="sizeTrigger" class="dropdown-trigger size-trigger"[\s\S]*<i id="sizeTriggerIcon" class="icon icon--chevron_down_line dropdown-trigger-icon size-trigger-icon"[\s\S]*<div id="sizeMenu" class="dropdown-menu size-menu"[\s\S]*<\/div>[\s\S]*<\/div>/s
    );
    assert.doesNotMatch(indexHtml, /<select id="sizeSelect"/);
});

test('size options stay on a 4px scale', () => {
    assert.match(indexHtml, /const previewSizes = \[20,\s*24,\s*28,\s*32,\s*40,\s*48,\s*64\];/);
});

test('size dropdown script no longer references native select and uses chevron glyph states', () => {
    assert.doesNotMatch(indexHtml, /document\.getElementById\('sizeSelect'\)/);
    assert.match(indexHtml, /const sizeDropdownComponent = createDropdownComponent\(\s*\{/);
    assert.match(indexHtml, /icon--chevron_down_line/);
    assert.match(indexHtml, /replace\('chevron_down_line',\s*'chevron_up_line'\)/);
});

test('size menu opens upward from the bottom controller', () => {
    assert.match(indexHtml, /\.dropdown--up \.dropdown-menu\s*\{[\s\S]*bottom:\s*calc\(100%\s*\+\s*10px\)/);
    assert.doesNotMatch(indexHtml, /\.dropdown--up \.dropdown-menu\s*\{[\s\S]*top:\s*calc\(100%\s*\+\s*10px\)/);
});

test('palette also uses the shared dropdown component instead of button swatches', () => {
    assert.match(
        indexHtml,
        /<div class="controller-group">[\s\S]*<div class="palette-dropdown dropdown dropdown--up">[\s\S]*<button id="paletteTrigger" class="dropdown-trigger palette-trigger"[\s\S]*<span id="paletteTriggerSwatch" class="palette-trigger-swatch"[\s\S]*<span id="paletteTriggerLabel">[\s\S]*<div id="paletteMenu" class="dropdown-menu palette-menu"[\s\S]*<\/div>[\s\S]*<\/div>/s
    );
    assert.doesNotMatch(indexHtml, /class="palette-button/);
    assert.match(indexHtml, /const paletteDropdownComponent = createDropdownComponent\(\s*\{/);
});

test('upload button is placed after the palette dropdown inside the bottom controller', () => {
    assert.match(
        indexHtml,
        /<aside id="bottomController"[\s\S]*<div class="controller-group">[\s\S]*<div class="palette-dropdown dropdown dropdown--up">[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group controller-upload-group">[\s\S]*<button id="uploadButton" class="upload-button" type="button" aria-label="SVG 업로드" data-tooltip="SVG 업로드">[\s\S]*icon--plus_circle_fill[\s\S]*<span id="uploadButtonLabel" class="visually-hidden">SVG 업로드<\/span>[\s\S]*<\/button>[\s\S]*<input id="uploadInput" class="visually-hidden" type="file"/s
    );
    assert.doesNotMatch(indexHtml, /icon--add_line/);
});

test('upload button uses custom tooltip and color transition instead of lift-on-hover motion', () => {
    assert.match(indexHtml, /\.dropdown-trigger\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.42\);[\s\S]*blur\(12px\) saturate\(135%\);/s);
    assert.match(indexHtml, /\.upload-button\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.4\);[\s\S]*blur\(12px\) saturate\(135%\);/s);
    assert.match(indexHtml, /\.upload-button::after\s*\{[\s\S]*content:\s*attr\(data-tooltip\);/s);
    assert.match(indexHtml, /\.upload-button:hover,\s*\.upload-button:focus-visible\s*\{[\s\S]*border-color:\s*var\(--line-strong\);[\s\S]*box-shadow:\s*inset 0 0 0 1px var\(--line-strong\),\s*0 14px 32px rgba\(48,\s*41,\s*29,\s*0\.08\);/s);
    assert.doesNotMatch(indexHtml, /\.upload-button:hover,\s*\.upload-button:focus-visible\s*\{[\s\S]*border:\s*2px solid var\(--success\);/s);
    assert.doesNotMatch(indexHtml, /\.upload-button:hover,\s*\.upload-button:focus-visible\s*\{[\s\S]*background:\s*var\(--success\);/s);
    assert.doesNotMatch(indexHtml, /\.upload-button:hover \.upload-button-icon,\s*\.upload-button:focus-visible \.upload-button-icon\s*\{[\s\S]*color:\s*#fff;/s);
    assert.doesNotMatch(indexHtml, /\.upload-button:hover\s*\{[\s\S]*translateY\(-1px\)/s);
    assert.doesNotMatch(indexHtml, /uploadButton\.setAttribute\('title',\s*label\)/);
    assert.match(indexHtml, /uploadButton\.setAttribute\('data-tooltip',\s*label\);/);
});

test('bottom controller uses a liquid glass shell with bottom glow', () => {
    assert.match(indexHtml, /\.bottom-controller::before\s*\{[\s\S]*border:\s*1px solid rgba\(255,\s*255,\s*255,\s*0\.38\);/s);
    assert.match(indexHtml, /\.bottom-controller::before\s*\{[\s\S]*radial-gradient\(140% 140% at 50% -28%/s);
    assert.match(indexHtml, /\.bottom-controller::before\s*\{[\s\S]*blur\(28px\) saturate\(180%\);/s);
    assert.match(indexHtml, /\.bottom-controller::after\s*\{[\s\S]*bottom:\s*-6px;[\s\S]*height:\s*14px;[\s\S]*radial-gradient\(ellipse at center,/s);
});

test('library grid has a list view layout and list card template', () => {
    assert.match(indexHtml, /\.library-grid\s*\{[\s\S]*gap:\s*4px;/s);
    assert.match(indexHtml, /\.library-grid\.list-view\s*\{[\s\S]*grid-template-columns:\s*1fr;/s);
    assert.match(indexHtml, /\.library-grid\.list-view\s*\{[\s\S]*gap:\s*4px;/s);
    assert.match(indexHtml, /\.icon-card\s*\{[\s\S]*border:\s*0;/s);
    assert.match(indexHtml, /function renderGridCard\(icon\)\s*\{/);
    assert.match(indexHtml, /function renderGridCard\(icon\)\s*\{[\s\S]*const glyphCharacter = getGlyphCharacter\(icon\.key\);/s);
    assert.match(indexHtml, /class="card-copy-button" data-copy-kind="glyph" data-copy-value="\$\{escapeHtml\(glyphCharacter\)\}">Copy<\/button>/);
    assert.match(indexHtml, /function renderListCard\(icon\)\s*\{/);
    assert.match(indexHtml, /libraryGrid\.classList\.toggle\('list-view',\s*state\.viewMode === 'list'\);[\s\S]*if \(state\.loadError\)/s);
    assert.match(indexHtml, /if \(state\.viewMode === 'grid'\) \{/);
    assert.match(indexHtml, /data-card-type="list"/);
    assert.match(indexHtml, /data-glyph-key="\$\{escapeHtml\(icon\.key\)\}"/);
    assert.match(indexHtml, /data-category="\$\{escapeHtml\(icon\.category\)\}"/);
    assert.match(indexHtml, /data-kind="\$\{escapeHtml\(icon\.kind\)\}"/);
    assert.doesNotMatch(indexHtml, /glyph key/);
    assert.match(indexHtml, /const supplementalTerms = \(Array\.isArray\(icon\.synonyms\) && icon\.synonyms\.length > 0 \? icon\.synonyms : icon\.keywords \|\| \[\]\)\.slice\(0,\s*3\);/);
    assert.match(indexHtml, /class="list-card-search-terms">\$\{escapeHtml\(supplementalTerms\.join\(' · '\)\)\}<\/div>/);
    assert.match(indexHtml, /class="list-action-group copy-action-group"/);
    assert.match(indexHtml, /class="list-action-main glyph-copy-button" data-action-kind="copy-glyph"/);
    assert.match(indexHtml, /class="list-action-group download-action-group"/);
    assert.match(indexHtml, /class="list-action-main svg-download-button" data-action-kind="download-svg"/);
    assert.match(indexHtml, /class="list-action-menu-toggle" data-menu-group="copy"/);
    assert.match(indexHtml, /class="list-action-menu-toggle" data-menu-group="download"/);
    assert.match(indexHtml, /icon--chevron_down_line/);
    assert.match(indexHtml, /글리프 복사/);
    assert.match(indexHtml, /클래스 복사/);
    assert.match(indexHtml, /SVG 복사/);
    assert.match(indexHtml, /PNG 복사/);
    assert.match(indexHtml, /SVG 다운로드/);
    assert.match(indexHtml, /PNG 다운로드/);
    assert.match(indexHtml, /const glyphCharacter = getGlyphCharacter\(icon\.key\);/);
    assert.match(indexHtml, /icon--copy_line/);
    assert.doesNotMatch(indexHtml, /icon--clipboard_blank_fill/);
    assert.doesNotMatch(indexHtml, /\.list-copy-button:hover\s*\{[\s\S]*translateY\(-1px\)/s);
});

test('copy handler distinguishes glyph copy from class key copy in list view', () => {
    assert.match(indexHtml, /if \(copyButton\.dataset\.copyKind === 'glyph'\) \{/);
    assert.match(indexHtml, /showToast\('글리프를 복사했습니다\.'\);/);
    assert.match(indexHtml, /showToast\(`클래스 키를 복사했습니다: \$\{value\}`\);/);
});

test('list action helpers support source svg and rendered png operations', () => {
    assert.match(indexHtml, /function getSourceIconUrl\(icon\)\s*\{/);
    assert.match(indexHtml, /icon\.kind === 'fill' \? `\/fill-icons\/\$\{sourceStem\}\.svg` : `\/line-icons\/\$\{sourceStem\}\.svg`/);
    assert.match(indexHtml, /async function copySvgSource\(icon\)\s*\{/);
    assert.match(indexHtml, /async function renderGlyphPngBlob\(icon\)\s*\{/);
    assert.match(indexHtml, /ctx\.font = `\$\{state\.previewWeight\} \${canvasSize}px 'MyIconFont'`;/);
});

test('card titles and visible button labels use medium weight', () => {
    assert.match(indexHtml, /\.card-title\s*\{[\s\S]*font-weight:\s*500;/s);
    assert.match(indexHtml, /\.list-copy-button\s*\{[\s\S]*font-weight:\s*500;/s);
});

test('empty search state is centered and shows the active filter summary', () => {
    assert.match(indexHtml, /\.empty-card\s*\{[\s\S]*min-height:\s*320px;[\s\S]*padding:\s*72px 24px 56px;/s);
    assert.match(indexHtml, /\.empty-card strong\s*\{[\s\S]*font-size:\s*22px;/s);
    assert.match(indexHtml, /\.empty-card-filters\s*\{[\s\S]*font-size:\s*12px;/s);
    assert.match(indexHtml, /function getEmptyStateFilters\(\)\s*\{/);
    assert.match(indexHtml, /현재 조건: \$\{escapeHtml\(emptyStateFilters\.join\(' · '\)\)\}/);
});

test('view toggle click rerenders the library immediately', () => {
    assert.ok(
        indexHtml.includes(`viewToggleButton.addEventListener('click', () => {
            state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
            syncViewToggleState();
            renderGrid();
        });`)
    );
});
