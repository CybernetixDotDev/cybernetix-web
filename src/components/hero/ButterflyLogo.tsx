// src/components/hero/ButterflyLogo.tsx
"use client";

import Image from "next/image";

type Props = { size?: number };

export default function ButterflyLogo({ size = 260 }: Props) {
  return (
    <div
      className="group relative"
      style={{ width: size, height: size }}
      aria-label="Cybernetix butterfly logo"
    >
      {/* Rays (very soft, behind everything) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="rays absolute w-[220%] h-[220%]" />
      </div>

      {/* Wings (pure SVG, fully transparent outside paths) */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 220 220"
        fill="none"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5BCEFA" />
            <stop offset="0.35" stopColor="#F5A9B8" />
            <stop offset="0.62" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#A078FF" />
          </linearGradient>

          <filter id="wingGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* LEFT wing */}
        <g className="wing-animate wing-glow" filter="url(#wingGlow)" opacity="0.38">
          <path
            d="
              M110 108
              C 70 88, 40 66, 22 48
              C 10 72, 22 98, 40 118
              C 62 142, 84 156, 110 164 Z
            "
            fill="url(#wingGrad)"
          />
          <path
            d="M104 116 C 72 102, 50 82, 30 60"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
          />
        </g>

        {/* RIGHT wing */}
        <g className="wing-animate wing-glow" filter="url(#wingGlow)" opacity="0.38">
          <path
            d="
              M110 108
              C 150 88, 180 66, 198 48
              C 210 72, 198 98, 180 118
              C 158 142, 136 156, 110 164 Z
            "
            fill="url(#wingGrad)"
          />
          <path
            d="M116 116 C 148 102, 170 82, 190 60"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Your PNG logo centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/logoPlain.png"
          alt="Cybernetix Logo"
          width={size * 0.72}
          height={size * 0.72}
          className="drop-shadow-[0_0_24px_rgba(160,120,255,0.45)]"
          priority
        />
      </div>
    </div>
  );
}
