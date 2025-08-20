// next.config.ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Enable MDX
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  /* other config options */
};

// Export combined
export default withMDX(nextConfig);
