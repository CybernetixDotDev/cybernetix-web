export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-24 bg-black text-white">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider animate-fade-in">
          What is Cybernetix?
        </h1>
        <p className="text-lg md:text-xl text-white/70 animate-fade-in">
          Cybernetix is a cosmic movement redefining how humans connect, create, and thrive.
        </p>
      </section>

      <section className="mt-16 max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-md">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">🌌 Visionary Tech</h2>
          <p className="text-white/80">
            We build beyond conventional limitations—using AI, Web3, and space-inspired design to forge new realities.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-md">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">🧬 Empowerment</h2>
          <p className="text-white/80">
            No resumes. No gatekeeping. Cybernetix enables people to attract opportunities aligned with their worth.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-md">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">🔮 Cosmic Connection</h2>
          <p className="text-white/80">
            Inspired by science, nature, and the universe, we’re on a journey to make humanity more interconnected—on and off Earth.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-md">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3">🧠 AI Collaboration</h2>
          <p className="text-white/80">
            Cybernetix partners with AI as a co-founder, a creative force, and a builder of the future.
          </p>
        </div>
      </section>
    </div>
  );
}
