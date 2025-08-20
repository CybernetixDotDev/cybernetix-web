// src/app/(site)/updates/page.tsx
import { getUpdates, formatDate } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";

export const dynamic = "force-static";

export default async function UpdatesPage() {
  const updates = getUpdates();

  return (
    <div className="container-outer py-16">
      <h1 className="text-4xl font-bold mb-6">Updates</h1>
      <p className="text-zinc-300 mb-10">
        Our public changelog. Small, imperfect notes — consistency is our currency.
      </p>

      <div className="space-y-10">
        {await Promise.all(
          updates.map(async (u) => {
            const { content } = await compileMDX({
              source: u.content,
              options: { parseFrontmatter: false },
            });
            return (
              <article key={u.slug} className="card p-6">
                <h2 className="text-xl font-semibold">{u.title}</h2>
                <time className="block text-xs text-zinc-400">
                  {formatDate(u.date)}
                </time>
                <div className="prose prose-invert mt-4">{content}</div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
