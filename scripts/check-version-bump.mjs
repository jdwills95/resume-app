#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const runGit = (args) => {
  const result = spawnSync("git", args, { encoding: "utf8" });

  if (result.status !== 0) {
    if (result.error) {
      throw result.error;
    }
    throw new Error(result.stderr || "git command failed");
  }

  return result.stdout.trim();
};

const hasHead = (() => {
  try {
    runGit(["rev-parse", "--verify", "HEAD"]);
    return true;
  } catch {
    return false;
  }
})();

if (!hasHead) {
  process.exit(0);
}

const stagedFiles = runGit(["diff", "--cached", "--name-only"])
  .split("\n")
  .map((file) => file.trim())
  .filter(Boolean);

if (!stagedFiles.includes("package.json")) {
  console.error("Commit blocked: update package.json version for every commit.");
  process.exit(1);
}

const previousVersion = runGit(["show", "HEAD:package.json"]);
const stagedVersion = runGit(["show", ":package.json"]);

const getVersion = (content) => {
  try {
    const parsed = JSON.parse(content);
    return parsed.version;
  } catch {
    return null;
  }
};

const oldVersion = getVersion(previousVersion);
const nextVersion = getVersion(stagedVersion);

if (!oldVersion || !nextVersion || oldVersion === nextVersion) {
  console.error("Commit blocked: package.json version must be bumped before commit.");
  process.exit(1);
}

process.exit(0);
