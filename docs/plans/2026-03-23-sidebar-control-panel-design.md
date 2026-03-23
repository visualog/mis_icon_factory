# IconFactory Sidebar Control Panel Design

**Date:** 2026-03-23

**Context**

The current page spreads control state across a floating header and a sticky filter row. That makes the UI harder to scan, increases overlap risk, and weakens the relationship between filter state and the icon grid. The agreed direction is to move primary controls into a fixed left sidebar and simplify the main canvas.

**Goal**

Restructure the page into a predictable two-panel layout:
- Left: fixed sidebar with primary controls and category navigation
- Right: icon browsing canvas focused on results

**Layout**

The desktop layout uses a fixed left sidebar at about `280px` width and a flexible right content area. The sidebar stays visible while the icon grid scrolls. The main content no longer depends on stacked sticky bars for core interaction.

The right content area becomes simpler:
- compact page title or active category summary
- result count
- icon grid
- empty state when no matches exist

**Sidebar Structure**

Top section:
- product label or compact page heading
- selection count
- primary build button

Main controls:
- stroke weight slider with current value
- icon size selector
- search field
- build state filter: `전체`, `빌드됨`, `미빌드`

Category section:
- vertical category list
- `전체` pinned at the top
- each row shows category label and icon count
- selected category uses stronger background, border, and text color

Optional footer area:
- short built-state legend
- small help text if needed

**Interaction Rules**

- Sidebar is the primary control surface on desktop.
- The build button reflects only the visible filtered selection or visible filtered result set.
- Category rows are buttons, not decorative labels.
- Search, build-state filter, and category list update the grid immediately.
- The right content area should show the active category and visible result count so the user can confirm the current scope.

**Responsive Behavior**

Desktop:
- fixed left sidebar
- right panel scrolls normally

Tablet and mobile:
- the fixed sidebar becomes a slide-in filter panel
- the trigger sits at the top of the main content
- controls remain the same, only presentation changes

This avoids sacrificing too much horizontal space on narrow screens.

**Accessibility**

- Category list rows must be keyboard reachable
- selected category should expose state via `aria-current` or equivalent
- checkbox and built-state affordances need 44x44 touch targets
- built badge tooltip must work on focus, not hover only
- status messages should use `aria-live`

**Visual Direction**

The sidebar should feel denser and more structured than the current floating header. The goal is not decoration; it is hierarchy. Use the existing light neutral palette, but increase contrast between navigation chrome and the browsing canvas. The icon grid should remain visually light so the sidebar becomes the stable anchor.

**Out of Scope**

- changing icon card visual language beyond necessary layout adjustments
- adding new font-generation features
- changing backend build behavior beyond already approved visible-scope logic

**Success Criteria**

- users can identify current size, weight, category, and build scope without scanning multiple bars
- no overlap between control chrome and grid content
- desktop navigation stays visible while browsing long icon lists
- mobile keeps the same controls without a permanently reduced grid width
