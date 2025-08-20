// src/lib/mdx.ts
import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;          // ISO "YYYY-MM-DD" preferred
  description?: string;
};

export type UpdateEntry = {
  slug: string;
  title: string;
  date: string;          // ISO
  content: string;       // raw MDX body (no frontmatter)
};

const learnDir = path.join(process.cwd(), "src/content/learn");
const updatesDir = path.join(process.cwd(), "src/content/updates");

/** Safe read of a content directory (returns [] if missing) */
function readMdxFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".mdx"));
  } catch {
    return [];
  }
}

/** Robust ISO date sort (newest first). Falls back to lexical if needed. */
function compareByDateDesc(a: string, b: string) {
  const ta = Date.parse(a);
  const tb = Date.parse(b);
  if (!isNaN(ta) && !isNaN(tb)) return tb - ta;
  return a > b ? -1 : 1;
}

/* --------------------------- Learn posts --------------------------- */

export function getLearnPosts(): PostMeta[] {
  const files = readMdxFiles(learnDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/i, "");
    const file = fs.readFileSync(path.join(learnDir, filename), "utf8");
    const { data } = matter(file);

    return {
      slug,
      title: (data as any).title || slug,
      date: (data as any).date || "",
      description: (data as any).description || "",
    } as PostMeta;
  });

  return posts.sort((a, b) => compareByDateDesc(a.date, b.date));
}

/** Helper for generateStaticParams in /learn/[slug] */
export function getLearnSlugs(): string[] {
  return readMdxFiles(learnDir).map((f) => f.replace(/\.mdx$/i, ""));
}

/* ---------------------------- Updates ----------------------------- */

export function getUpdates(): UpdateEntry[] {
  const files = readMdxFiles(updatesDir);

  const updates = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/i, "");
    const file = fs.readFileSync(path.join(updatesDir, filename), "utf8");
    const { data, content } = matter(file);

    return {
      slug,
      title: (data as any).title || slug,
      date: (data as any).date || "",
      content,
    } as UpdateEntry;
  });

  return updates.sort((a, b) => compareByDateDesc(a.date, b.date));
}

/* ----------------------------- Utils ------------------------------ */

/** Optional: small date formatter for UI */
export function formatDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}
