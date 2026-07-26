/**
 * Single dev entry point — always fixes OneDrive cache before starting Next.js.
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

function runEnsureDev(fresh = true) {
  const args = [path.join(root, "scripts", "ensure-next-cache.mjs"), "--dev"];
  if (fresh) args.push("--fresh");

  const result = spawnSync(process.execPath, args, {
    cwd: root,
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function freePort(port) {
  if (process.platform !== "win32") return;

  spawnSync(
    "powershell",
    [
      "-NoProfile",
      "-Command",
      `$c = Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1; if ($c) { Stop-Process -Id $c.OwningProcess -Force -ErrorAction SilentlyContinue }`,
    ],
    { stdio: "ignore" },
  );
}

console.log("[scelerity:dev] Preparing OneDrive-safe cache…");

// Kill stale dev servers that keep serving corrupted cache.
freePort(3000);
freePort(3001);

runEnsureDev(true);

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "dev", "--turbopack"],
  { cwd: root, stdio: "inherit", shell: process.platform === "win32" },
);

child.on("exit", (code) => process.exit(code ?? 0));
