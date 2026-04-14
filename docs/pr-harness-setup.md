# PR Draft: Harness Setup

## Title
`chore: add executable harness gates for local hooks and CI`

## Summary
- Added executable harness checks for staged and push contexts.
- Added git hook gates (`pre-commit`, `pre-push`).
- Added CI workflow (`Harness Check`) for push/PR validation.
- Added docs for workflow, verification, architecture index, and artifact policy.

## Verification
- `npm run harness:check:staged`
- `npm run harness:check:push`

## Notes
- This PR intentionally excludes unrelated UI changes and build artifact churn.
- Existing local changes in `frontend/src/styles.css` and `frontend/dist/*` are not part of this PR scope.
