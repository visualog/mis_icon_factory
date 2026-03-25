# Icon Detail Bottom Sheet Phase 2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the icon detail bottom sheet into a polished half-sheet experience with section-level metadata editing and stronger keyline inspection.

**Architecture:** Extend the existing bottom sheet in `/font_factory/public/index.html` instead of replacing it. Keep the current dialog, preview, and action plumbing, then layer interaction polish, edit state management, and a small metadata save API on top. Preserve the library grid/list as the entry surface and keep editing scoped to the metadata section only.

**Tech Stack:** Vanilla HTML/CSS/JS, existing Express server in `/font_factory/server.js`, local JSON metadata storage in `/font_factory/icon-metadata.json`, Node test suite in `/test`.

---

### Task 1: Add failing tests for half-sheet polish state and UI hooks

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/topbar-layout.test.js`

**Step 1: Write the failing test**

Add assertions for:
- half-sheet sizing classes / CSS hooks for the detail sheet
- selected card active state hook while detail is open
- metadata edit button and save/cancel controls existing in the markup
- safe-area keyline CSS hook existing in the source stage styles

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL on the new bottom sheet polish assertions.

**Step 3: Write minimal implementation**

Do not implement behavior yet. Only add the smallest structural hooks needed to keep later tasks focused.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS for the structural assertions.

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add test/bottom-controller-layout.test.js test/topbar-layout.test.js font_factory/public/index.html
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "test: cover detail sheet polish hooks"
```

### Task 2: Implement half-sheet presentation polish

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Extend the test to check for:
- stronger backdrop hook/class
- `82vh`-class half-sheet sizing
- header layout hooks for title/meta separation
- selected card state class in render templates or open/close logic hooks

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL for missing half-sheet polish implementation.

**Step 3: Write minimal implementation**

Implement:
- larger half-sheet sizing and improved spacing
- stronger backdrop blur/dim
- selected-card active state while detail is open
- smoother entry/exit class-based transitions
- header subtitle simplified into category/type secondary text

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS.

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add font_factory/public/index.html test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: polish icon detail half sheet"
```

### Task 3: Add metadata edit mode UI with local unsaved state

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add assertions for:
- metadata section edit button
- save button
- cancel button
- token input containers for keywords/synonyms
- unsaved state label/class hook

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because edit-mode markup/state does not exist yet.

**Step 3: Write minimal implementation**

Implement client-side only edit mode:
- `state.detailEditing` and `state.detailDraft`
- edit/read-only toggle in metadata section
- displayName input
- category dropdown
- keywords/synonyms token chips with add/remove behavior
- unsaved state indicator
- cancel restores original values

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS.

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add font_factory/public/index.html test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add detail metadata edit mode"
```

### Task 4: Add metadata save API and persistence

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/server.js`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/icon-metadata.json`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/icon-metadata-files.test.js`

**Step 1: Write the failing test**

Add tests for:
- metadata update request validation
- JSON persistence shape remaining valid after updates
- saved metadata reappearing in icon detail state

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because the save endpoint and persistence logic do not exist.

**Step 3: Write minimal implementation**

Implement:
- `POST /api/icon-metadata/:key`
- validation for `displayName`, `category`, `keywords`, `synonyms`
- write updated metadata to `icon-metadata.json`
- update front-end save flow to call the API
- on success, sync `state.icons`, clear unsaved state, close edit mode, show toast

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS.

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add font_factory/server.js font_factory/icon-metadata.json font_factory/public/index.html test/icon-metadata-files.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: persist icon metadata edits"
```

### Task 5: Upgrade keyline overlay from simple guide to inspection aid

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add assertions for:
- safe-area keyline class or pseudo-element hook
- source-stage descriptive hint text or toggle state text
- square + circular guide hooks both present

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL for the new keyline inspection hooks.

**Step 3: Write minimal implementation**

Implement:
- safe-area inner square guide
- existing center cross retained
- circular guide retained
- optional helper text explaining this is a visual inspection overlay, not path validation

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS.

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add font_factory/public/index.html test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: upgrade detail keyline inspection overlay"
```

### Task 6: Verify full flow and clean up interaction regressions

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html` (only if needed)
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/topbar-layout.test.js`

**Step 1: Write the failing test**

Add assertions for regression-sensitive hooks:
- ESC close behavior hook
- outside click close hook
- unsaved close confirmation hook
- selected card state cleared after close

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL if the close/reset behavior is incomplete.

**Step 3: Write minimal implementation**

Implement the smallest code needed to make the close/reset behavior deterministic and consistent across read and edit modes.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS.

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add font_factory/public/index.html test/bottom-controller-layout.test.js test/topbar-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "fix: stabilize detail sheet interactions"
```
