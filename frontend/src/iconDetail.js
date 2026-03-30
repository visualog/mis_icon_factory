function getSourceIconUrl(icon) {
    if (!icon || !icon.key) {
        return '';
    }

    const baseName = String(icon.key).replace(/_(line|fill)$/u, '');
    if (icon.kind === 'fill') {
        return `/fill-icons/${baseName}.svg`;
    }
    return `/line-icons/${baseName}.svg`;
}

function buildDetailPreviewSizes() {
    return [24, 32, 48, 64];
}

module.exports = {
    getSourceIconUrl,
    buildDetailPreviewSizes
};
