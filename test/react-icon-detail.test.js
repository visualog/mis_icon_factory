const test = require('node:test');
const assert = require('node:assert/strict');

const {
    getSourceIconUrl,
    buildDetailPreviewSizes
} = require('../frontend/src/iconDetail.js');

test('getSourceIconUrl resolves line icons to the line-icons asset path', () => {
    assert.equal(
        getSourceIconUrl({ key: 'calendar_line', kind: 'line' }),
        '/line-icons/calendar.svg'
    );
});

test('getSourceIconUrl resolves fill icons to the fill-icons asset path', () => {
    assert.equal(
        getSourceIconUrl({ key: 'shield_fill', kind: 'fill' }),
        '/fill-icons/shield.svg'
    );
});

test('buildDetailPreviewSizes returns the standard preview ladder', () => {
    assert.deepEqual(buildDetailPreviewSizes(), [24, 32, 48, 64]);
});
