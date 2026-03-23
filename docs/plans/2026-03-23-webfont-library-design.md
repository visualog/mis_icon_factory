# IconFactory Webfont Library Design

**Date:** 2026-03-23

**Context**

The product is not primarily an SVG browser. It is a webfont icon library. The default state of the page should communicate one clear promise: every icon shown in the library is already built and usable as part of the icon font set. Adding icons is an update workflow, not the main browsing mode.

**Goal**

Restructure the experience around three product modes:
- browse built webfont icons in the main grid
- control the preview from a fixed bottom controller
- add new SVG icons through upload, then auto-build and publish them into the library

**Core Product Model**

The user flow should be:
1. View the current webfont icon library
2. Adjust preview controls such as weight, size, and color palette
3. Upload one or more SVG files when the library needs to be extended
4. Trigger automatic build as part of the upload flow
5. Show the new icons in the library only after a successful build

This means the grid should represent the built library, not raw source assets.

**Layout**

Top area:
- minimal header only
- title can be visually hidden or removed from the visible chrome
- top-right upload action

Main area:
- library result summary
- built webfont icon grid
- optional lightweight category and search controls near the top of the grid
- drag-and-drop upload zone integrated into the library canvas

Bottom fixed controller:
- weight
- size
- color palette

The bottom controller is the primary control surface for previewing how the built icon font looks in use.

**Upload Interaction**

Primary:
- drag SVG files into the library upload zone

Secondary:
- click the upload button in the top-right corner to open the file picker

Upload behavior:
- accept one or more SVG files
- move files into the icon source set
- trigger automatic build immediately
- refresh the library if build succeeds
- show explicit failure feedback if build fails

**Library Rendering**

The library should load and render icons from the built font artifacts:
- `my-icon-font.css`
- generated `woff2` files

The grid should render icon glyphs using the built CSS classes rather than direct SVG fetches. This keeps the UI honest: the user sees the same artifact they will actually use.

**Information Hierarchy**

Primary:
- built icon preview
- search
- category browse
- preview controls

Secondary:
- upload state
- build progress
- build success or failure
- last update information

The design should avoid elevating maintenance controls above the library itself. Upload and build are important, but they support the library rather than replace it.

**Responsive Behavior**

Desktop:
- upload action in the top-right
- grid fills the main canvas
- fixed bottom controller remains visible

Tablet and mobile:
- top-right upload remains available
- drag-and-drop can degrade gracefully to file picker
- bottom controller may wrap into two rows but stays fixed

**Accessibility**

- upload button must be keyboard accessible
- drag-and-drop zone must have a clickable fallback
- build feedback should use `aria-live`
- preview controls need visible focus states
- touch targets in the bottom controller should meet 44x44 guidance

**Out of Scope**

- introducing a separate sidebar navigation system
- exposing raw unbuilt source icons in the main library grid
- turning the main library screen into a build dashboard

**Success Criteria**

- the page reads clearly as a built webfont icon library
- users understand that upload adds icons into the library through an automatic build step
- preview controls are clearly separated from management actions
- the library grid reflects actual built artifacts rather than raw SVG source files
