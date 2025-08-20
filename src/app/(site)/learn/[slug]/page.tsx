import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getLearnSlugs, formatDate } from "@/lib/mdx";

const learnDir = path.join(process.cwd(), "src/content/learn");

export async function generateStaticParams() {
  return getLearnSlugs().map((slug) => ({ slug }));
}

export default async function LearnPostPage({
  params,
}: {
  // 👇 params is a Promise now
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ await before using

  const filepath = path.join(learnDir, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) notFound();

  const source = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(source);

  const { content: mdx } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return (
    <div className="container-outer py-16 prose prose-invert max-w-3xl">
      <h1>{(data as any).title}</h1>
      <p className="text-sm text-zinc-400">{formatDate((data as any).date)}</p>
      <div className="mt-8">{mdx}</div>
    </div>
  );
}
