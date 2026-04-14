# Verification

## Minimum Checks
- UI changes: load the page and confirm the UI state visually.
- Build changes: run the relevant build command and confirm it completes.

## Commands
- Default server: `npm start`
- Server on 3003: `PORT=3003 node font_factory/server.js`
- React build: `npm run build:react`
- React build (agentation): `npm run build:react:agentation`
- Tests: `npm test`
- Harness check (auto mode): `npm run harness:check`
- Harness check (staged): `npm run harness:check:staged`
- Harness check (push): `npm run harness:check:push`

## Git Hook Setup
- Install local hooks once: `npm run hooks:install`
- Pre-commit runs staged harness checks.
- Pre-push runs push-level harness checks.

## Notes
If verification is skipped, say so explicitly with the reason.
