const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const indexHtml = fs.readFileSync(
    '/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html',
    'utf8'
);

test('topbar keeps only the upload action and no longer contains search or category controls', () => {
    const topbarHtml = indexHtml.match(/<header class="topbar">[\s\S]*?<\/header>/)?.[0] || '';
    assert.match(topbarHtml, /id="uploadButton"/);
    assert.doesNotMatch(topbarHtml, /id="searchInput"/);
    assert.doesNotMatch(topbarHtml, /id="categoryTrigger"/);
});

test('topbar category dropdown uses the shared dropdown component helper', () => {
    assert.match(indexHtml, /function createDropdownComponent\(\s*\{/);
    assert.match(indexHtml, /const categoryDropdownComponent = createDropdownComponent\(\s*\{/);
});

test('search combo owns the focus ring instead of nested field outlines', () => {
    assert.match(
        indexHtml,
        /\.search-combo:focus-within \.search-combo-shell\s*\{[\s\S]*outline:\s*3px solid rgba\(31,\s*111,\s*255,\s*0\.35\);[\s\S]*outline-offset:\s*3px;/s
    );
    assert.match(indexHtml, /\.search-combo \.search-field:focus-visible[\s\S]*outline:\s*none;/s);
});
