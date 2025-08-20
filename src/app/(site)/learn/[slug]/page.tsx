// src/app/(site)/learn/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getLearnSlugs, formatDate } from "@/lib/mdx";

type Frontmatter = {
  title?: string;
  date?: string; // ISO
};

const learnDir = path.join(process.cwd(), "src/content/learn");

export async function generateStaticParams() {
  return getLearnSlugs().map((slug) => ({ slug }));
}

export default async function LearnPostPage({
  params,
}: {
  // In newer Next.js, params is a Promise in server components
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filepath = path.join(learnDir, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) notFound();

  const source = fs.readFileSync(filepath, "utf8");
  const parsed = matter(source) as matter.GrayMatterFile<string> & {
    data: Frontmatter;
  };
  const { data, content } = parsed;

  // ✅ No empty {} generic; no second type arg
  const compiled = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return (
    <div className="container-outer py-16 prose prose-invert max-w-3xl">
      <h1>{data.title ?? slug}</h1>
      <p className="text-sm text-zinc-400">{formatDate(data.date ?? "")}</p>
      <div className="mt-8">{compiled.content}</div>
    </div>
  );
}
