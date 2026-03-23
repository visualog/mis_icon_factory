const test = require('node:test');
const assert = require('node:assert/strict');

const {
    inferCategory,
    buildKeywords,
    buildSynonyms,
    buildMetadataCatalog
} = require('../font_factory/icon-metadata-generator');

test('inferCategory groups representative icons into expected library categories', () => {
    assert.equal(inferCategory('megaphone_line'), 'communication');
    assert.equal(inferCategory('folder_fill'), 'files');
    assert.equal(inferCategory('ip_address'), 'device');
});

test('buildSynonyms generates natural-language search terms for representative icons', () => {
    assert.deepEqual(
        buildSynonyms('megaphone_line', 'Megaphone').slice(0, 6),
        ['megaphone', '공지', '알림', '안내', '방송', 'notice']
    );
    assert.ok(buildSynonyms('folder_fill', 'Folder').includes('폴더'));
    assert.ok(buildSynonyms('ip_address', 'IP Address').includes('아이피'));
});

test('buildKeywords and buildMetadataCatalog create metadata entries for built glyphs', () => {
    const css = `
        .icon--megaphone_line::before { content: "\\e001"; }
        .icon--folder_fill::before { content: "\\e002"; }
    `;

    assert.ok(buildKeywords('folder_fill', 'Folder').includes('directory'));

    const catalog = buildMetadataCatalog(css, {});

    assert.deepEqual(Object.keys(catalog.icons), ['folder_fill', 'megaphone_line']);
    assert.equal(catalog.icons.megaphone_line.category, 'communication');
    assert.ok(catalog.icons.folder_fill.synonyms.includes('폴더'));
});
