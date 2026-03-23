# Webfont Library Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the current page into a true built-webfont icon library that renders generated font glyphs, supports upload-driven auto-build, and uses a fixed bottom controller for preview adjustments.

**Architecture:** The Express server will continue serving the static page and generated font artifacts. The main change is shifting the frontend from SVG preview rendering to built font rendering using the generated CSS and font files. Upload becomes the entry point for adding new icons, and successful build output becomes the source of truth for the library grid.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Express, generated CSS/font artifacts from Fantasticon

---

### Task 1: Build all current icons and confirm artifacts exist

**Files:**
- Verify: `font_factory/build-engine.js`
- Verify: `font_factory/server.js`
- Verify: `dist_font_custom/`

**Step 1: Write the failing test**

Define the expected build output:
- `my-icon-font.css` exists
- all weight files exist
- current icon set is represented in the generated CSS classes

**Step 2: Run test to verify the current state**

Run: `find /Users/im_018/Documents/GitHub/Project/IconFont/dist_font_custom -maxdepth 1 -type f | sort`
Expected: generated CSS and `MyIconFont-*.woff2` files are present

**Step 3: Write minimal implementation**

- if artifacts are stale or incomplete, trigger a full build of all icons
- confirm the output directory contains the latest generated files

**Step 4: Run test to verify it passes**

Run: `find /Users/im_018/Documents/GitHub/Project/IconFont/dist_font_custom -maxdepth 1 -type f | sort`
Expected: generated font artifacts are complete and current

**Step 5: Commit**

```bash
git add dist_font_custom
git commit -m "build: refresh generated icon font artifacts"
```

### Task 2: Switch the library grid from SVG rendering to webfont rendering

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

Define the expected rendering behavior:
- the page loads generated font CSS
- the grid renders built font glyph classes
- the page no longer depends on fetching each `/line-icons/*.svg` for card rendering

**Step 2: Run test to verify it fails**

Run: `rg -n "line-icons|fetch\\(`/line-icons|icon--|my-icon-font.css" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: direct SVG fetch is still present and generated font CSS is not the primary renderer

**Step 3: Write minimal implementation**

- load `/generated-fonts/my-icon-font.css`
- generate class names that match built glyph names
- render icon cards using the built webfont classes
- keep selection and metadata behavior intact

**Step 4: Run test to verify it passes**

Run: `rg -n "generated-fonts/my-icon-font.css|icon--" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: built webfont assets are used for rendering

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "feat: render icon library from built webfont artifacts"
```

### Task 3: Simplify the top area and add upload entry point

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

List the target top-area structure:
- no dominant visible product title
- upload action in the top-right
- top area no longer acts as the main preview controller

**Step 2: Run test to verify it fails**

Run: `rg -n "brand-logo|upload|file input|dropzone" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: upload flow is missing or incomplete

**Step 3: Write minimal implementation**

- visually remove or demote the title
- add an upload button in the top-right
- add a hidden file input for click-to-upload fallback

**Step 4: Run test to verify it passes**

Run: `rg -n "upload|file input|dropzone" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: upload entry point is present

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "feat: add top-right upload entry point"
```

### Task 4: Add drag-and-drop upload with auto-build

**Files:**
- Modify: `font_factory/public/index.html`
- Modify: `font_factory/server.js`
- Modify: `font_factory/build-engine.js` only if upload flow needs build integration adjustments

**Step 1: Write the failing test**

Define the upload behavior:
- drag-and-drop is the primary upload interaction
- file picker remains available
- upload triggers automatic build
- successful build refreshes the library

**Step 2: Run test to verify it fails**

Run: `rg -n "dragover|drop|FormData|multipart|upload" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/server.js`
Expected: no complete upload + auto-build flow exists yet

**Step 3: Write minimal implementation**

- add drag-and-drop event handling in the frontend
- add upload endpoint in the server
- persist uploaded SVGs into the source icon folder
- trigger build after upload
- reload the library on success

**Step 4: Run test to verify it passes**

Run: `rg -n "dragover|drop|FormData|upload" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/server.js`
Expected: upload and drop flow is implemented

**Step 5: Commit**

```bash
git add font_factory/public/index.html font_factory/server.js font_factory/build-engine.js
git commit -m "feat: auto-build uploaded icons into webfont library"
```

### Task 5: Move preview controls into a fixed bottom controller

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

Define the target preview structure:
- bottom fixed controller exists
- it contains weight, size, and color palette
- it controls preview only, not upload management

**Step 2: Run test to verify it fails**

Run: `rg -n "bottom-controller|color-palette|widthSlider|sizeSelect" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: bottom preview controller is not fully present

**Step 3: Write minimal implementation**

- remove the current top-heavy preview controls
- add a bottom fixed controller
- move weight and size controls there
- add a color palette control that changes library preview styling

**Step 4: Run test to verify it passes**

Run: `rg -n "bottom-controller|color-palette|widthSlider|sizeSelect" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: bottom controller and preview controls exist

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "feat: move preview controls to bottom controller"
```

### Task 6: Accessibility and feedback pass

**Files:**
- Modify: `font_factory/public/index.html`
- Modify: `font_factory/server.js` if needed for upload errors

**Step 1: Write the failing test**

Track required behaviors:
- keyboard-usable upload fallback
- drag-and-drop with clear state feedback
- `aria-live` status updates
- touch-safe bottom controller controls
- card selection and built metadata remain accessible

**Step 2: Run test to verify it fails**

Run: `node -e "const fs=require('fs');const s=fs.readFileSync('/Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html','utf8');const checks=[['aria_live',/aria-live=/.test(s)],['dropzone',/dropzone|dragover|drop/.test(s)],['file_input',/type=\\\"file\\\"|type='file'/.test(s)],['touch_44',/width:\\s*44px|height:\\s*44px/.test(s)]];for(const [k,v] of checks){console.log(k+':'+(v?'yes':'no'));}"`
Expected: at least one required check reports `no`

**Step 3: Write minimal implementation**

- add accessible upload fallback
- add clear drag state visuals
- improve live status messaging
- ensure touch-safe control sizing

**Step 4: Run test to verify it passes**

Run: `node -e "const fs=require('fs');const s=fs.readFileSync('/Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html','utf8');const checks=[['aria_live',/aria-live=/.test(s)],['dropzone',/dropzone|dragover|drop/.test(s)],['file_input',/type=\\\"file\\\"|type='file'/.test(s)],['touch_44',/width:\\s*44px|height:\\s*44px/.test(s)]];for(const [k,v] of checks){console.log(k+':'+(v?'yes':'no'));}"`
Expected: all required checks report `yes`

**Step 5: Commit**

```bash
git add font_factory/public/index.html font_factory/server.js
git commit -m "fix: improve library upload accessibility and feedback"
```

### Task 7: Final verification

**Files:**
- Verify: `font_factory/public/index.html`
- Verify: `font_factory/server.js`
- Verify: `package.json`
- Verify: `dist_font_custom/`

**Step 1: Run syntax verification**

Run: `node --check /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/server.js`
Expected: pass

**Step 2: Run the app**

Run: `cd /Users/im_018/Documents/GitHub/Project/IconFont && npm run start:3002`
Expected: server starts on `http://localhost:3002`

**Step 3: Verify HTTP response**

Run: `curl -sS -o /dev/null -w "3002:%{http_code}\n" http://localhost:3002`
Expected: `3002:200`

**Step 4: Manual verification**

Check in browser:
- built icons render as webfont glyphs
- upload button works
- drag-and-drop is the primary upload path
- uploaded icons trigger auto-build and appear after success
- bottom controller updates preview state

**Step 5: Commit**

```bash
git add font_factory/public/index.html font_factory/server.js font_factory/build-engine.js package.json dist_font_custom
git commit -m "feat: redesign icon factory as a built webfont library"
```
