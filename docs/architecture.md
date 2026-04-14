# Architecture Overview

## High Level
- `font_factory/`: Node/Express server, build pipeline, API endpoints.
- `frontend/`: React + Vite UI build output and source.
- `line/` and `fill/`: SVG assets organized by style.
- `dist_font/`: generated font assets.

## Server
- Entry: `font_factory/server.js`
- React build served when `USE_REACT_FRONTEND=1` or `VERCEL=1` and `frontend/dist` exists.
