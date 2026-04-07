const path = require('path');
const fs = require('fs');
const test = require('node:test');
const assert = require('node:assert/strict');

const app = require('../font_factory/server');
const projectRoot = path.join(__dirname, '..');

function withEnv(name, value, fn) {
    const previous = process.env[name];
    if (value === undefined) {
        delete process.env[name];
    } else {
        process.env[name] = value;
    }

    try {
        fn();
    } finally {
        if (previous === undefined) {
            delete process.env[name];
        } else {
            process.env[name] = previous;
        }
    }
}

test('vercel deployment bundles the built React frontend assets', () => {
    const vercelConfig = JSON.parse(fs.readFileSync(path.join(projectRoot, 'vercel.json'), 'utf8'));
    const includeFiles = vercelConfig.builds?.[0]?.config?.includeFiles || [];

    assert.ok(includeFiles.includes('frontend/dist/**'));
});

test('server prefers the React build on Vercel when dist assets exist', () => {
    withEnv('USE_REACT_FRONTEND', undefined, () => {
        withEnv('VERCEL', '1', () => {
            const resolvedDir = app.__internal.resolveAppStaticDir(projectRoot);
            assert.equal(resolvedDir, path.join(projectRoot, 'frontend', 'dist'));
        });
    });
});
