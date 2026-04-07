const ACRONYMS = new Set(['api', 'cpu', 'id', 'ip', 'md', 'sm', 'lg', 'ui', 'ux']);

function uniq(values = []) {
    return Array.from(new Set(values.filter(Boolean)));
}

function getMetadataEntry(metadataCatalog = {}, glyphName = '') {
    if (!metadataCatalog || typeof metadataCatalog !== 'object') {
        return null;
    }

    if (metadataCatalog.icons && typeof metadataCatalog.icons === 'object') {
        return metadataCatalog.icons[glyphName] || null;
    }

    return metadataCatalog[glyphName] || null;
}

function extractBuiltGlyphNames(cssContent = '') {
    const matches = cssContent.matchAll(/\.icon--([a-z0-9_-]+)::before/g);
    const names = new Set();

    for (const match of matches) {
        names.add(match[1]);
    }

    return Array.from(names).sort((left, right) => left.localeCompare(right));
}

function formatLibraryLabel(glyphName = '') {
    return glyphName
        .split(/[_-]+/)
        .filter(Boolean)
        .map((part) => {
            const lower = part.toLowerCase();
            if (ACRONYMS.has(lower)) {
                return lower.toUpperCase();
            }
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join(' ');
}

function getGlyphKind(glyphName = '') {
    if (glyphName.endsWith('_fill')) {
        return 'fill';
    }
    if (glyphName.endsWith('_line')) {
        return 'line';
    }
    return 'mixed';
}

function buildEntry(glyphName = '', metadataCatalog = {}) {
        const metadataEntry = getMetadataEntry(metadataCatalog, glyphName) || {};
        const displayName = metadataEntry.displayName || formatLibraryLabel(glyphName);
        const category = metadataEntry.category || 'misc';
        const keywords = Array.isArray(metadataEntry.keywords) ? metadataEntry.keywords : [];
        const synonyms = Array.isArray(metadataEntry.synonyms) ? metadataEntry.synonyms : [];
        const searchText = uniq([
            displayName.toLowerCase(),
            ...keywords,
            ...synonyms,
            category !== 'misc' ? category : ''
        ]).join(' ');

        return {
            key: glyphName,
            className: `icon--${glyphName}`,
            displayName,
            category,
            keywords,
            synonyms,
            kind: getGlyphKind(glyphName),
            searchText
        };
}

function buildLibraryEntries(cssContent = '', metadataCatalog = {}) {
    return extractBuiltGlyphNames(cssContent).map((glyphName) => buildEntry(glyphName, metadataCatalog));
}

function buildSourceLibraryEntries({ lineFiles = [], fillFiles = [] } = {}, metadataCatalog = {}) {
    const glyphNames = [
        ...lineFiles
            .filter((fileName) => fileName.endsWith('.svg'))
            .map((fileName) => `${fileName.replace(/\.svg$/i, '')}_line`),
        ...fillFiles
            .filter((fileName) => fileName.endsWith('.svg'))
            .map((fileName) => `${fileName.replace(/\.svg$/i, '')}_fill`)
    ].sort((left, right) => left.localeCompare(right));

    return glyphNames.map((glyphName) => buildEntry(glyphName, metadataCatalog));
}

module.exports = {
    extractBuiltGlyphNames,
    formatLibraryLabel,
    buildLibraryEntries,
    buildSourceLibraryEntries
};
