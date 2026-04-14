# React Migration Phase 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a minimal Vite + React frontend scaffold to the latest icon library worktree without breaking the existing Express API or static HTML experience.

**Architecture:** Keep `font_factory/server.js` and all existing API routes in place. Add a new `frontend/` app for the future React UI, then add a small server helper that can opt into serving the React build when it exists and an explicit flag is enabled. Preserve the current `font_factory/public/index.html` as the default UI during this phase.

**Tech Stack:** Node.js, Express, Vite, React, node:test

---

### Task 1: Lock the phase-1 contract with a failing test

**Files:**
- Create: `test/react-migration-scaffold.test.js`
- Modify: `package.json`
- Modify: `font_factory/server.js`

**Step 1: Write the failing test**

Add a test that asserts:
- `package.json` exposes `dev:react` and `build:react` scripts
- `frontend/index.html`, `frontend/src/main.jsx`, `frontend/src/App.jsx`, and `vite.config.mjs` exist
- `app.__internal.resolveAppStaticDir` exists and defaults to `font_factory/public`

**Step 2: Run test to verify it fails**

Run: `node --test test/react-migration-scaffold.test.js`
Expected: FAIL because the scripts, files, and helper do not exist yet.

**Step 3: Write minimal implementation**

Add the new scripts, create the frontend scaffold files, and expose the server helper through `app.__internal`.

**Step 4: Run test to verify it passes**

Run: `node --test test/react-migration-scaffold.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.mjs frontend font_factory/server.js test/react-migration-scaffold.test.js docs/plans/2026-03-30-react-migration-phase-1.md
git commit -m "feat: scaffold react migration frontend"
```

### Task 2: Make the scaffold executable

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `frontend/index.html`
- Create: `frontend/src/main.jsx`
- Create: `frontend/src/App.jsx`
- Create: `frontend/src/styles.css`
- Create: `vite.config.mjs`

**Step 1: Install the frontend toolchain**

Run: `npm install -D vite @vitejs/plugin-react`
Run: `npm install react react-dom`

**Step 2: Add a minimal React app**

Create a small app shell that explains this is the React migration entrypoint and links the next migration targets.

**Step 3: Add Vite config**

Use `frontend/` as the Vite root and output the build to `frontend/dist`.

**Step 4: Verify the build**

Run: `npm run build:react`
Expected: PASS and emit assets into `frontend/dist`

**Step 5: Commit**

```bash
git add package.json package-lock.json vite.config.mjs frontend
git commit -m "build: add vite react frontend scaffold"
```

### Task 3: Add server-side opt-in wiring for the future frontend

**Files:**
- Modify: `font_factory/server.js`
- Test: `test/react-migration-scaffold.test.js`

**Step 1: Add a helper**

Create `resolveAppStaticDir(projectRoot = PROJECT_ROOT)` that:
- returns `frontend/dist` when `USE_REACT_FRONTEND=1` and the build folder exists
- otherwise returns `font_factory/public`

**Step 2: Keep current behavior as the default**

Use the helper for `express.static(...)`, but preserve the current HTML as the default when the flag is absent.

**Step 3: Verify tests**

Run: `node --test test/react-migration-scaffold.test.js`
Expected: PASS

**Step 4: Run broader verification**

Run: `npm test`
Expected: Existing baseline still shows the known pre-existing metadata fixture failure, with no new failures introduced by this phase.

**Step 5: Commit**

```bash
git add font_factory/server.js test/react-migration-scaffold.test.js
git commit -m "feat: add react frontend server toggle"
```
