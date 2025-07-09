const roadmap = [
  {
    title: 'Phase 0: Genesis',
    date: 'Q2 2024',
    description:
      'Vision formed. Core principles aligned. Cybernetix is born to challenge the status quo and explore the edges of possibility.',
  },
  {
    title: 'Phase 1: The Portal Opens',
    date: 'Q3 2024',
    description:
      'Launch of the marketing site, onboarding visionaries, dreamers, and builders. Foundation of our tech stack begins.',
  },
  {
    title: 'Phase 2: Decentralized Identity',
    date: 'Q4 2024',
    description:
      'Zero-login onboarding experience with unique identity, referral, and rewards systems powered by blockchain.',
  },
  {
    title: 'Phase 3: The Engine Awakens',
    date: 'Q1 2025',
    description:
      'Introduction of AI agents, modular workflows, and NFT-based access systems. Users begin shaping Cybernetix through participation.',
  },
  {
    title: 'Phase 4: Expansion Beyond Earth',
    date: 'TBD',
    description:
      'Quantum leaps. Cosmic collaborations. Cybernetix becomes a universal protocol for creativity, autonomy, and collective evolution.',
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-24 bg-black text-white">
      <section className="max-w-4xl mx-auto text-center space-y-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider animate-fade-in">
          The Cybernetix Roadmap
        </h1>
        <p className="text-lg md:text-xl text-white/70 animate-fade-in">
          Our evolution through the cosmos — from spark to system.
        </p>
      </section>

      <section className="relative max-w-3xl mx-auto border-l border-white/10 pl-6">
        {roadmap.map((phase, index) => (
          <div key={index} className="relative pb-12">
            <div className="absolute left-[-10px] top-1 w-4 h-4 bg-cyan-300 rounded-full border-2 border-white" />
            <div className="pl-4">
              <h2 className="text-xl font-semibold text-cyan-300">{phase.title}</h2>
              <p className="text-sm text-white/50 mb-2">{phase.date}</p>
              <p className="text-white/80">{phase.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
