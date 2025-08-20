// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const base = "https://cybernetix.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = [
    "/", "/vision", "/garden", "/learn", "/updates",
    "/roadmap", "/contribute", "/contact",
  ];
  return urls.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
