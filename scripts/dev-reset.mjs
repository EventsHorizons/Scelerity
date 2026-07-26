/**
 * Hard reset + dev start.
 */
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(
  process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local"),
  "scelerity",
  "next-cache",
);

console.log("[scelerity:dev] Full cache reset…");

spawnSync("cmd.exe", ["/c", "rmdir", path.join(root, ".next")], { cwd: root });
if (fs.existsSync(path.join(root, ".next"))) {
  fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });
}
if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true });
}

spawnSync(process.execPath, [path.join(root, "scripts", "dev.mjs")], {
  cwd: root,
  stdio: "inherit",
});
