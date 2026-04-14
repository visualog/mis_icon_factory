export function normalizeLibraryPayload(payload = {}) {
  const icons = Array.isArray(payload.icons) ? payload.icons : [];
  const categories = Array.from(
    new Set(
      icons
        .map((icon) => icon.category)
        .filter(Boolean)
        .sort((left, right) => left.localeCompare(right))
    )
  );

  return {
    icons,
    categories: ['all', ...categories],
    lastBuiltAt: payload.lastBuiltAt || null,
    hasGeneratedFontStyles: payload.hasGeneratedFontStyles === true
  };
}

export function filterLibraryIcons(icons = [], filters = {}) {
  const query = String(filters.query || '').trim().toLowerCase();
  const category = filters.category || 'all';
  const kind = filters.kind || 'all';

  return icons.filter((icon) => {
    const matchesQuery = !query || String(icon.searchText || '').toLowerCase().includes(query);
    const matchesCategory = category === 'all' || icon.category === category;
    const matchesKind = kind === 'all' || icon.kind === kind;
    return matchesQuery && matchesCategory && matchesKind;
  });
}

export function createLibrarySummary({ resultCount = 0, totalCount = 0, category = 'all', kind = 'all', query = '' }) {
  const parts = [`${resultCount} of ${totalCount} icons`];
  if (query) {
    parts.push(`for "${query}"`);
  }
  if (category !== 'all' || kind !== 'all') {
    parts.push(`in ${category} / ${kind}`);
  }
  return parts.join(' ');
}

export async function fetchLibraryIcons(fetchImpl = fetch) {
  const response = await fetchImpl('/api/library-icons');
  if (!response.ok) {
    throw new Error(`Failed to load library icons (${response.status})`);
  }

  return normalizeLibraryPayload(await response.json());
}
