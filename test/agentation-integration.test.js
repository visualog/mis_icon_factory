const fs = require('fs');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert/strict');

const packageJson = require('../package.json');

const appFile = path.join(__dirname, '..', 'frontend', 'src', 'App.jsx');
const stylesFile = path.join(__dirname, '..', 'frontend', 'src', 'styles.css');

test('agentation package is declared for the React migration frontend', () => {
    assert.equal(typeof packageJson.devDependencies?.agentation, 'string');
});

test('react app mounts Agentation on localhost in development or agentation-enabled builds', () => {
    const source = fs.readFileSync(appFile, 'utf8');

    assert.match(source, /import\s+\{\s*Agentation\s*\}\s+from\s+['"]agentation['"]/);
    assert.match(source, /import\.meta\.env\.DEV/);
    assert.match(source, /import\.meta\.env\.VITE_ENABLE_AGENTATION/);
    assert.doesNotMatch(source, /http:\/\/localhost:4747\/health/);
    assert.match(source, /endpoint="http:\/\/localhost:4747"/);
    assert.match(source, /window\.location\.hostname === 'localhost'/);
});

test('agentation receives a dedicated class for safe layering above the UI', () => {
    const source = fs.readFileSync(appFile, 'utf8');
    const styles = fs.readFileSync(stylesFile, 'utf8');

    assert.match(source, /className="agentation-layer"/);
    assert.match(styles, /\.agentation-layer/);
});
