const test = require('node:test');
const assert = require('node:assert/strict');

const {
    normalizeLibraryPayload,
    filterLibraryIcons,
    createLibrarySummary,
    fetchLibraryIcons
} = require('../frontend/src/libraryData.js');

test('normalizeLibraryPayload preserves icons and derives sorted categories', () => {
    const payload = normalizeLibraryPayload({
        icons: [
            { key: 'shield_fill', displayName: 'Shield', category: 'security', kind: 'fill', searchText: 'shield security' },
            { key: 'calendar_line', displayName: 'Calendar', category: 'time', kind: 'line', searchText: 'calendar time' },
            { key: 'user_line', displayName: 'User', category: 'user', kind: 'line', searchText: 'user profile' }
        ],
        lastBuiltAt: '2026-03-30T00:00:00.000Z',
        hasGeneratedFontStyles: true
    });

    assert.deepEqual(payload.categories, ['all', 'security', 'time', 'user']);
    assert.equal(payload.icons.length, 3);
    assert.equal(payload.lastBuiltAt, '2026-03-30T00:00:00.000Z');
    assert.equal(payload.hasGeneratedFontStyles, true);
});

test('normalizeLibraryPayload defaults generated font style availability to false', () => {
    const payload = normalizeLibraryPayload({
        icons: [
            { key: 'calendar_line', displayName: 'Calendar', category: 'time', kind: 'line', searchText: 'calendar time' }
        ],
        lastBuiltAt: null
    });

    assert.equal(payload.hasGeneratedFontStyles, false);
});

test('filterLibraryIcons applies search query, category, and kind together', () => {
    const icons = [
        { key: 'shield_fill', displayName: 'Shield', category: 'security', kind: 'fill', searchText: 'shield security protect' },
        { key: 'calendar_line', displayName: 'Calendar', category: 'time', kind: 'line', searchText: 'calendar schedule time' },
        { key: 'clock_line', displayName: 'Clock', category: 'time', kind: 'line', searchText: 'clock time watch' }
    ];

    const filtered = filterLibraryIcons(icons, {
        query: 'time',
        category: 'time',
        kind: 'line'
    });

    assert.deepEqual(filtered.map((icon) => icon.key), ['calendar_line', 'clock_line']);
});

test('createLibrarySummary reports the active filter state in readable text', () => {
    assert.equal(
        createLibrarySummary({
            resultCount: 4,
            totalCount: 12,
            category: 'time',
            kind: 'line',
            query: 'calendar'
        }),
        '4 of 12 icons for "calendar" in time / line'
    );
});

test('fetchLibraryIcons requests the library API and returns normalized data', async () => {
    const calls = [];
    const result = await fetchLibraryIcons(async (url) => {
        calls.push(url);
        return {
            ok: true,
            async json() {
                return {
                    icons: [
                        { key: 'calendar_line', displayName: 'Calendar', category: 'time', kind: 'line', searchText: 'calendar time' }
                    ],
                    lastBuiltAt: null,
                    hasGeneratedFontStyles: false
                };
            }
        };
    });

    assert.deepEqual(calls, ['/api/library-icons']);
    assert.deepEqual(result.categories, ['all', 'time']);
    assert.equal(result.icons[0].key, 'calendar_line');
    assert.equal(result.hasGeneratedFontStyles, false);
});

test('fetchLibraryIcons throws a readable error when the API fails', async () => {
    await assert.rejects(
        () => fetchLibraryIcons(async () => ({
            ok: false,
            status: 500
        })),
        /library icons.*500/i
    );
});
