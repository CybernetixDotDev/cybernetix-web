// src/app/(site)/learn/page.tsx
import Link from "next/link";
import { getLearnPosts } from "@/lib/mdx";

export const dynamic = "force-static"; // pre-build at build time

export default function LearnPage() {
  const posts = getLearnPosts();

  return (
    <div className="container-outer py-16">
      <h1 className="text-4xl font-bold mb-6">Learn in Public</h1>
      <p className="text-zinc-300 mb-10">
        Weekly notes — short, imperfect, alive. Math, physics, coding, web3, blockchain.
      </p>

      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="card p-6">
            <h2 className="text-xl font-semibold mb-1">
              <Link href={`/learn/${p.slug}`}>{p.title}</Link>
            </h2>
            <time className="text-xs text-zinc-400">{p.date}</time>
            <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
            <Link
              href={`/learn/${p.slug}`}
              className="inline-block mt-3 text-sm text-blue-400 hover:underline"
            >
              Read →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
