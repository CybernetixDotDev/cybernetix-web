// src/components/hero/PortalHero.tsx
"use client";

import Link from "next/link";
import Starfield from "./Starfield";
//import Butterfly from "./Butterfly";
import ButterflyLogo from "./ButterflyLogo";
//import ParallaxTilt from "@/components/effects/ParallaxTilt";
//import Sparkles from "@/components/effects/Sparkles";

export default function PortalHero() {
  return (
    <section className="relative overflow-hidden">
      <Starfield />

      <div className="relative container-outer py-16 sm:py-20 md:py-28 min-h-[520px]">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: Copy */}
          <div className="max-w-3xl">
            <h1 className="gradient-title text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Cybernetix — We don’t chase. We cultivate.
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              A garden for visionaries building sacred technology for a kinder future.
              Learning is our marketing. Consistency is our currency.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/vision"
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
            </div>
          </div>

          {/* RIGHT: Butterfly with parallax + sparkles */}
          <div className="relative justify-self-center md:justify-self-end">
  <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] float-slow">
    <ButterflyLogo size={320} />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
