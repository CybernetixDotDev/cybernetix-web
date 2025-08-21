'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DesktopHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: denser stars for desktop */}
      <div className="absolute inset-0 -z-10">
        <Stars count={80} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      <div className="mx-auto flex max-w-6xl items-center gap-16 px-8 py-24 xl:py-28">
        {/* Copy */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm tracking-[0.25em] text-white/70">CYBERNETIX</p>

          <h1
            className="bg-gradient-to-r from-[#7ad0ff] via-[#d29bff] to-[#ffb6e6] bg-clip-text text-transparent
                       font-semibold leading-[1.1]"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}
          >
            Cybernetix — We don’t chase. We cultivate.
          </h1>

          <div className="mt-6 space-y-2 text-lg leading-relaxed text-white/85">
            <p>A garden for visionaries.</p>
            <p>Building sacred tech for a kinder future.</p>
            <p>Learning is our marketing. Consistency is our currency.</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTA href="/garden" primary>
              Enter the Garden
            </CTA>
            <CTA href="/learn">Learn with Us</CTA>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden shrink-0 md:block">
          <Image
            src="/hero/cybernetix-mask.png"
            alt="Cybernetix cosmic mask"
            width={520}
            height={520}
            priority
            className="h-auto w-[28vw] max-w-[520px] min-w-[360px]
                       drop-shadow-[0_0_40px_rgba(124,58,237,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}

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
    'rounded-full px-7 py-3 text-base font-medium transition active:scale-[.98]';
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

/* Desktop starfield (a bit denser than mobile) */
function Stars({ count = 80 }: { count?: number }) {
  const dots = Array.from({ length: count });
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden>
      {dots.map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const r = Math.random() * 1.6 + 0.6;
        const delay = Math.random() * 8;
        const dur = 10 + Math.random() * 8;
        return (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={r}
            fill="white"
            opacity={0.5}
            style={{
              animation: `twinkle ${dur}s ease-in-out ${delay}s infinite`,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))',
            }}
          />
        );
      })}
      <style>{`
        @keyframes twinkle {
          0%,100% { opacity: .45; transform: translateY(0px) }
          50% { opacity: .9; transform: translateY(-4px) }
        }
      `}</style>
    </svg>
  );
}
