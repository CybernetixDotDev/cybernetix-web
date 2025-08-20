// src/app/(site)/garden/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Garden — Cybernetix Community",
  description:
    "A gentle on‑ramp to co‑create with Cybernetix. Learn, share, and contribute at your own pace.",
};

function Step({
  title,
  children,
  cta,
  href,
}: {
  title: string;
  children: React.ReactNode;
  cta?: string;
  href?: string;
}) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{children}</p>
      {cta && href ? (
        <Link
          href={href}
          className="inline-block mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-sm"
        >
          {cta}
        </Link>
      ) : null}
    </div>
  );
}

export default function GardenPage() {
  return (
    <div className="container-outer py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">The Garden</h1>
        <p className="mt-4 text-lg text-zinc-300">
          The Garden is our commons. Show up as you are. Learn in public. Ship
          small. Care for people and code. We’ll meet you where you’re at.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <Step
          title="1) Learn in Public"
          cta="Open Learn"
          href="/learn"
        >
          Post weekly notes on math, physics, coding, crypto, or blockchain.
          Short is beautiful—clarity over volume. Your learning is the brand.
        </Step>

        <Step
          title="2) Contribute Small"
          cta="See Contribution Ideas"
          href="/contribute"
        >
          Pick tiny tasks—docs, UI polish, research summaries, test coverage.
          No resumes. Your pull requests and presence speak for you.
        </Step>

        <Step
          title="3) Track our Pulse"
          cta="View Updates"
          href="/updates"
        >
          Follow the changelog to feel momentum. Consistency is our currency.
          Every small ship compounds into trust.
        </Step>

        <Step
          title="4) Share the Garden"
          cta="Invite a Friend"
          href="/vision"
        >
          If our values resonate, invite one person who’d feel at home here.
          We grow through resonance, not reach.
        </Step>

        <div className="card p-6 md:col-span-2">
          <h3 className="text-lg font-semibold">Belonging & Future Rewards</h3>
          <p className="mt-2 text-sm text-zinc-300">
            As the Garden matures, we’ll introduce symbolic rewards (NFTs / a
            contribution token) that honor stewardship—not speculation. We’ll
            publish designs in the open and move only when the roots are ready.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div className="card p-6">
          <h3 className="text-lg font-semibold">Community Guidelines</h3>
          <ul className="mt-2 text-sm text-zinc-300 list-disc pl-5 space-y-2">
            <li>Assume good intent; offer clear, kind feedback.</li>
            <li>Share sources; cite when you learn from others.</li>
            <li>Prefer small commits and descriptive PRs.</li>
            <li>Respect pace; protect focus; honor boundaries.</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contribute"
            className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/20 transition"
          >
            Start Contributing
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition"
          >
            Say Hello
          </Link>
          <Link
            href="/roadmap"
            className="px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition"
          >
            Explore the Roadmap
          </Link>
        </div>
      </section>
    </div>
  );
}
