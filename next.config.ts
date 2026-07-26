import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from /{repo-name}/.
 *
 * On Windows + OneDrive, run `npm run predev` (automatic) so `.next` is a
 * junction outside sync — see scripts/ensure-next-cache.mjs.
 */
const basePath = process.env.GITHUB_PAGES === "true" ? "/Scelerity" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
