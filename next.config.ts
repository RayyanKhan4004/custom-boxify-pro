import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiOrigin = process.env.API_ORIGIN?.replace(/\/$/, "");
    return apiOrigin
      ? [{ source: "/api/v1/:path*", destination: `${apiOrigin}/:path*` }]
      : [];
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
