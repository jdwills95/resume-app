---
name: version-on-every-commit
description: Enforce package version updates for every commit in this repository. Use when creating commits, preparing commit-ready changes, updating Git hooks, or validating commit/versioning policy.
---

# Version On Every Commit

Use this workflow whenever a change is about to be committed.

## Workflow

1. Ensure the Git hooks are active by running `npm run setup-hooks` if hooks are not configured yet.
2. Let `.githooks/pre-commit` run `npm run bump:version-for-commit` on each commit.
3. Keep `package.json` version in `x.y.z` format so automated patch bumping succeeds.
4. If `package.json` already contains a staged version bump, do not overwrite it.

## Validation

1. Run `npm run bump:version-for-commit` manually to verify behavior.
2. Run `git diff -- package.json` and confirm only `version` changed when no manual bump was staged.
