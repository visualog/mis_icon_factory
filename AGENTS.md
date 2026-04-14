# IconFont Agent Guide

This repository is the system of record for work. Keep all decisions, constraints,
and verification steps inside the repo. If something is missing, add a doc.

## Quick Index
- docs/README.md (start here)
- docs/workflow.md (how we work, checkpoints)
- docs/verification.md (what must pass before shipping)
- docs/ui-guidelines.md (UI/UX rules and patterns)
- docs/architecture.md (high-level structure)
- docs/plans/ (historical plans and design notes)

## Working Principles
- Prefer small, verifiable steps. Each step should have a clear success signal.
- Always anchor changes to files, tests, or logs. Avoid speculative statements.
- When unsure, inspect the codebase first. Do not assume behavior.
- Keep edits minimal and consistent with the existing design system and tone.

## Development Commands
- Dev server (default): `npm start`
- Dev server on 3003: `PORT=3003 node font_factory/server.js`
- React build: `npm run build:react`
- React build (agentation): `npm run build:react:agentation`
- Tests: `npm test`
- Install git hooks: `npm run hooks:install`
- Harness checks: `npm run harness:check`

## Verification Expectations
- UI changes: verify in the browser and check console for errors.
- Build changes: run the relevant build command if assets are involved.
- If a change is risky, add a short note in docs/verification.md.

## Where To Add Docs
- Product or workflow changes: docs/workflow.md
- UI/UX rules or component conventions: docs/ui-guidelines.md
- Build/test/verification changes: docs/verification.md
- Architecture decisions: docs/architecture.md
