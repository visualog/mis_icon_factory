const test = require('node:test');
const assert = require('node:assert/strict');

const {
    sortLibraryIcons,
    buildCategoryOptions,
    buildKindOptions
} = require('../frontend/src/libraryControls.js');

const sampleIcons = [
    { key: 'shield_fill', displayName: 'Shield', category: 'security', kind: 'fill' },
    { key: 'calendar_line', displayName: 'Calendar', category: 'time', kind: 'line' },
    { key: 'alarm_line', displayName: 'Alarm', category: 'time', kind: 'line' }
];

test('sortLibraryIcons sorts by display name for name mode', () => {
    const sorted = sortLibraryIcons(sampleIcons, 'name');
    assert.deepEqual(sorted.map((icon) => icon.key), ['alarm_line', 'calendar_line', 'shield_fill']);
});

test('sortLibraryIcons groups by category for category mode', () => {
    const sorted = sortLibraryIcons(sampleIcons, 'category');
    assert.deepEqual(sorted.map((icon) => icon.key), ['shield_fill', 'alarm_line', 'calendar_line']);
});

test('buildCategoryOptions includes all and item counts', () => {
    const options = buildCategoryOptions(sampleIcons);
    assert.deepEqual(options, [
        { key: 'all', count: 3 },
        { key: 'security', count: 1 },
        { key: 'time', count: 2 }
    ]);
});

test('buildKindOptions includes all and item counts', () => {
    const options = buildKindOptions(sampleIcons);
    assert.deepEqual(options, [
        { key: 'all', count: 3 },
        { key: 'fill', count: 1 },
        { key: 'line', count: 2 }
    ]);
});
