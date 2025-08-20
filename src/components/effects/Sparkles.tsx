"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number; vx: number; vy: number;
  a: number; life: number; col: string; rad: number;
};

type SparklesProps = {
  className?: string;
  colors?: string[];          // RGBA or hex
  rate?: number;              // particles per frame (0..1)
  size?: readonly [number, number]; // [min,max] radius in px
};

export default function Sparkles({
  className = "",
  colors = [
    "rgba(91,206,250,0.95)",
    "rgba(245,169,184,0.95)",
    "rgba(255,255,255,0.95)",
    "rgba(160,120,255,0.95)",
  ],
  rate = 0.35,
  size = [0.8, 2.0],
}: SparklesProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const anchor = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
        const x = anchor.current.x * canvas.width;
        const y = anchor.current.y * canvas.height;
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.6;
        const life = 60 + Math.random() * 40;
        const col = colors[(Math.random() * colors.length) | 0] ?? "rgba(255,255,255,0.9)";
        const rad = (size[0] + Math.random() * (size[1] - size[0])) * DPR;

        particles.current.push({
          x, y,
          vx: Math.cos(angle) * speed * DPR,
          vy: Math.sin(angle) * speed * DPR,
          a: 1, life, col, rad,
        });
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emit();

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i]!;
        p.x += p.vx;
        p.y += p.vy * 0.98;
        p.life -= 1;
        p.a = p.life / 100;
        if (p.life <= 0 || p.a <= 0.05) {
          particles.current.splice(i, 1);
          continue;
        }
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.col;
        // keep alpha in range without string replace gymnastics
        ctx.fillStyle = p.col.startsWith("rgba(")
          ? p.col.replace(/rgba\(([^)]+),\s*[^)]+\)/, (_, rgb) => `rgba(${rgb}, ${Math.min(p.a, 0.95)})`)
          : p.col;
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
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ background: "transparent", display: "block" }}
      aria-hidden="true"
    />
  );
}
