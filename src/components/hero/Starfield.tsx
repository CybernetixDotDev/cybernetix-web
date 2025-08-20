// src/components/hero/Starfield.tsx
"use client";

import { useEffect, useRef } from "react";

// Make the palette a fixed-length tuple so lookups are always strings
const PALETTE = [
  "rgba(91, 206, 250, 0.95)",  // 💙 light blue
  "rgba(245, 169, 184, 0.95)", // 💗 pink
  "rgba(255, 255, 255, 0.95)", // 🤍 white
  "rgba(160, 120, 255, 0.95)", // metallic purple
] as const;

type PaletteColor = (typeof PALETTE)[number];

type Star = { x: number; y: number; z: number; c: PaletteColor; s: number };

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const stars = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(420 * DPR); // hero height
      canvas.style.width = "100%";
      canvas.style.height = "420px";
    };
    resize();
    window.addEventListener("resize", resize);

    // init stars with palette
    const STAR_COUNT = 200;
    stars.current = Array.from({ length: STAR_COUNT }, (): Star => {
      const idx = Math.floor(Math.random() * PALETTE.length) as 0 | 1 | 2 | 3;
      const base: PaletteColor = PALETTE[idx];
      // slightly bias towards blue/pink/white; rarer purple sparkle
      const c: PaletteColor = Math.random() < 0.12 ? PALETTE[3] : base;
      return {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: Math.random() * 0.9 + 0.1,
        c,
        s: Math.random() * 0.7 + 0.6, // base size variation
      };
    });

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // subtle gradient background halo
      const g = ctx.createRadialGradient(
        width * 0.5,
        height * -0.1,
        0,
        width * 0.5,
        height * -0.1,
        width * 0.9
      );
      g.addColorStop(0, "rgba(124,58,237,0.12)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.6;

      // rotate & drift
      const t = Date.now() * 0.00005;

      for (const s of stars.current) {
        const rx = s.x * Math.cos(t) - s.y * Math.sin(t);
        const ry = s.x * Math.sin(t) + s.y * Math.cos(t);
        const px = cx + rx * s.z * width * 0.45;
        const py = cy + ry * s.z * height * 0.45;

        // twinkle: tiny alpha & size oscillation
        const tw = 0.85 + 0.15 * Math.sin((px + py + t * 600) * 0.002);
        const size = ((1.2 - s.z) * 1.4 * s.s * (window.devicePixelRatio || 1)) * tw;

        // soft glow
        ctx.shadowColor = s.c;
        ctx.shadowBlur = 6 * tw;

        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // reset shadow
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    />
  );
}
