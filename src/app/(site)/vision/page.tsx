// src/app/(site)/vision/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision — Cybernetix",
  description:
    "We don’t chase. We cultivate. Cybernetix is a living garden: sacred technology, community, and consistency over hype.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs tracking-wide">
      {children}
    </span>
  );
}

export default function VisionPage() {
  return (
    <div className="container-outer py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Our Vision</h1>
        <p className="mt-4 text-lg text-zinc-300">
          Cybernetix is not a startup. It’s a{" "}
          <em className="not-italic">living garden</em>—a place where people and
          technology grow together with intention, humility, and courage. We
          build sacred tools that help humanity evolve.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>Resonance over revenue</Pill>
          <Pill>Consistency over hype</Pill>
          <Pill>Learning as marketing</Pill>
          <Pill>Community  Capital</Pill>
        </div>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Why we exist</h2>
          <p className="text-zinc-300 text-sm">
            Work is becoming automated, but dignity shouldn’t be. Cybernetix is
            a path to create value without gatekeepers—where contribution,
            curiosity, and care earn belonging.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">What we honor</h2>
          <ul className="text-zinc-300 text-sm list-disc pl-5 space-y-2">
            <li>Truth over appearances.</li>
            <li>Process over perfection.</li>
            <li>Craft over clout.</li>
            <li>Stewardship over extraction.</li>
          </ul>
        </div>

        <div className="card p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">How we build</h2>
          <ol className="text-zinc-300 text-sm list-decimal pl-5 space-y-2">
            <li>
              <strong>Learn in public.</strong> Weekly notes on math, physics,
              code, blockchain.
            </li>
            <li>
              <strong>Ship small, often.</strong> Changelog‑style updates as a
              heartbeat of progress.
            </li>
            <li>
              <strong>Invite resonance.</strong> No resumes; contribution speaks
              for itself.
            </li>
            <li>
              <strong>Reward stewardship.</strong> Future tokens/NFTs symbolize
              belonging—not hype.
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <blockquote className="card p-6 text-zinc-300">
          <p className="text-base">
            “We don’t chase. We cultivate. The garden attracts everything that
            is good.”
          </p>
        </blockquote>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/garden"
            className="px-5 py-2 rounded-full bg-white/15 hover:bg-white/20 transition"
          >
            Enter the Garden
          </Link>
          <Link
            href="/learn"
            className="px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition"
          >
            Learn with Us
          </Link>
          <Link
            href="/updates"
            className="px-5 py-2 rounded-full border border-white/20 hover:border-white/40 transition"
          >
            See the Latest Updates
          </Link>
        </div>
      </section>
    </div>
  );
}
