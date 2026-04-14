# Icon Detail Bottom Sheet Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 카드 클릭 시 원본 SVG, 웹폰트 프리뷰, 복사/다운로드 액션, 읽기 전용 메타데이터를 보여주는 아이콘 상세 바텀시트를 추가한다.

**Architecture:** 현재 `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`의 단일 페이지 상태 구조에 선택 아이콘 상태와 바텀시트 렌더링 레이어를 추가한다. 원본 SVG는 기존 `/line-icons`/`/fill-icons` 정적 경로를 재사용하고, 웹폰트 프리뷰는 현재 generated font CSS와 glyph key를 그대로 사용한다. 메타데이터는 이미 병합된 `category`, `keywords`, `synonyms`를 읽기 전용으로 표시한다.

**Tech Stack:** Vanilla HTML/CSS/JS, existing Node server static routes, node:test, npm test

---

### Task 1: Add bottom sheet state and open/close wiring

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts the page includes bottom sheet shell markup/state hooks for:
- selected icon state
- dialog container
- close button
- backdrop

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="bottom sheet"`
Expected: FAIL because the dialog markup/state hooks do not exist yet.

**Step 3: Write minimal implementation**

Add:
- `selectedIconKey` state
- helper to open detail from card click
- helper to close detail
- hidden dialog/backdrop markup
- click handling that ignores inner card action buttons

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="bottom sheet"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add icon detail bottom sheet shell"
```

### Task 2: Render selected icon detail data

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts the detail template renders:
- display name
- glyph key
- class key
- category
- type
- metadata section labels

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="detail data"`
Expected: FAIL because the template is missing these bindings.

**Step 3: Write minimal implementation**

Add:
- `getSelectedIcon()` helper
- detail panel render function
- readonly metadata display block using existing icon data

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="detail data"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: render icon detail metadata"
```

### Task 3: Add source SVG preview panel

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts the detail sheet includes:
- source preview container
- source SVG image element
- title distinguishing source preview from webfont preview

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="source preview"`
Expected: FAIL

**Step 3: Write minimal implementation**

Use existing `getSourceIconUrl(icon)` helper to render the original SVG inside a large preview pane.

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="source preview"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add source svg preview to icon detail"
```

### Task 4: Add keyline overlay toggle

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts:
- keyline toggle control exists
- source preview supports a keyline-visible state/class

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="keyline"`
Expected: FAIL

**Step 3: Write minimal implementation**

Add local detail state for keyline visibility and render CSS overlays for:
- outer frame
- center crosshair
- circular keyline

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="keyline"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add keyline toggle to icon detail"
```

### Task 5: Add webfont preview sizes section

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts size previews for:
- 16
- 20
- 24
- 32
- 48
- 64

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="size previews"`
Expected: FAIL

**Step 3: Write minimal implementation**

Render a size preview list using the selected icon glyph, current preview color, and current preview weight.

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="size previews"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add size previews to icon detail"
```

### Task 6: Add consolidated detail actions

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts the detail action group includes:
- glyph copy
- class copy
- SVG copy
- PNG copy
- SVG download
- PNG download

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="detail actions"`
Expected: FAIL

**Step 3: Write minimal implementation**

Reuse existing copy/download helpers from list actions to provide the same actions in the detail panel.

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="detail actions"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add detail copy and download actions"
```

### Task 7: Add dialog behavior and accessibility polish

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html`
- Test: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Write the failing test**

Add a test that asserts dialog behavior hooks exist for:
- ESC close
- backdrop close
- focusable close button
- `role="dialog"`
- `aria-modal="true"`

**Step 2: Run test to verify it fails**

Run: `npm test -- --test-name-pattern="dialog accessibility"`
Expected: FAIL

**Step 3: Write minimal implementation**

Add the dialog accessibility attributes and close handlers. Keep focus management minimal but deterministic.

**Step 4: Run test to verify it passes**

Run: `npm test -- --test-name-pattern="dialog accessibility"`
Expected: PASS

**Step 5: Commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: polish icon detail dialog behavior"
```

### Task 8: Verify responsive and regression behavior

**Files:**
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/topbar-layout.test.js`
- Modify: `/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js`

**Step 1: Add regression tests**

Cover:
- existing list split actions remain intact
- card click still opens detail while action buttons do not
- detail panel renders in both grid/list contexts

**Step 2: Run all tests**

Run: `npm test`
Expected: PASS with all tests green.

**Step 3: Manual verification**

Run the local server and verify in browser:
- grid card click opens detail
- list card click opens detail
- keyline toggle works
- size previews render
- all detail actions work

Run:
```bash
cd /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library && PORT=3003 node font_factory/server.js
```

**Step 4: Final commit**

```bash
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library add /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/topbar-layout.test.js /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/test/bottom-controller-layout.test.js
git -C /Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library commit -m "feat: add icon detail bottom sheet"
```
