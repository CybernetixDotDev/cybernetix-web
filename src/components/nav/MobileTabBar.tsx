'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const TABS = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/garden', label: 'Garden', icon: GardenIcon },
  { href: '/learn', label: 'Learn', icon: LearnIcon },
  { href: '/vision', label: 'Vision', icon: VisionIcon },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  // Expose tabbar height so other sticky elements can offset above it
  useEffect(() => {
    const el = document.getElementById('cbx-tabbar');
    if (!el) return;
    const setVar = () =>
      document.documentElement.style.setProperty(
        '--tabbar-h',
        `${el.getBoundingClientRect().height}px`,
      );
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <nav
      id="cbx-tabbar"
      className="fixed inset-x-0 bottom-0 z-50 block md:hidden"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-screen-sm px-3 pb-[calc(env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-4 rounded-2xl border border-white/10 bg-white/8 backdrop-blur
                        supports-[backdrop-filter]:bg-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {TABS.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className="group flex flex-col items-center justify-center gap-1 py-3"
              >
                <Icon active={active} />
                <span
                  className={`text-[11px] ${
                    active ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

/* ——— Simple SVG icons (no external deps) ——— */
function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      className={active ? 'fill-white' : 'fill-white/70 group-hover:fill-white'}>
      <path d="M12 3 3 10h2v9h5v-5h4v5h5v-9h2z" />
    </svg>
  );
}
function GardenIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      className={active ? 'fill-white' : 'fill-white/70 group-hover:fill-white'}>
      <path d="M12 2a6 6 0 0 0-6 6c0 5 6 9 6 9s6-4 6-9a6 6 0 0 0-6-6zm0 20c-4 0-8-2-8-2s2-3 8-3 8 3 8 3-4 2-8 2z"/>
    </svg>
  );
}
function LearnIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      className={active ? 'fill-white' : 'fill-white/70 group-hover:fill-white'}>
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM1 12v3l11 6 6-3.27V14l-6 3.27L1 12z"/>
    </svg>
  );
}
function VisionIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      className={active ? 'fill-white' : 'fill-white/70 group-hover:fill-white'}>
      <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
    </svg>
  );
}
