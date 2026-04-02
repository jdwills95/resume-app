#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const PACKAGE_JSON = "package.json";

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

if (stagedFiles.includes(PACKAGE_JSON)) {
  const previousPackageJson = runGit(["show", `HEAD:${PACKAGE_JSON}`]);
  const stagedPackageJson = runGit(["show", `:${PACKAGE_JSON}`]);

  try {
    const previousVersion = JSON.parse(previousPackageJson).version;
    const stagedVersion = JSON.parse(stagedPackageJson).version;

    if (previousVersion !== stagedVersion) {
      process.exit(0);
    }
  } catch {
    // Fall through to auto bump if version parsing fails.
  }
}

const packageJson = JSON.parse(readFileSync(PACKAGE_JSON, "utf8"));
const versionMatch = /^(\d+)\.(\d+)\.(\d+)$/.exec(String(packageJson.version || ""));

if (!versionMatch) {
  console.error("Commit blocked: package.json version must use x.y.z format.");
  process.exit(1);
}

const [major, minor, patch] = versionMatch.slice(1).map(Number);
packageJson.version = `${major}.${minor}.${patch + 1}`;

writeFileSync(PACKAGE_JSON, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");
runGit(["add", PACKAGE_JSON]);

console.log(`Version updated to ${packageJson.version}`);
process.exit(0);
