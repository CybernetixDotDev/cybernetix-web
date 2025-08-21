'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MobileFirstHero() {
  // Reveal a sticky CTA once user scrolls a bit
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 180);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background (subtle particles for mobile) */}
      <div className="absolute inset-0 -z-10">
        <Particles />
        {/* Contrast overlay so copy is always readable on mobile */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Top spacing that respects iOS safe area */}
      <div className="pt-[calc(env(safe-area-inset-top)+1rem)]" />

      <div className="mx-auto max-w-screen-sm px-5">
        {/* Eyebrow */}
        <p className="mb-2 text-xs tracking-[0.2em] text-white/70">CYBERNETIX</p>

        {/* Headline with gradient, mobile-first sizing via clamp */}
        <h1
          className="bg-gradient-to-r from-[#7ad0ff] via-[#d29bff] to-[#ffb6e6] bg-clip-text text-transparent
                     font-semibold leading-tight"
          style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)' }}
        >
          Cybernetix — We don’t chase. We cultivate.
        </h1>

        {/* Body copy: short, scannable lines on mobile */}
        <div className="mt-3 space-y-1.5 text-base leading-relaxed text-white/85">
          <p>A garden for visionaries.</p>
          <p>Building sacred tech for a kinder future.</p>
          <p>Learning is our marketing. Consistency is our currency.</p>
        </div>

        {/* CTAs: full-width pills on mobile; split on md+ */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          <CTA href="/garden" primary>
            Enter the Garden
          </CTA>
          <CTA href="/learn">Learn with Us</CTA>
        </div>

        {/* Logo */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/hero/cybernetix-mask.png" // put your image at public/hero/cybernetix-mask.png
            alt="Cybernetix cosmic mask"
            width={420}
            height={420}
            className="h-auto w-10/12 max-w-[420px] drop-shadow-[0_0_30px_rgba(124,58,237,0.35)]"
            priority
          />
        </div>

        {/* Bottom safe-area pad */}
        <div className="pb-[calc(env(safe-area-inset-bottom)+1rem)]" />
      </div>

      {/* Sticky bottom CTA (appears after small scroll) */}
      <div
        className={`fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+12px)] z-40 px-4 transition-opacity duration-300
        ${showSticky ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <Link
          href="/garden"
          className="mx-auto flex w-full max-w-sm items-center justify-center rounded-full border border-white/15
                     bg-white/10 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/10
                     text-base font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                     hover:bg-white/15 active:scale-[.99] transition"
          aria-label="Enter the Garden"
        >
          🌌 Enter the Garden
        </Link>
      </div>
    </section>
  );
}

/* —————— Small components —————— */

function CTA({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base =
    'w-full rounded-full px-6 py-3 text-center text-base font-medium transition active:scale-[.98]';
  return (
    <Link
      href={href}
      className={
        primary
          ? `${base} bg-white text-black hover:bg-white/90`
          : `${base} border border-white/20 text-white hover:bg-white/10`
      }
    >
      {children}
    </Link>
  );
}

/* —————— Ultra-light particles that won’t melt phones —————— */
function Particles() {
  // Use static SVG circles with gentle float animation via CSS to keep it cheap.
  const dots = Array.from({ length: 28 });
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden>
      {dots.map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const r = Math.random() * 1.8 + 0.6;
        const delay = Math.random() * 6;
        const dur = 8 + Math.random() * 6;
        return (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={r}
            fill="white"
            opacity={0.5}
            style={{
              animation: `float ${dur}s ease-in-out ${delay}s infinite`,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))',
            }}
          />
        );
      })}
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0px); opacity: .5; }
            50% { transform: translateY(-6px); opacity: .9; }
          }
        `}
      </style>
    </svg>
  );
}
