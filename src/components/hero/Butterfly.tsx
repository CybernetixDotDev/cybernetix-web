// src/components/hero/Butterfly.tsx
"use client";

type Props = {
  size?: number;        // px
  className?: string;   // extra classes for positioning
};

/**
 * Butterfly with animated wings.
 * - The BODY uses your /logoPlain.png, clipped into a body shape
 * - Wings flap via CSS keyframes; colors: 💙 💗 🤍 + metallic purple
 */
export default function Butterfly({ size = 280, className = "" }: Props) {
  const vbW = 220;
  const vbH = 180;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: (size * vbH) / vbW }}
    >
      {/* Halo / rift behind butterfly */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-90
                      bg-[radial-gradient(ellipse_at_center,_rgba(91,206,250,0.35)_0%,_rgba(245,169,184,0.28)_35%,_rgba(255,255,255,0.18)_60%,_rgba(160,120,255,0.32)_100%)]
                      animate-pulse-slow"
           aria-hidden />

      {/* The butterfly itself */}
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="relative z-10 block float-slow"
        role="img"
        aria-label="Cybernetix butterfly"
      >
        <defs>
          {/* Wing gradient */}
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#5BCEFA"/> {/* blue */}
            <stop offset="35%"  stopColor="#F5A9B8"/> {/* pink */}
            <stop offset="62%"  stopColor="#FFFFFF"/> {/* white */}
            <stop offset="100%" stopColor="#A078FF"/> {/* metallic purple */}
          </linearGradient>

          {/* Soft glow blur */}
          <filter id="wingGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Clip for body image */}
          <clipPath id="bodyClip">
            {/* Simple body silhouette */}
            <path d="M107 30 C 102 55, 102 95, 107 120
                     C 112 145, 108 160, 110 170
                     C 114 172, 118 172, 122 170
                     C 124 160, 120 145, 125 120
                     C 130 95, 130 55, 125 30
                     C 120 22, 112 22, 107 30 Z" />
          </clipPath>
        </defs>

        {/* LEFT wing (pivot near body) */}
        <g className="wing wing-left" style={{ transformOrigin: "110px 90px" }} filter="url(#wingGlow)">
          <path
            d="M108 82
               C 60 60, 28 40, 14 30
               C 4 52,  16 78, 30 95
               C 52 122, 78 138, 108 146 Z"
            fill="url(#wingGrad)"
            fillOpacity="0.95"
          />
          {/* Inner vein / sheen */}
          <path
            d="M100 92 C 70 82, 48 66, 26 46"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* RIGHT wing */}
        <g className="wing wing-right" style={{ transformOrigin: "112px 90px" }} filter="url(#wingGlow)">
          <path
            d="M112 82
               C 160 60, 192 40, 206 30
               C 216 52, 204 78, 190 95
               C 168 122, 142 138, 112 146 Z"
            fill="url(#wingGrad)"
            fillOpacity="0.95"
          />
          <path
            d="M120 92 C 150 82, 172 66, 194 46"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* BODY - your logo clipped into silhouette */}
        <g>
          <image
            href="/logoPlain.png"
            x="92" y="20" width="36" height="160"
            clipPath="url(#bodyClip)"
            preserveAspectRatio="xMidYMid slice"
            style={{ filter: "drop-shadow(0 0 18px rgba(160,120,255,.6))" }}
          />
          {/* fallback outline (in case image fails) */}
          <path
            d="M107 30 C 102 55, 102 95, 107 120
               C 112 145, 108 160, 110 170
               C 114 172, 118 172, 122 170
               C 124 160, 120 145, 125 120
               C 130 95, 130 55, 125 30
               C 120 22, 112 22, 107 30 Z"
            fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"
          />
          {/* antennae */}
          <path d="M112 30 C 112 16, 126 10, 134 8" stroke="rgba(160,120,255,.8)" strokeWidth="1.4" fill="none"/>
          <path d="M108 30 C 108 16, 94 10, 86 8"  stroke="rgba(91,206,250,.8)"  strokeWidth="1.4" fill="none"/>
        </g>
      </svg>
    </div>
  );
}
