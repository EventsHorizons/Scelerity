/**
 * OneDrive-safe `.next` for Windows.
 *
 * Dev  → `.next` is always a junction to %LOCALAPPDATA%\scelerity\next-cache
 * Build → temporary local `.next` (restored to junction via postbuild / dev)
 *
 * Usage:
 *   node scripts/ensure-next-cache.mjs --dev
 *   node scripts/ensure-next-cache.mjs --build
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const nextDir = path.join(root, ".next");
const underOneDrive = process.platform === "win32" && /onedrive/i.test(root);

const mode =
  process.argv.includes("--build") || process.argv.includes("build")
    ? "build"
    : process.argv.includes("--dev") || process.argv.includes("dev")
      ? "dev"
      : process.env.npm_lifecycle_event === "build" ||
          process.env.npm_lifecycle_event === "prebuild"
        ? "build"
        : process.env.npm_lifecycle_event === "postbuild"
          ? "dev"
          : "dev";

const fresh = process.argv.includes("--fresh");

function log(msg) {
  console.log(`[scelerity:cache] ${msg}`);
}

function fail(msg) {
  console.error(`[scelerity:cache] ${msg}`);
  process.exit(1);
}

function cacheTarget() {
  const base =
    process.env.LOCALAPPDATA ||
    path.join(os.homedir(), "AppData", "Local");
  return path.join(base, "scelerity", "next-cache");
}

function removePath(p) {
  if (!fs.existsSync(p)) return;
  spawnSync("cmd.exe", ["/c", "rmdir", p], { encoding: "utf8" });
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function isJunction(p) {
  if (!fs.existsSync(p)) return false;
  try {
    return (
      fs.realpathSync(p).toLowerCase() !== path.resolve(p).toLowerCase()
    );
  } catch {
    return false;
  }
}

function createJunction(linkPath, targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
  const result = spawnSync(
    "cmd.exe",
    ["/c", "mklink", "/J", linkPath, targetPath],
    { encoding: "utf8" },
  );
  if (result.status !== 0) {
    fail(
      `Could not create junction.\n${result.stdout || ""}${result.stderr || ""}`,
    );
  }
}

function ensureModulesLink(baseDir, projectModules) {
  const link = path.join(baseDir, "node_modules");
  if (fs.existsSync(link)) {
    try {
      if (
        fs.realpathSync(link).toLowerCase() === projectModules.toLowerCase()
      ) {
        return;
      }
    } catch {
      /* recreate */
    }
    removePath(link);
  }
  createJunction(link, projectModules);
}

function setupDevJunction() {
  const target = cacheTarget();
  const projectModules = path.join(root, "node_modules");

  if (!fs.existsSync(projectModules)) {
    fail("node_modules missing — run npm install first.");
  }

  if (fresh) {
    if (fs.existsSync(nextDir)) removePath(nextDir);
    if (fs.existsSync(target)) {
      fs.rmSync(target, { recursive: true, force: true });
      log("Fresh dev cache (cleared stale build artifacts).");
    }
  }

  // Real `.next` folder inside OneDrive = guaranteed 500. Always replace.
  if (fs.existsSync(nextDir) && !isJunction(nextDir)) {
    removePath(nextDir);
    log("Removed local .next folder (OneDrive unsafe).");
  }

  if (!fs.existsSync(nextDir)) {
    createJunction(nextDir, target);
    log(`.next → ${target}`);
  } else if (!isJunction(nextDir)) {
    removePath(nextDir);
    createJunction(nextDir, target);
    log(`.next → ${target}`);
  } else {
    log(`OK — .next → ${target}`);
  }

  ensureModulesLink(target, projectModules);

  for (const sub of [
    "build",
    "server",
    "server/pages",
    "server/app",
    "static",
    "static/chunks",
    "static/development",
  ]) {
    const dir = path.join(target, sub);
    fs.mkdirSync(dir, { recursive: true });
    ensureModulesLink(dir, projectModules);
  }
}

function setupBuildLocal() {
  if (isJunction(nextDir)) {
    removePath(nextDir);
    log("Build mode — junction removed, using local .next.");
  }
}

if (!underOneDrive) {
  process.exit(0);
}

if (mode === "build") {
  setupBuildLocal();
} else {
  setupDevJunction();
}
