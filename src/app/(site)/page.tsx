// src/app/(site)/page.tsx
import PortalHero from "@/components/hero/PortalHero";

export default function HomePage() {
  return (
    <>
      <PortalHero />
      <section className="container-outer py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Vision</h3>
            <p className="text-sm text-zinc-300">
              Cybernetix is a living garden—technology grown with intention,
              resonance, and community.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Learn</h3>
            <p className="text-sm text-zinc-300">
              Weekly notes in math, physics, code, and web3—our learning is the brand.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Contribute</h3>
            <p className="text-sm text-zinc-300">
              Join the cultivation—docs, design, research, or code. No resumes. Just resonance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
