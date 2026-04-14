# Build Artifact Policy

## Scope
- `frontend/dist/*` (Vite build output)
- `dist_font_custom/*` (runtime/generated font output)
- Temporary build directories under `font_factory/build_temp/*`

## Policy
- Source of truth is code under `frontend/src/*`, `font_factory/*`, and tests/docs.
- Build artifacts should not be edited manually.
- Do not include generated artifact diffs in feature commits unless a release process explicitly requires them.
- If artifact files appear during local verification, either:
  - leave them unstaged, or
  - restore them before commit when they are tracked and unchanged by intent.

## PR Hygiene
- Commit intent should be readable from source/test/docs changes alone.
- If artifacts must be included for a release, document why in the PR description.

## Local Routine
1. Run harness checks.
2. Stage only intended source/test/docs files.
3. Confirm `git status --short` does not contain accidental artifact noise.
