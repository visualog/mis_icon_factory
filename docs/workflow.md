# Workflow

## Default Flow
1. Understand the request and locate the relevant files.
2. Make minimal, targeted edits.
3. Verify locally when changes affect UI, build output, or behavior.
4. Summarize what changed and what was verified.

## Harness Gates
- Use `npm run hooks:install` once per clone/worktree.
- Pre-commit gate: runs staged harness checks.
- Pre-push gate: runs push-level harness checks (tests + builds when relevant).

## Change Types
- UI tweaks: confirm in browser, check console errors.
- Build pipeline changes: run build command and confirm output artifacts.
- Data/schema changes: validate with a quick read or a small test.

## Artifacts
- Keep decisions in docs/ if they will be reused.
- Keep historical plans in docs/plans/ as references.
