const test = require('node:test');
const assert = require('node:assert/strict');

const {
    extractBuiltGlyphNames,
    formatLibraryLabel,
    buildLibraryEntries,
    buildSourceLibraryEntries
} = require('../font_factory/library-manifest');

test('extractBuiltGlyphNames returns sorted unique glyph names from generated css', () => {
    const css = `
        .icon--calendar_fill::before { content: "\\e001"; }
        .icon--arrow_up_right_fill::before { content: "\\e002"; }
        .icon--calendar_fill::before { content: "\\e001"; }
        .icon--document_line::before { content: "\\e003"; }
    `;

    assert.deepEqual(extractBuiltGlyphNames(css), [
        'arrow_up_right_fill',
        'calendar_fill',
        'document_line'
    ]);
});

test('extractBuiltGlyphNames also supports hyphenated glyph classes', () => {
    const css = '.icon--alert-circle::before { content: "\\e010"; }';
    assert.deepEqual(extractBuiltGlyphNames(css), ['alert-circle']);
});

test('formatLibraryLabel preserves common acronyms in display labels', () => {
    assert.equal(formatLibraryLabel('grid_view_md'), 'Grid View MD');
    assert.equal(formatLibraryLabel('cpu_line'), 'CPU Line');
    assert.equal(formatLibraryLabel('ip_address_fill'), 'IP Address Fill');
});

test('buildLibraryEntries returns card metadata for built glyphs', () => {
    const css = `
        .icon--calendar_fill::before { content: "\\e001"; }
        .icon--document_line::before { content: "\\e002"; }
    `;

    assert.deepEqual(buildLibraryEntries(css), [
        {
            category: 'misc',
            className: 'icon--calendar_fill',
            createdVersion: null,
            displayName: 'Calendar Fill',
            key: 'calendar_fill',
            kind: 'fill',
            keywords: [],
            lastChangedVersion: null,
            searchText: 'calendar fill',
            synonyms: []
        },
        {
            category: 'misc',
            className: 'icon--document_line',
            createdVersion: null,
            displayName: 'Document Line',
            key: 'document_line',
            kind: 'line',
            keywords: [],
            lastChangedVersion: null,
            searchText: 'document line',
            synonyms: []
        }
    ]);
});

test('buildLibraryEntries merges metadata into category and search text', () => {
    const css = '.icon--megaphone_line::before { content: "\\e001"; }';
    const metadata = {
        version: 7,
        icons: {
            megaphone_line: {
                createdVersion: 'v0.301.0',
                displayName: 'Megaphone',
                category: 'communication',
                lastChangedVersion: 'v0.536.0',
                keywords: ['announcement', 'broadcast', 'notification'],
                synonyms: ['공지', '알림', '안내']
            }
        }
    };

    assert.deepEqual(buildLibraryEntries(css, metadata), [
        {
            category: 'communication',
            className: 'icon--megaphone_line',
            createdVersion: 'v0.301.0',
            displayName: 'Megaphone',
            key: 'megaphone_line',
            kind: 'line',
            keywords: ['announcement', 'broadcast', 'notification'],
            lastChangedVersion: 'v0.536.0',
            searchText: 'megaphone announcement broadcast notification 공지 알림 안내 communication',
            synonyms: ['공지', '알림', '안내']
        }
    ]);
});

test('buildLibraryEntries falls back to the catalog version when icon-level version history is missing', () => {
    const css = '.icon--calendar_fill::before { content: "\\e001"; }';
    const metadata = {
        version: 12,
        icons: {
            calendar_fill: {
                displayName: 'Calendar Fill',
                category: 'time',
                keywords: ['schedule'],
                synonyms: ['일정']
            }
        }
    };

    assert.deepEqual(buildLibraryEntries(css, metadata), [
        {
            category: 'time',
            className: 'icon--calendar_fill',
            createdVersion: 'v0.12.0',
            displayName: 'Calendar Fill',
            key: 'calendar_fill',
            kind: 'fill',
            keywords: ['schedule'],
            lastChangedVersion: 'v0.12.0',
            searchText: 'calendar fill schedule 일정 time',
            synonyms: ['일정']
        }
    ]);
});

test('buildSourceLibraryEntries creates line and fill entries from source SVG file names', () => {
    const metadata = {
        icons: {
            calendar_line: {
                displayName: 'Calendar',
                category: 'time',
                keywords: ['schedule'],
                synonyms: ['일정']
            },
            shield_fill: {
                displayName: 'Shield',
                category: 'security',
                keywords: ['protect'],
                synonyms: ['보안']
            }
        }
    };

    assert.deepEqual(
        buildSourceLibraryEntries({
            lineFiles: ['calendar.svg'],
            fillFiles: ['shield.svg']
        }, metadata),
        [
            {
                category: 'time',
                className: 'icon--calendar_line',
                createdVersion: null,
                displayName: 'Calendar',
                key: 'calendar_line',
                kind: 'line',
                keywords: ['schedule'],
                lastChangedVersion: null,
                searchText: 'calendar schedule 일정 time',
                synonyms: ['일정']
            },
            {
                category: 'security',
                className: 'icon--shield_fill',
                createdVersion: null,
                displayName: 'Shield',
                key: 'shield_fill',
                kind: 'fill',
                keywords: ['protect'],
                lastChangedVersion: null,
                searchText: 'shield protect 보안 security',
                synonyms: ['보안']
            }
        ]
    );
});
