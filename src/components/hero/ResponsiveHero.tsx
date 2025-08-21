// src/components/hero/ResponsiveHero.tsx
'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MobileFirstHero = dynamic(() => import('./MobileFirstHero'));
const DesktopHero = dynamic(() => import('./DesktopHero'));

export default function ResponsiveHero() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)'); // Tailwind md
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isDesktop === null) return <MobileFirstHero />; // safe first paint
  return isDesktop ? <DesktopHero /> : <MobileFirstHero />;
}
