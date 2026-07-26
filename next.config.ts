import type { NextConfig } from "next";

/** GitHub Pages serves project sites from /{repo-name}/ */
const basePath = process.env.GITHUB_PAGES === "true" ? "/Scelerity" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
