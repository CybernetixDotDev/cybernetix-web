"use client";

import { useRef, useEffect, useState } from "react";

type TiltState = { rx: number; ry: number; tz: number };

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTiltDeg?: number;
  liftPx?: number;
  damp?: number;
};

export default function ParallaxTilt({
  children,
  className = "",
  maxTiltDeg = 8,
  liftPx = 12,
  damp = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const state = useRef<TiltState>({ rx: 0, ry: 0, tz: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let target: TiltState = { rx: 0, ry: 0, tz: 0 };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      target = {
        ry: (x - 0.5) * (maxTiltDeg * 2),
        rx: -(y - 0.5) * (maxTiltDeg * 2),
        tz: -liftPx,
      };
      setHovered(true);
    };

    const onLeave = () => {
      target = { rx: 0, ry: 0, tz: 0 };
      setHovered(false);
    };

    const tick = () => {
      state.current.rx += (target.rx - state.current.rx) * damp;
      state.current.ry += (target.ry - state.current.ry) * damp;
      state.current.tz += (target.tz - state.current.tz) * damp;
      el.style.transform = `perspective(900px) rotateX(${state.current.rx.toFixed(2)}deg) rotateY(${state.current.ry.toFixed(2)}deg) translateZ(${state.current.tz.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [maxTiltDeg, liftPx, damp]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
        transition: hovered ? "none" : "transform 200ms ease",
      }}
    >
      {children}
    </div>
  );
}
