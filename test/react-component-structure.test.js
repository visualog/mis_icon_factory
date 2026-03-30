const fs = require('fs');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert/strict');

const projectRoot = path.join(__dirname, '..');
const appFile = path.join(projectRoot, 'frontend', 'src', 'App.jsx');

test('react migration ui is split into reusable component files', () => {
    const requiredFiles = [
        'frontend/src/components/Dropdown.jsx',
        'frontend/src/components/LibraryHero.jsx',
        'frontend/src/components/BottomController.jsx',
        'frontend/src/components/IconCard.jsx',
        'frontend/src/components/IconDetailSheet.jsx',
        'frontend/src/components/StatusToast.jsx',
        'frontend/src/components/DragOverlay.jsx'
    ];

    requiredFiles.forEach((relativePath) => {
        assert.equal(
            fs.existsSync(path.join(projectRoot, relativePath)),
            true,
            `${relativePath} should exist`
        );
    });
});

test('app imports extracted shell components instead of defining everything inline', () => {
    const source = fs.readFileSync(appFile, 'utf8');
    const dropdownSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'components', 'Dropdown.jsx'), 'utf8');

    assert.match(dropdownSource, /from ['"]react-dom['"]/);
    assert.match(dropdownSource, /createPortal/);
    assert.match(dropdownSource, /triggerRef/);
    assert.match(dropdownSource, /triggerRef\.current\.getBoundingClientRect\(\)/);
    assert.match(dropdownSource, /const menuGap = 10;/);
    assert.match(dropdownSource, /triggerRect\.bottom \+ menuGap/);
    assert.match(dropdownSource, /bottom:\s*renderDown\s*\?\s*'auto'\s*:\s*`\$\{Math\.max\(gutter,\s*viewportHeight - triggerRect\.top \+ menuGap\)\}px`/);
    assert.match(dropdownSource, /const renderedHeight = Math\.min\(menuRect\.height, maxHeight\);/);
    assert.match(dropdownSource, /maxHeight:/);
    assert.match(dropdownSource, /overflowY:\s*'auto'/);
    assert.match(source, /from ['"]\.\/components\/Dropdown\.jsx['"]/);
    assert.match(source, /from ['"]\.\/components\/LibraryHero\.jsx['"]/);
    assert.match(source, /from ['"]\.\/components\/BottomController\.jsx['"]/);
    assert.match(source, /from ['"]\.\/components\/IconCard\.jsx['"]/);
    assert.match(source, /from ['"]\.\/components\/IconDetailSheet\.jsx['"]/);
    assert.match(source, /from ['"]\.\/components\/StatusToast\.jsx['"]/);
    assert.match(source, /from ['"]\.\/components\/DragOverlay\.jsx['"]/);
    assert.doesNotMatch(source, /function Dropdown\s*\(/);
    assert.match(dropdownSource, /renderOption/);
    assert.match(dropdownSource, /icon--chevron_down_line/);
    assert.match(dropdownSource, /icon--chevron_up_line/);
    assert.match(dropdownSource, /icon--approve_line/);
});

test('card and detail components expose dedicated layout hooks for design polish', () => {
    const cardSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'components', 'IconCard.jsx'), 'utf8');
    const detailSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'components', 'IconDetailSheet.jsx'), 'utf8');
    const heroSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'components', 'LibraryHero.jsx'), 'utf8');
    const controllerSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'components', 'BottomController.jsx'), 'utf8');
    const appSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'App.jsx'), 'utf8');

    assert.match(cardSource, /icon-card-surface/);
    assert.match(cardSource, /card-preview-stage/);
    assert.match(detailSource, /icon-detail-sheet-shell/);
    assert.match(detailSource, /icon-detail-metadata-stack/);
    assert.match(detailSource, /icon-detail-source-preview-block/);
    assert.match(heroSource, /data-tooltip=/);
    assert.match(heroSource, /hero-sort-wrap/);
    assert.match(heroSource, /hero-summary-pill hidden/);
    assert.match(heroSource, /icon--grid_view_sm_line/);
    assert.match(heroSource, /icon--card_list_view_line/);
    assert.match(appSource, /const \[kind, setKind\] = useState\('line'\)/);
    assert.match(appSource, /label: 'Light'/);
    assert.match(appSource, /label: 'Bold'/);
    assert.match(appSource, /const sizeOptions = \['16px', '20px', '24px'/);
    assert.match(appSource, /'Signal Blue'/);
    assert.match(appSource, /'Amber'/);
    assert.match(appSource, /'Violet'/);
    assert.match(controllerSource, /triggerClassName="category-trigger"/);
    assert.match(controllerSource, /menuClassName="category-menu"/);
    assert.match(controllerSource, /triggerClassName="kind-trigger"/);
    assert.match(controllerSource, /menuClassName="kind-menu"/);
    assert.match(controllerSource, /triggerClassName="weight-trigger"/);
    assert.match(controllerSource, /menuClassName="weight-menu"/);
    assert.match(controllerSource, /triggerClassName="size-trigger"/);
    assert.match(controllerSource, /menuClassName="size-menu"/);
    assert.match(controllerSource, /triggerClassName="palette-trigger"/);
    assert.match(controllerSource, /menuClassName="palette-menu"/);
    assert.match(controllerSource, /renderOption=\{\(option\) =>/);
    assert.match(controllerSource, /palette-option-content/);
    assert.match(controllerSource, /palette-option-swatch/);
    assert.match(controllerSource, /palette-option-label/);
    assert.match(controllerSource, /icon--close_sm_line/);
    assert.match(controllerSource, /icon--plus_circle_fill/);
    assert.match(detailSource, /icon--close_sm_line/);
    assert.match(detailSource, /icon--preview_line/);
    assert.match(detailSource, /icon--copy_line/);
    assert.match(detailSource, /icon--download_line/);
});

test('react typography polish keeps key title and detail label values aligned with the static design', () => {
    const stylesSource = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'styles.css'), 'utf8');

    assert.match(stylesSource, /\.icon-card-title\s*\{[\s\S]*font-weight:\s*500;/);
    assert.match(stylesSource, /\.icon-card-title\s*\{[\s\S]*letter-spacing:\s*-0\.01em;/);
    assert.match(stylesSource, /\.icon-detail-panel-title\s*\{[\s\S]*font-size:\s*12px;/);
    assert.match(stylesSource, /\.icon-detail-info-label\s*\{[\s\S]*font-size:\s*11px;/);
    assert.match(stylesSource, /\.icon-detail-info-label\s*\{[\s\S]*margin-bottom:\s*8px;/);
    assert.match(stylesSource, /\.hero-sort-trigger\s*\{[\s\S]*font-size:\s*12px;/);
    assert.match(stylesSource, /\.hero-sort-trigger\s*\{[\s\S]*font-weight:\s*500;/);
    assert.match(stylesSource, /\.hero-view-toggle\s*\{[\s\S]*min-width:\s*92px;/);
    assert.match(stylesSource, /\.search-field\s*\{[\s\S]*padding:\s*0 14px;/);
    assert.match(stylesSource, /\.search-field\s*\{[\s\S]*font-size:\s*14px;/);
    assert.match(stylesSource, /\.search-field::\-webkit-search-cancel-button\s*\{[\s\S]*appearance:\s*none;/);
    assert.match(stylesSource, /\.list-card\s+\.card-subtitle\s*\{[\s\S]*font-size:\s*12px;/);
    assert.match(stylesSource, /\.icon-detail-action\s*\{[\s\S]*text-align:\s*center;/);
    assert.match(stylesSource, /\.list-action-group\s*\{[\s\S]*z-index:\s*0;/);
    assert.match(stylesSource, /\.icon-detail-token-remove\s*\{[\s\S]*font-size:\s*11px;/);
    assert.doesNotMatch(stylesSource, /\.icon-detail-token-remove\s*\{[\s\S]*margin-left:\s*6px;/);
    assert.match(stylesSource, /\.grid-card\s+\.card-top\s*\{[\s\S]*transform:\s*translateY\(-4px\);/);
    assert.match(stylesSource, /\.card-devtools\s*\{[\s\S]*padding:\s*8px 10px;/);
    assert.match(stylesSource, /\.card-copy-button\s*\{[\s\S]*font-size:\s*11px;/);
    assert.match(stylesSource, /\.icon-detail-size-card\s*\{[\s\S]*gap:\s*10px;/);
    assert.match(stylesSource, /\.icon-card:hover,\s*\.icon-card:focus-within\s*\{[\s\S]*transform:\s*none;/);
    assert.match(stylesSource, /\.dropdown-menu\s*\{[\s\S]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.42\);/);
    assert.match(stylesSource, /\.dropdown-menu\s*\{[\s\S]*-webkit-backdrop-filter:\s*blur\(8px\)\s*saturate\(145%\);/);
    assert.match(stylesSource, /\.dropdown-menu\s*\{[\s\S]*backdrop-filter:\s*blur\(8px\)\s*saturate\(145%\);/);
    assert.match(stylesSource, /\.dropdown-menu::before\s*\{[\s\S]*linear-gradient\(180deg,\s*rgba\(255,\s*255,\s*255,\s*0\.24\),\s*rgba\(255,\s*255,\s*255,\s*0\.06\)\),/);
    assert.match(stylesSource, /\.dropdown-menu::before\s*\{[\s\S]*-webkit-backdrop-filter:\s*blur\(8px\)\s*saturate\(150%\);/);
    assert.match(stylesSource, /\.dropdown-menu::before\s*\{[\s\S]*backdrop-filter:\s*blur\(8px\)\s*saturate\(150%\);/);
    assert.match(stylesSource, /\.palette-option\s*\{[\s\S]*min-height:\s*42px;/);
    assert.match(stylesSource, /\.palette-option-content\s*\{[\s\S]*display:\s*inline-flex;/);
    assert.match(stylesSource, /\.palette-option-swatch\s*\{[\s\S]*width:\s*18px;/);
    assert.match(stylesSource, /\.palette-option-label\s*\{[\s\S]*white-space:\s*nowrap;/);
});
