// src/components/effects/Sparkles.tsx
"use client";

import { useEffect, useRef } from "react";

type SparklesProps = {
  className?: string;
  colors?: string[]; // RGBA or hex
  rate?: number;     // particles per frame
  size?: [number, number]; // min,max radius in px
};

export default function Sparkles({
  className = "",
  colors = [
    "rgba(91,206,250,0.95)",  // 💙
    "rgba(245,169,184,0.95)", // 💗
    "rgba(255,255,255,0.95)", // 🤍
    "rgba(160,120,255,0.95)", // metallic purple
  ],
  rate = 0.35,
  size = [0.8, 2.0],
}: SparklesProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<any[]>([]);
  const anchor = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(canvas.clientWidth * DPR);
      canvas.height = Math.floor(canvas.clientHeight * DPR);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const emit = () => {
      if (Math.random() < rate) {
        const r = canvas.getBoundingClientRect();
        const x = anchor.current.x * canvas.width;
        const y = anchor.current.y * canvas.height;

        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.6;
        const life = 60 + Math.random() * 40;
        const col = colors[(Math.random() * colors.length) | 0];
        const rad = (size[0] + Math.random() * (size[1] - size[0])) * DPR;

        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed * DPR,
          vy: Math.sin(angle) * speed * DPR,
          a: 1,
          life,
          col,
          rad,
        });
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emit();

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy * 0.98; // tiny gravity
        p.life -= 1;
        p.a = p.life / 100;
        if (p.life <= 0 || p.a <= 0.05) {
          particles.current.splice(i, 1);
          continue;
        }
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.col;
        ctx.fillStyle = p.col.replace("0.95", String(Math.min(p.a, 0.95)));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [colors, rate, size]);

return (
  <canvas
    ref={ref}
    className="absolute inset-0 pointer-events-none"
    // force transparency
    style={{ background: "transparent", display: "block" }}
    aria-hidden="true"
  />
);

}
