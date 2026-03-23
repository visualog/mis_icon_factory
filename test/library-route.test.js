const os = require('os');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs-extra');

const app = require('../font_factory/server');

async function closeServer(server) {
    await new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
    });
}

async function withTempRuntime(run) {
    const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'iconfont-route-test-'));
    const lineDir = path.join(tempRoot, 'line');
    const fillDir = path.join(tempRoot, 'fill');
    const outputDir = path.join(tempRoot, 'dist_font_custom');

    await fs.ensureDir(lineDir);
    await fs.ensureDir(fillDir);
    await fs.ensureDir(outputDir);

    app.__internal.setRuntimePaths({ projectRoot: tempRoot, lineDir, fillDir, outputDir });

    try {
        await run({ tempRoot, lineDir, fillDir, outputDir });
    } finally {
        app.__internal.resetBuildRunner();
        app.__internal.resetRuntimePaths();
        await fs.remove(tempRoot);
    }
}

test('GET /api/library-icons returns built glyph entries from generated css', async () => {
    await withTempRuntime(async ({ tempRoot, outputDir }) => {
        await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), `
            .icon--calendar_fill::before { content: "\\e001"; }
            .icon--document_line::before { content: "\\e002"; }
        `);
        await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stub');
        await fs.ensureDir(path.join(tempRoot, 'font_factory'));
        await fs.writeJson(path.join(tempRoot, 'font_factory', 'icon-metadata.json'), {
            version: 1,
            icons: {
                calendar_fill: {
                    displayName: 'Calendar Fill',
                    category: 'time',
                    keywords: ['calendar', 'schedule'],
                    synonyms: ['일정', '캘린더']
                }
            }
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/library-icons`);

            assert.equal(response.status, 200);

            const payload = await response.json();
            assert.deepEqual(payload.icons.map((icon) => icon.key), ['calendar_fill', 'document_line']);
            assert.equal(payload.icons[0].category, 'time');
            assert.deepEqual(payload.icons[0].synonyms, ['일정', '캘린더']);
            assert.match(payload.icons[0].searchText, /일정/);
            assert.equal(typeof payload.lastBuiltAt, 'string');
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons rejects requests without files', async () => {
    await withTempRuntime(async () => {
        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ files: [] })
            });

            assert.equal(response.status, 400);

            const payload = await response.json();
            assert.match(payload.error, /files/i);
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons normalizes file names and persists successful uploads', async () => {
    await withTempRuntime(async ({ lineDir, outputDir }) => {
        app.__internal.setBuildRunnerForTests(async () => {
            await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--fresh_icon_line::before { content: "\\e001"; }');
            await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stub');
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    files: [
                        { name: 'Fresh-Icon.svg', content: '<svg viewBox="0 0 24 24"></svg>' }
                    ]
                })
            });

            assert.equal(response.status, 200);

            const payload = await response.json();
            assert.deepEqual(payload.uploaded, ['fresh_icon.svg']);
            assert.equal(await fs.pathExists(path.join(lineDir, 'fresh_icon.svg')), true);
            assert.equal(await fs.pathExists(path.join(outputDir, 'build-history.json')), true);
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons rejects duplicate normalized names before writing files', async () => {
    await withTempRuntime(async ({ lineDir, outputDir }) => {
        app.__internal.setBuildRunnerForTests(async () => {
            await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--unused_line::before { content: "\\e001"; }');
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    files: [
                        { name: 'Fresh-Icon.svg', content: '<svg viewBox="0 0 24 24"></svg>' },
                        { name: 'fresh icon.svg', content: '<svg viewBox="0 0 24 24"></svg>' }
                    ]
                })
            });

            assert.equal(response.status, 409);

            const payload = await response.json();
            assert.match(payload.error, /duplicate upload name/i);
            assert.equal(await fs.pathExists(path.join(lineDir, 'fresh_icon.svg')), false);
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons rolls back uploaded files and output when build fails', async () => {
    await withTempRuntime(async ({ lineDir, outputDir }) => {
        await fs.writeFile(path.join(lineDir, 'existing_icon.svg'), '<svg id="existing"></svg>');
        await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--existing_icon::before { content: "\\e001"; }');
        await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stable');

        app.__internal.setBuildRunnerForTests(async () => {
            await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), 'corrupted');
            throw new Error('boom');
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    files: [
                        { name: 'New Icon.svg', content: '<svg viewBox="0 0 24 24"></svg>' }
                    ]
                })
            });

            assert.equal(response.status, 500);

            const payload = await response.json();
            assert.match(payload.error, /boom/i);
            assert.equal(await fs.pathExists(path.join(lineDir, 'new_icon.svg')), false);
            assert.equal(await fs.readFile(path.join(outputDir, 'my-icon-font.css'), 'utf8'), '.icon--existing_icon::before { content: "\\e001"; }');
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons rejects success responses when uploaded glyphs are missing from CSS', async () => {
    await withTempRuntime(async ({ lineDir, outputDir }) => {
        await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--existing_icon_line::before { content: "\\e001"; }');
        await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stable');

        app.__internal.setBuildRunnerForTests(async () => {
            await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--other_icon_line::before { content: "\\e002"; }');
            await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stable');
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    files: [
                        { name: 'Missing Glyph.svg', content: '<svg viewBox="0 0 24 24"></svg>' }
                    ]
                })
            });

            assert.equal(response.status, 500);

            const payload = await response.json();
            assert.match(payload.error, /missing glyph/i);
            assert.equal(await fs.pathExists(path.join(lineDir, 'missing_glyph.svg')), false);
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons also fails when rebuild drops an existing glyph', async () => {
    await withTempRuntime(async ({ lineDir, outputDir }) => {
        await fs.writeFile(path.join(lineDir, 'existing_icon.svg'), '<svg viewBox="0 0 24 24"></svg>');
        await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--existing_icon_line::before { content: "\\e001"; }');
        await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stable');

        app.__internal.setBuildRunnerForTests(async () => {
            await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), '.icon--fresh_icon_line::before { content: "\\e002"; }');
            await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stable');
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    files: [
                        { name: 'Fresh Icon.svg', content: '<svg viewBox="0 0 24 24"></svg>' }
                    ]
                })
            });

            assert.equal(response.status, 500);

            const payload = await response.json();
            assert.match(payload.error, /missing glyph/i);
            assert.equal(await fs.pathExists(path.join(lineDir, 'fresh_icon.svg')), false);
            assert.equal(await fs.pathExists(path.join(lineDir, 'existing_icon.svg')), true);
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/upload-icons verifies existing fill glyphs remain in the rebuilt library', async () => {
    await withTempRuntime(async ({ fillDir, outputDir }) => {
        await fs.writeFile(path.join(fillDir, 'badge-fill.svg'), '<svg viewBox="0 0 24 24"></svg>');

        app.__internal.setBuildRunnerForTests(async () => {
            await fs.writeFile(path.join(outputDir, 'my-icon-font.css'), `
                .icon--fresh_icon_line:before { content: "\\e001"; }
                .icon--badge_fill_fill::before { content: "\\e002"; }
            `);
            await fs.writeFile(path.join(outputDir, 'MyIconFont-Regular.woff2'), 'stable');
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const response = await fetch(`http://127.0.0.1:${port}/api/upload-icons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    files: [
                        { name: 'Fresh Icon.svg', content: '<svg viewBox="0 0 24 24"></svg>' }
                    ]
                })
            });

            assert.equal(response.status, 200);
        } finally {
            await closeServer(server);
        }
    });
});

test('POST /api/build rejects overlapping builds with 409', async () => {
    await withTempRuntime(async ({ lineDir }) => {
        await fs.writeFile(path.join(lineDir, 'existing_icon.svg'), '<svg id="existing"></svg>');

        let releaseBuild;
        const buildStarted = new Promise((resolve) => {
            app.__internal.setBuildRunnerForTests(async () => {
                resolve();
                await new Promise((buildResolve) => {
                    releaseBuild = buildResolve;
                });
            });
        });

        const server = app.listen(0);

        try {
            const { port } = server.address();
            const firstBuild = fetch(`http://127.0.0.1:${port}/api/build`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            });

            await buildStarted;

            const secondBuild = await fetch(`http://127.0.0.1:${port}/api/build`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            });

            assert.equal(secondBuild.status, 409);

            const payload = await secondBuild.json();
            assert.match(payload.error, /already in progress/i);

            releaseBuild();

            const firstResponse = await firstBuild;
            assert.equal(firstResponse.status, 200);
        } finally {
            await closeServer(server);
        }
    });
});
