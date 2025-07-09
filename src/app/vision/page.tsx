export default function VisionPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-24 bg-black text-white">
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider animate-fade-in">
          The Vision of Cybernetix
        </h1>
        <p className="text-lg md:text-xl text-white/70 animate-fade-in">
          A world where people attract work aligned with who they are — not what they beg to be.
        </p>
      </section>

      <section className="mt-20 space-y-24">
        {[
          {
            heading: "🌌 A New Operating System for Humanity",
            body: "Cybernetix is more than a platform — it's a protocol for possibility. A bridge between what we imagine and what we manifest.",
          },
          {
            heading: "🤖 AI as Co-Creator, Not Controller",
            body: "Our future is symbiotic. We partner with artificial intelligence not to dominate, but to collaborate. To build systems that reflect human potential, not replace it.",
          },
          {
            heading: "🪐 Borderless, Permissionless, Cosmic",
            body: "We aren't scaling a startup. We're scaling consciousness. The future doesn't belong to the loudest, richest, or most connected — it belongs to those aligned with truth.",
          },
          {
            heading: "🔭 A World Without Gatekeepers",
            body: "No more job boards. No more resumes. Cybernetix enables self-authorship — attracting opportunity through authenticity, not approval.",
          },
          {
            heading: "🚀 The Mission Beyond Earth",
            body: "We look skyward — not to escape, but to expand. Our tech, our culture, and our species will thrive by becoming more cosmic in vision and interconnected in action.",
          },
        ].map((section, idx) => (
          <div key={idx} className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300">{section.heading}</h2>
            <p className="text-white/80 text-lg">{section.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
