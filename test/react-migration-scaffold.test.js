const path = require('path');
const fs = require('fs');
const test = require('node:test');
const assert = require('node:assert/strict');

const packageJson = require('../package.json');
const app = require('../font_factory/server');

const projectRoot = path.join(__dirname, '..');

test('react migration scripts are declared in package.json', () => {
    assert.equal(typeof packageJson.scripts['dev:react'], 'string');
    assert.equal(typeof packageJson.scripts['build:react'], 'string');
});

test('react migration scaffold files exist', () => {
    const requiredFiles = [
        'frontend/index.html',
        'frontend/src/main.jsx',
        'frontend/src/App.jsx',
        'vite.config.mjs'
    ];

    requiredFiles.forEach((relativePath) => {
        assert.equal(
            fs.existsSync(path.join(projectRoot, relativePath)),
            true,
            `${relativePath} should exist`
        );
    });
});

test('react migration frontend loads Pretendard as the primary web font', () => {
    const indexHtml = fs.readFileSync(path.join(projectRoot, 'frontend', 'index.html'), 'utf8');
    const stylesCss = fs.readFileSync(path.join(projectRoot, 'frontend', 'src', 'styles.css'), 'utf8');

    assert.match(indexHtml, /cdn\.jsdelivr\.net\/gh\/orioncactus\/pretendard@v1\.3\.9\/dist\/web\/static\/pretendard\.min\.css/);
    assert.match(stylesCss, /--font-main:\s*["']Pretendard["'],\s*sans-serif/);
});

test('server exposes a helper for resolving the active app static directory', () => {
    assert.equal(typeof app.__internal.resolveAppStaticDir, 'function');

    const resolvedDir = app.__internal.resolveAppStaticDir(projectRoot);
    assert.equal(resolvedDir, path.join(projectRoot, 'font_factory', 'public'));
});
