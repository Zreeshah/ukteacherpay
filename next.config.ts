import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  typedRoutes: false,
  images: { unoptimized: true },
  typescript: {
    // Source type-checking runs separately via `npx tsc --noEmit`.
    // Next 16 emits a generated route validator error for static-export apps.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
