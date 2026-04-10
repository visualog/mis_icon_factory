const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { buildLibraryEntries } = require('../font_factory/library-manifest');
const { getOutputDir } = require('../font_factory/runtime-paths');

const metadataPath = path.join(
    '/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library',
    'font_factory',
    'icon-metadata.json'
);

const schemaPath = path.join(
    '/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library',
    'font_factory',
    'icon-metadata.schema.json'
);

test('icon metadata files exist and parse as JSON', () => {
    assert.equal(fs.existsSync(metadataPath), true);
    assert.equal(fs.existsSync(schemaPath), true);

    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

    assert.equal(typeof metadata, 'object');
    assert.equal(typeof schema, 'object');
});

test('icon metadata sample entry follows the documented shape', () => {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const sample = metadata.icons.megaphone_line;

    assert.ok(sample.displayName);
    assert.ok(sample.category);
    assert.ok(Array.isArray(sample.keywords));
    assert.ok(Array.isArray(sample.synonyms));
    assert.ok(
        sample.createdVersion === undefined || typeof sample.createdVersion === 'string'
    );
    assert.ok(
        sample.lastChangedVersion === undefined || typeof sample.lastChangedVersion === 'string'
    );

    assert.equal(sample.displayName, 'Megaphone');
    assert.equal(sample.category, 'communication');
    assert.deepEqual(sample.keywords, ['announcement', 'broadcast', 'notification']);
    assert.deepEqual(sample.synonyms, ['공지', '알림', '안내', '방송', 'notice', 'alert']);
});

test('icon metadata covers every built glyph with non-empty synonyms', () => {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const css = fs.readFileSync(path.join(getOutputDir(), 'my-icon-font.css'), 'utf8');
    const builtEntries = buildLibraryEntries(css);

    assert.equal(Object.keys(metadata.icons).length, builtEntries.length);

    for (const entry of builtEntries) {
        const iconMetadata = metadata.icons[entry.key];
        assert.ok(iconMetadata, `missing metadata for ${entry.key}`);
        assert.equal(Array.isArray(iconMetadata.synonyms), true, `synonyms missing for ${entry.key}`);
        assert.ok(iconMetadata.synonyms.length > 0, `synonyms empty for ${entry.key}`);
    }
});
