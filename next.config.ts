import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: exported to out/ and deployed to Cloudflare Pages.
  output: "export",
};

export default nextConfig;
