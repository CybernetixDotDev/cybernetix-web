import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;          // ISO
  description?: string;
};

export type UpdateEntry = {
  slug: string;
  title: string;
  date: string;          // ISO
  content: string;       // raw MDX body
};

type LearnFrontmatter = {
  title?: string;
  date?: string;
  description?: string;
};

type UpdateFrontmatter = {
  title?: string;
  date?: string;
};

const learnDir = path.join(process.cwd(), "src/content/learn");
const updatesDir = path.join(process.cwd(), "src/content/updates");

function readMdxFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".mdx"));
  } catch {
    return [];
  }
}

function compareByDateDesc(a: string, b: string) {
  const ta = Date.parse(a);
  const tb = Date.parse(b);
  if (!Number.isNaN(ta) && !Number.isNaN(tb)) return tb - ta;
  return a > b ? -1 : 1;
}

/* Learn posts */
export function getLearnPosts(): PostMeta[] {
  return readMdxFiles(learnDir)
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/i, "");
      const file = fs.readFileSync(path.join(learnDir, filename), "utf8");
      const parsed = matter(file) as matter.GrayMatterFile<string> & { data: LearnFrontmatter };
      const data = parsed.data ?? {};
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
      };
    })
    .sort((a, b) => compareByDateDesc(a.date, b.date));
}

export function getLearnSlugs(): string[] {
  return readMdxFiles(learnDir).map((f) => f.replace(/\.mdx$/i, ""));
}

/* Updates */
export function getUpdates(): UpdateEntry[] {
  return readMdxFiles(updatesDir)
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/i, "");
      const file = fs.readFileSync(path.join(updatesDir, filename), "utf8");
      const parsed = matter(file) as matter.GrayMatterFile<string> & { data: UpdateFrontmatter };
      const data = parsed.data ?? {};
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        content: parsed.content,
      };
    })
    .sort((a, b) => compareByDateDesc(a.date, b.date));
}

export function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}
