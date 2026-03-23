import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/sanjay0110.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
