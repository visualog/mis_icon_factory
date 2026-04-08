export function getSourceIconUrl(icon) {
  if (!icon || !icon.key) {
    return '';
  }

  const baseName = String(icon.key).replace(/_(line|fill)$/u, '');
  if (icon.kind === 'fill') {
    return `/fill-icons/${baseName}.svg`;
  }
  return `/line-icons/${baseName}.svg`;
}

const uiIconFileNames = {
  approve_line: 'approve.svg',
  card_list_view_line: 'card_list_view.svg',
  chevron_down_line: 'chevron_down.svg',
  chevron_up_line: 'chevron_up.svg',
  close_line: 'close.svg',
  close_sm_line: 'close_sm.svg',
  grid_view_sm_line: 'grid_view_sm.svg',
  plus_circle_fill: 'plus circle.svg',
  preview_line: 'preview.svg'
};

export function getUiIconUrl(iconClass) {
  const match = String(iconClass || '').match(/icon--([a-z0-9_]+)_(line|fill)\b/u);
  if (!match) {
    return '';
  }

  const [, iconName, kind] = match;
  const iconKey = `${iconName}_${kind}`;
  const directory = kind === 'fill' ? '/fill-icons' : '/line-icons';
  const fileName = uiIconFileNames[iconKey] || `${iconName}.svg`;
  return `${directory}/${encodeURIComponent(fileName)}`;
}

export function buildDetailPreviewSizes() {
  return [24, 32, 48, 64];
}
