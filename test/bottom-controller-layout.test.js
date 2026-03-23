const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const indexHtml = fs.readFileSync(
    '/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html',
    'utf8'
);

test('category dropdown is placed before the weight control in the bottom controller', () => {
    assert.match(
        indexHtml,
        /<aside id="bottomController"[\s\S]*<div class="controller-group">[\s\S]*<div class="category-dropdown dropdown dropdown--up">[\s\S]*<button id="categoryTrigger" class="dropdown-trigger category-trigger"[\s\S]*<div id="categoryMenu" class="dropdown-menu category-menu"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group controller-search-group">[\s\S]*<div class="search-combo controller-search">[\s\S]*<input id="searchInput" class="search-field"[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<div class="controller-group">[\s\S]*<div class="weight-dropdown dropdown dropdown--up">/s
    );
});

test('bottom category menu is anchored from the left edge of its trigger', () => {
    assert.match(indexHtml, /\.category-menu\s*\{[\s\S]*left:\s*0;[\s\S]*right:\s*auto;[\s\S]*transform-origin:\s*bottom left;/s);
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
