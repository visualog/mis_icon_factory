export function sortLibraryIcons(icons = [], sortMode = 'name') {
  const sorted = [...icons];

  if (sortMode === 'category') {
    sorted.sort((left, right) => {
      return (
        String(left.category || '').localeCompare(String(right.category || '')) ||
        String(left.displayName || '').localeCompare(String(right.displayName || '')) ||
        String(left.key || '').localeCompare(String(right.key || ''))
      );
    });
    return sorted;
  }

  sorted.sort((left, right) => {
    return (
      String(left.displayName || '').localeCompare(String(right.displayName || '')) ||
      String(left.key || '').localeCompare(String(right.key || ''))
    );
  });
  return sorted;
}

export function buildCategoryOptions(icons = []) {
  const counts = icons.reduce((map, icon) => {
    const key = icon.category || 'misc';
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  return [
    { key: 'all', count: icons.length },
    ...Object.keys(counts)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => ({ key, count: counts[key] }))
  ];
}

export function buildKindOptions(icons = []) {
  const counts = icons.reduce((map, icon) => {
    const key = icon.kind || 'mixed';
    map[key] = (map[key] || 0) + 1;
    return map;
  }, {});

  return [
    { key: 'all', count: icons.length },
    ...Object.keys(counts)
      .sort((left, right) => left.localeCompare(right))
      .map((key) => ({ key, count: counts[key] }))
  ];
}
