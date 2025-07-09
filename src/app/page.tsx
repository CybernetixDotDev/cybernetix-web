'use client';

import { motion } from 'framer-motion';

const tiles = [
  { title: 'Join the Portal', description: 'Create your identity, no login needed.', href: '#' },
  { title: 'Explore the Vision', description: 'See how we’re reshaping the future.', href: '/vision' },
  { title: 'View the Roadmap', description: 'Our cosmic journey — phase by phase.', href: '/roadmap' },
  { title: 'Connect to GitHub', description: 'Build alongside us.', href: 'https://github.com/CybernetixDotDev' },
];

export default function HomePage() {
  return (
    <div className="relative w-full text-white overflow-x-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/cosmicpath.JPG"
          alt="cosmic background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Twinkling Stars Overlay */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="w-full h-full bg-[url('/stars.png')] bg-cover opacity-60 animate-twinkle" />
      </div>

      {/* Optional black gradient for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/10 to-transparent" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 space-y-6 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-black/30 px-6 py-4 rounded-lg"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
            Cybernetix
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
        >
          Rewriting the Code of Reality. No resumes. No friction. Just cosmic creation.
        </motion.p>

        {/* Portal Tiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {tiles.map((tile, idx) => (
            <a
              key={idx}
              href={tile.href}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/20 shadow-lg hover:shadow-cyan-400/30 transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-white transition">
                {tile.title}
              </h3>
              <p className="mt-2 text-sm text-white/80">{tile.description}</p>
            </a>
          ))}
        </motion.div>

        {/* Scroll to story section */}
        <a
          href="#story"
          className="mt-16 text-cyan-300 hover:text-white text-sm uppercase tracking-wide border border-cyan-300 px-5 py-2 rounded-full transition hover:bg-cyan-300/10"
        >
          ↓ Scroll to Story
        </a>
      </section>

      {/* Story Section */}
      <section
        id="story"
        className="relative z-10 px-6 py-24 bg-black/90 backdrop-blur-sm text-white text-center"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">
            Our Story
          </h2>
          <p className="text-lg text-white/80">
            Cybernetix was born from a vision: a world where work finds you, aligned to your truth, powered by the cosmos and guided by AI.
          </p>
          <p className="text-white/60">
            We are a protocol for autonomy, creativity, and decentralized human evolution — on Earth and beyond.
          </p>
        </div>
      </section>
    </div>
  );
}
