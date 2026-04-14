const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const indexHtml = fs.readFileSync(
    path.join(process.cwd(), 'font_factory', 'public', 'index.html'),
    'utf8'
);

test('category and kind dropdowns are placed before search and weight controls in the bottom controller', () => {
    assert.match(
        indexHtml,
        /<aside id="bottomController"[\s\S]*<div class="controller-group">[\s\S]*<div class="category-dropdown dropdown dropdown--up">[\s\S]*<button id="categoryTrigger" class="dropdown-trigger category-trigger"[\s\S]*<div id="categoryMenu" class="dropdown-menu category-menu"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group">[\s\S]*<div class="kind-dropdown dropdown dropdown--up">[\s\S]*<button id="kindTrigger" class="dropdown-trigger kind-trigger"[\s\S]*<div id="kindMenu" class="dropdown-menu kind-menu"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group controller-search-group">[\s\S]*<div class="search-combo controller-search">[\s\S]*<input id="searchInput" class="search-field"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group">[\s\S]*<div class="weight-dropdown dropdown dropdown--up">/s
    );
});

test('default controller state starts with line kind, medium weight, and 64px preview size', () => {
    assert.match(indexHtml, /<span id="kindTriggerLabel">Line<\/span>/);
    assert.match(indexHtml, /<span id="weightTriggerLabel">Medium<\/span>/);
    assert.match(indexHtml, /<span id="sizeTriggerLabel">64px<\/span>/);
    assert.match(indexHtml, /kind:\s*'line'/);
    assert.match(indexHtml, /previewWeight:\s*500/);
    assert.match(indexHtml, /previewSize:\s*64/);
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

test('bottom controller now uses a single shell without pseudo-element glass layers', () => {
    assert.doesNotMatch(indexHtml, /\.bottom-controller::before\s*\{/s);
    assert.doesNotMatch(indexHtml, /\.bottom-controller::after\s*\{/s);
    assert.match(indexHtml, /<div id="bottomControllerDim" class="bottom-controller-dim" aria-hidden="true">[\s\S]*bottom-controller-dim-layer layer-1[\s\S]*bottom-controller-dim-layer layer-5[\s\S]*bottom-controller-dim-overlay[\s\S]*<\/div>\s*<aside id="bottomController"/s);
    assert.match(indexHtml, /\.bottom-controller-dim\s*\{[\s\S]*position:\s*fixed;[\s\S]*height:\s*80px;[\s\S]*pointer-events:\s*none;/s);
    assert.match(indexHtml, /\.bottom-controller-dim-layer\s*\{[\s\S]*-webkit-backdrop-filter:\s*blur\(var\(--blur\)\) saturate\(118%\);/s);
    assert.match(indexHtml, /\.bottom-controller-dim-layer\.layer-1\s*\{[\s\S]*--blur:\s*40px;[\s\S]*--mask:\s*linear-gradient\(to top,/s);
    assert.match(indexHtml, /\.bottom-controller-dim-layer\.layer-5\s*\{[\s\S]*--blur:\s*6px;[\s\S]*--mask:\s*linear-gradient\(to top,/s);
    assert.match(indexHtml, /\.bottom-controller-dim-overlay\s*\{[\s\S]*background:\s*linear-gradient\(\s*0deg,/s);
    assert.match(indexHtml, /\.bottom-controller\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.22\);/s);
    assert.match(indexHtml, /\.bottom-controller\s*\{[\s\S]*-webkit-backdrop-filter:\s*blur\(28px\) saturate\(180%\);/s);
    assert.match(indexHtml, /\.bottom-controller\s*\{[\s\S]*box-shadow:\s*0 12px 28px rgba\(48,\s*41,\s*29,\s*0\.08\),\s*inset 0 1px 0 rgba\(255,\s*255,\s*255,\s*0\.72\),\s*inset 0 -1px 0 rgba\(122,\s*114,\s*98,\s*0\.06\),\s*inset 0 12px 24px rgba\(255,\s*255,\s*255,\s*0\.14\);/s);
});

test('content can visibly pass underneath the bottom controller like an iOS tab bar', () => {
    assert.match(indexHtml, /\.content-scroll\s*\{[\s\S]*padding:\s*0 24px calc\(var\(--controller-height\)\s*\+\s*28px\);/s);
    assert.match(indexHtml, /\.library-shell\s*\{[\s\S]*padding-bottom:\s*0;/s);
    assert.match(indexHtml, /@media \(max-width:\s*640px\)\s*\{[\s\S]*\.content-scroll\s*\{[\s\S]*padding:\s*0 14px calc\(var\(--controller-height\)\s*\+\s*28px\);/s);
    assert.match(indexHtml, /\.bottom-controller\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.22\);/s);
});

test('content scroll reserves bottom space from the measured bottom controller height', () => {
    assert.match(
        indexHtml,
        /\.content-scroll\s*\{[\s\S]*padding:\s*0 24px calc\(var\(--controller-height\)\s*\+\s*28px\);/s
    );
    assert.match(
        indexHtml,
        /@media \(max-width:\s*640px\)\s*\{[\s\S]*\.content-scroll\s*\{[\s\S]*padding:\s*0 14px calc\(var\(--controller-height\)\s*\+\s*28px\);/s
    );
    assert.match(indexHtml, /function syncControllerHeight\(\)\s*\{/);
    assert.match(indexHtml, /document\.documentElement\.style\.setProperty\('--controller-height', `\$\{Math\.ceil\(height\)\}px`\);/);
});

test('library grid has a list view layout and list card template', () => {
    assert.match(indexHtml, /\.library-grid\s*\{[\s\S]*gap:\s*4px;/s);
    assert.match(indexHtml, /\.library-grid\.list-view\s*\{[\s\S]*grid-template-columns:\s*1fr;/s);
    assert.match(indexHtml, /\.library-grid\.list-view\s*\{[\s\S]*gap:\s*4px;/s);
    assert.match(indexHtml, /\.icon-card\s*\{[\s\S]*border:\s*0;/s);
    assert.match(indexHtml, /\.icon-card\s*\{[\s\S]*box-shadow:\s*none;/s);
    assert.match(indexHtml, /\.icon-card:hover,\s*\.icon-card:focus-within\s*\{[\s\S]*box-shadow:\s*0 18px 34px rgba\(48,\s*41,\s*29,\s*0\.1\);/s);
    assert.match(indexHtml, /\.grid-card \.card-top\s*\{[\s\S]*opacity:\s*0;/s);
    assert.match(indexHtml, /\.grid-card:hover \.card-top,\s*\.grid-card:focus-within \.card-top\s*\{[\s\S]*opacity:\s*1;/s);
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
    assert.match(indexHtml, /class="list-action-main glyph-copy-button" data-menu-group="copy" aria-haspopup="menu" aria-expanded="false"/);
    assert.match(indexHtml, /class="list-action-group download-action-group"/);
    assert.match(indexHtml, /class="list-action-main svg-download-button" data-menu-group="download" aria-haspopup="menu" aria-expanded="false"/);
    assert.match(indexHtml, /icon--chevron_down_line list-action-main-chevron/);
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

test('icon detail bottom sheet shell exists with dialog semantics and state hooks', () => {
    assert.match(indexHtml, /selectedIconKey:\s*null/);
    assert.match(
        indexHtml,
        /<div id="iconDetailSheetBackdrop" class="icon-detail-sheet-backdrop" hidden><\/div>[\s\S]*<section id="iconDetailSheet" class="icon-detail-sheet" role="dialog" aria-modal="true" aria-labelledby="iconDetailTitle" hidden>/s
    );
    assert.match(indexHtml, /<button id="iconDetailCloseButton" class="icon-detail-close" type="button" aria-label="상세 닫기">/);
});

test('icon detail bottom sheet includes source preview, metadata, and size previews', () => {
    assert.match(indexHtml, /function getSelectedIcon\(\)\s*\{/);
    assert.match(indexHtml, /function renderIconDetailSheet\(\)\s*\{/);
    assert.match(indexHtml, /class="icon-detail-source-panel"/);
    assert.match(indexHtml, /<span class="icon-detail-panel-title">Preview<\/span>/);
    assert.match(indexHtml, /class="icon-detail-source-stage/);
    assert.match(indexHtml, /\.icon-detail-source-stage\s*\{[\s\S]*aspect-ratio:\s*1 \/ 1;/s);
    assert.match(indexHtml, /id="iconDetailSourceStage" class="icon-detail-source-stage">[\s\S]*id="iconDetailKeylineToggle"[\s\S]*hidden/);
    assert.match(indexHtml, /id="iconDetailSourceImage"/);
    assert.match(indexHtml, /class="icon-detail-source-preview-block"/);
    assert.match(indexHtml, /class="icon-detail-source-panel"[\s\S]*id="iconDetailSizePreviews"/);
    assert.match(indexHtml, /class="icon-detail-webfont-panel"/);
    assert.match(indexHtml, /id="iconDetailGlyphKey"/);
    assert.match(indexHtml, /id="iconDetailClassKey"/);
    assert.match(indexHtml, /id="iconDetailCategory"/);
    assert.match(indexHtml, /id="iconDetailKind"/);
    assert.match(indexHtml, /class="icon-detail-size-previews"/);
    assert.match(indexHtml, /const detailPreviewSizes = \[16,\s*20,\s*24,\s*32,\s*48,\s*64\];/);
});

test('icon detail bottom sheet includes consolidated copy and download actions', () => {
    assert.match(indexHtml, /class="icon-detail-actions"/);
    assert.match(indexHtml, /data-detail-action="copy-glyph"/);
    assert.match(indexHtml, /data-detail-action="copy-class"/);
    assert.match(indexHtml, /data-detail-action="copy-svg"/);
    assert.match(indexHtml, /data-detail-action="copy-png"/);
    assert.match(indexHtml, /data-detail-action="download-svg"/);
    assert.match(indexHtml, /data-detail-action="download-png"/);
});

test('icon cards open the detail sheet but inner action buttons do not', () => {
    assert.match(indexHtml, /function openIconDetail\(/);
    assert.match(indexHtml, /function closeIconDetail\(/);
    assert.match(indexHtml, /const detailOpenButton = event\.target\.closest\('\.card-copy-button, \.list-action-main, \.list-action-item'\);/);
    assert.match(indexHtml, /const clickableCard = event\.target\.closest\('\.icon-card'\);/);
    assert.match(indexHtml, /openIconDetail\(cardIcon\);/);
});

test('icon detail bottom sheet supports backdrop and escape dismissal', () => {
    assert.match(indexHtml, /iconDetailSheetBackdrop\.addEventListener\('click',\s*\(\)\s*=>\s*\{\s*closeIconDetail\(\);\s*\}\);/s);
    assert.match(indexHtml, /if \(event\.key === 'Escape'\) \{[\s\S]*closeIconDetail\(\);/s);
});

test('icon detail phase 2 exposes half-sheet polish hooks and selected card state hooks', () => {
    assert.match(indexHtml, /\.icon-detail-sheet\s*\{[\s\S]*max-height:\s*min\(82vh,\s*920px\);/s);
    assert.match(indexHtml, /\.icon-detail-sheet-backdrop\s*\{[\s\S]*background:\s*rgba\(18,\s*19,\s*24,\s*0\.32\);/s);
    assert.match(indexHtml, /\.icon-card\.detail-active\s*\{/);
    assert.match(indexHtml, /class="icon-detail-sheet-body icon-detail-sheet-body--phase2"/);
});

test('icon detail metadata section exposes edit-mode structural hooks and safe area guide hook', () => {
    assert.match(indexHtml, /detailEditing:\s*false/);
    assert.match(indexHtml, /detailDirty:\s*false/);
    assert.match(indexHtml, /detailKeylineVisible:\s*true/);
    assert.match(indexHtml, /id="iconDetailMetadataHeader"/);
    assert.match(indexHtml, /id="iconDetailEditButton"/);
    assert.match(indexHtml, /id="iconDetailSaveButton"/);
    assert.match(indexHtml, /id="iconDetailCancelButton"/);
    assert.match(indexHtml, /id="iconDetailUnsavedBadge"/);
    assert.match(indexHtml, /id="iconDetailDisplayNameInput"/);
    assert.match(indexHtml, /id="iconDetailKeywordsInput"/);
    assert.match(indexHtml, /id="iconDetailSynonymsInput"/);
    assert.match(indexHtml, /\.icon-detail-source-stage\.keyline-visible \.icon-detail-safe-area/);
});

test('icon detail phase 2 uses animated half-sheet classes and selected-card active state in both views', () => {
    assert.match(indexHtml, /\.icon-detail-sheet\s*\{[\s\S]*opacity:\s*0;[\s\S]*transform:\s*translateX\(-50%\) translateY\(20px\);[\s\S]*transition:\s*opacity 220ms ease,\s*transform 260ms cubic-bezier\(0\.22,\s*1,\s*0\.36,\s*1\);/s);
    assert.match(indexHtml, /\.icon-detail-sheet\.is-open\s*\{[\s\S]*opacity:\s*1;[\s\S]*transform:\s*translateX\(-50%\) translateY\(0\);/s);
    assert.match(indexHtml, /\.icon-detail-sheet-backdrop\s*\{[\s\S]*opacity:\s*0;[\s\S]*transition:\s*opacity 220ms ease;/s);
    assert.match(indexHtml, /\.icon-detail-sheet-backdrop\.is-open\s*\{[\s\S]*opacity:\s*1;/s);
    assert.match(indexHtml, /function renderGridCard\(icon\)\s*\{[\s\S]*const isDetailActive = state\.selectedIconKey === icon\.key;[\s\S]*class="icon-card grid-card\$\{isDetailActive \? ' detail-active' : ''\}"/s);
    assert.match(indexHtml, /function renderListCard\(icon\)\s*\{[\s\S]*const isDetailActive = state\.selectedIconKey === icon\.key;[\s\S]*class="icon-card list-card\$\{isDetailActive \? ' detail-active' : ''\}"/s);
});

test('icon detail subtitle is simplified and open/close logic toggles animated open classes', () => {
    assert.match(indexHtml, /iconDetailSubtitle\.textContent = `\$\{getCategoryLabel\(icon\.category\)\} · \$\{getKindLabel\(icon\.kind\)\}`;/);
    assert.match(indexHtml, /requestAnimationFrame\(\(\) => \{\s*iconDetailSheetBackdrop\.classList\.add\('is-open'\);\s*iconDetailSheet\.classList\.add\('is-open'\);\s*\}\);/s);
    assert.match(indexHtml, /iconDetailSheetBackdrop\.classList\.remove\('is-open'\);\s*iconDetailSheet\.classList\.remove\('is-open'\);/s);
});

test('icon detail metadata edit mode keeps a local draft and dirty-state helpers', () => {
    assert.match(indexHtml, /detailDraft:\s*null/);
    assert.match(indexHtml, /function createDetailDraft\(icon\)\s*\{/);
    assert.match(indexHtml, /function setDetailDraftField\(field,\s*value\)\s*\{/);
    assert.match(indexHtml, /function addDetailToken\(field,\s*rawValue\)\s*\{/);
    assert.match(indexHtml, /function removeDetailToken\(field,\s*index\)\s*\{/);
    assert.match(indexHtml, /function syncDetailEditingState\(icon\)\s*\{/);
});

test('icon detail metadata edit mode wires edit cancel and local token input behavior', () => {
    assert.match(indexHtml, /iconDetailEditButton\.addEventListener\('click',\s*\(\)\s*=>\s*\{/);
    assert.match(indexHtml, /state\.detailEditing = true;/);
    assert.match(indexHtml, /state\.detailDraft = createDetailDraft\(icon\);/);
    assert.match(indexHtml, /iconDetailCancelButton\.addEventListener\('click',\s*\(\)\s*=>\s*\{/);
    assert.match(indexHtml, /state\.detailEditing = false;/);
    assert.match(indexHtml, /state\.detailDirty = false;/);
    assert.match(indexHtml, /state\.detailDraft = null;/);
    assert.match(indexHtml, /iconDetailDisplayNameInput\.addEventListener\('input',/);
    assert.match(indexHtml, /iconDetailKeywordsInput\.addEventListener\('keydown',/);
    assert.match(indexHtml, /iconDetailSynonymsInput\.addEventListener\('keydown',/);
    assert.match(indexHtml, /class="icon-detail-token-remove"/);
});

test('icon detail metadata save persists through the metadata API before committing local state', () => {
    assert.match(indexHtml, /async function persistDetailDraft\(\)\s*\{/);
    assert.match(indexHtml, /fetch\(`\/api\/icon-metadata\/\$\{encodeURIComponent\(icon\.key\)\}`,\s*\{/);
    assert.match(indexHtml, /method:\s*'POST'/);
    assert.match(indexHtml, /const savedIcon = await persistDetailDraft\(\);/);
    assert.match(indexHtml, /commitDetailDraft\(savedIcon\);/);
    assert.match(indexHtml, /showToast\('메타데이터를 업데이트했습니다\.'\);/);
});

test('icon detail keyline overlay exposes square and circular inspection guides with helper copy', () => {
    assert.match(indexHtml, /class="icon-detail-frame-guide" aria-hidden="true"/);
    assert.match(indexHtml, /class="icon-detail-circle-guide" aria-hidden="true"/);
    assert.match(indexHtml, /class="icon-detail-safe-area" aria-hidden="true"/);
});
