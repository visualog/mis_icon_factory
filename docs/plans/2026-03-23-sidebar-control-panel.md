# Sidebar Control Panel Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the stacked top controls with a fixed left sidebar that contains the main control panel and a vertical category list, while keeping the icon grid focused on results.

**Architecture:** The page remains a single static HTML app served by Express. The work is concentrated in `font_factory/public/index.html`, where layout CSS, sidebar markup, and existing filter state logic will be reorganized. Current state-management functions should be reused where possible so behavior stays consistent while the UI structure changes.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Express

---

### Task 1: Add sidebar layout shell

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

Document the expected structure in the file as a checklist:
- fixed left sidebar exists
- right content panel exists
- current floating header no longer carries primary controls

**Step 2: Run test to verify it fails**

Run: `rg -n "sidebar|layout-shell|content-panel" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: no complete sidebar layout present yet

**Step 3: Write minimal implementation**

- add layout wrapper for sidebar and content
- move existing main content into the right panel
- keep current JS hooks alive during structure migration

**Step 4: Run test to verify it passes**

Run: `rg -n "sidebar|layout-shell|content-panel" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: sidebar shell selectors and markup exist

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "feat: add icon factory sidebar shell"
```

### Task 2: Move main controls into sidebar panel

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

List required sidebar controls:
- weight slider
- size selector
- search input
- build state filter
- build button
- selection count

**Step 2: Run test to verify it fails**

Run: `rg -n "sidebar-controls|sidebar-build|sidebar-search|selection-count" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: missing or partial sidebar control group names

**Step 3: Write minimal implementation**

- move the control markup from header/filter row into sidebar sections
- keep existing IDs such as `widthSlider`, `sizeSelect`, `searchInput`, `buildBtn`, `selectionCount`
- remove duplicate control surfaces from the main area

**Step 4: Run test to verify it passes**

Run: `rg -n "widthSlider|sizeSelect|searchInput|buildBtn|selectionCount" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: all control IDs still exist once in sidebar structure

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "feat: move main controls into sidebar"
```

### Task 3: Replace category dropdown with vertical category list

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

Define expected category navigation behavior:
- `전체` row at top
- category rows show counts
- selected row is visually distinct

**Step 2: Run test to verify it fails**

Run: `rg -n "category-list|category-item|category-count" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: list-based category navigation is not fully present

**Step 3: Write minimal implementation**

- replace or hide the select-based category control on desktop
- render category rows from existing category data
- wire row click and keyboard activation to `activeCategory`

**Step 4: Run test to verify it passes**

Run: `rg -n "category-list|category-item|category-count" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: category list selectors and markup exist

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "feat: add sidebar category navigation"
```

### Task 4: Simplify right content area and sticky behavior

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

Document expected main-area outcome:
- no duplicated top control bars
- right area shows category title, result count, and grid
- sidebar and content do not overlap

**Step 2: Run test to verify it fails**

Run: `rg -n "filter-row|app-header|content-shell|grid-container" /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html`
Expected: old top-heavy structure still present

**Step 3: Write minimal implementation**

- remove redundant sticky filter bar behavior
- leave only lightweight content summary in the right panel
- update spacing so the grid starts cleanly beside the fixed sidebar

**Step 4: Run test to verify it passes**

Run: `node --check /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/server.js`
Expected: syntax check passes after markup and script edits

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "refactor: simplify icon factory main canvas"
```

### Task 5: Accessibility and responsive pass

**Files:**
- Modify: `font_factory/public/index.html`

**Step 1: Write the failing test**

Track the required fixes:
- card keyboard selection
- built badge focus tooltip
- 44x44 touch targets
- `aria-live` for status
- mobile slide-in filter panel behavior

**Step 2: Run test to verify it fails**

Run: `node -e "const fs=require('fs');const s=fs.readFileSync('/Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html','utf8');const checks=[['keyboard_card',/card\\.addEventListener\\('keydown'/.test(s)||/tabindex=/.test(s)],['focus_tooltip',/:focus::after|:focus-visible::after/.test(s)],['touch_44',/width:\\s*44px|height:\\s*44px/.test(s)],['aria_live',/aria-live=/.test(s)]];for(const [k,v] of checks){console.log(k+':'+(v?'yes':'no'));}" `
Expected: at least one required accessibility check reports `no`

**Step 3: Write minimal implementation**

- add keyboard interaction and focus state support
- enlarge touch targets
- make tooltip accessible on focus
- add live region semantics
- convert sidebar to overlay panel at narrow widths

**Step 4: Run test to verify it passes**

Run: `node -e "const fs=require('fs');const s=fs.readFileSync('/Users/im_018/Documents/GitHub/Project/IconFont/font_factory/public/index.html','utf8');const checks=[['keyboard_card',/card\\.addEventListener\\('keydown'/.test(s)||/tabindex=/.test(s)],['focus_tooltip',/:focus::after|:focus-visible::after/.test(s)],['touch_44',/width:\\s*44px|height:\\s*44px/.test(s)],['aria_live',/aria-live=/.test(s)]];for(const [k,v] of checks){console.log(k+':'+(v?'yes':'no'));}" `
Expected: all required checks report `yes`

**Step 5: Commit**

```bash
git add font_factory/public/index.html
git commit -m "fix: improve sidebar accessibility and responsive behavior"
```

### Task 6: Final verification

**Files:**
- Modify: `font_factory/public/index.html`
- Verify: `font_factory/server.js`
- Verify: `package.json`

**Step 1: Run syntax verification**

Run: `node --check /Users/im_018/Documents/GitHub/Project/IconFont/font_factory/server.js`
Expected: pass

**Step 2: Run app and verify HTTP response**

Run: `cd /Users/im_018/Documents/GitHub/Project/IconFont && npm run start:3002`
Expected: server starts on `http://localhost:3002`

**Step 3: Verify browser reachability**

Run: `curl -sS -o /dev/null -w "3002:%{http_code}\n" http://localhost:3002`
Expected: `3002:200`

**Step 4: Manual UI verification**

Check in browser:
- sidebar stays fixed on desktop
- category list updates grid
- build scope remains predictable
- mobile opens the sidebar as a panel
- no overlap between chrome and content

**Step 5: Commit**

```bash
git add font_factory/public/index.html font_factory/server.js package.json
git commit -m "feat: redesign icon factory with fixed sidebar"
```
