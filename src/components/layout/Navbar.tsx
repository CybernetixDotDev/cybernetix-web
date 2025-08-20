// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Portal" },
  { href: "/vision", label: "Vision" },
  { href: "/garden", label: "Garden" },
  { href: "/learn", label: "Learn" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/updates", label: "Updates" },
  { href: "/contribute", label: "Contribute" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const active = useMemo(() => pathname?.split("?")[0] || "/", [pathname]);

  // --- Route-aware glow pill positioning ---
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });

  const recalc = () => {
    const el = itemRefs.current[active];
    const list = listRef.current;
    if (!el || !list) {
      setPill((p) => ({ ...p, visible: false }));
      return;
    }
    const listBox = list.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    const left = box.left - listBox.left + list.scrollLeft;
    const width = box.width;
    setPill({ left, width, visible: true });
  };

  useEffect(() => {
    recalc();
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    // Recalc after fonts/layout settle
    const id = setTimeout(recalc, 50);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // --- Mobile menu ---
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Close menu when route changes
    setOpen(false);
  }, [active]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <nav className="container-outer flex items-center justify-between h-14">
        <Link href="/" className="font-semibold tracking-wide">
          CYBERNETIX
        </Link>

        {/* Desktop nav */}
        <div className="relative hidden md:block">
          <ul
            ref={listRef}
            className="relative flex items-center gap-1 px-1 rounded-full bg-white/5 border border-white/10"
          >
            {/* Glow pill indicator */}
            <div
              className={clsx(
                "absolute top-1 bottom-1 rounded-full bg-white/10 shadow-[0_0_20px_rgba(124,58,237,.35)] transition-[transform,width] duration-300 ease-out will-change-transform",
                pill.visible ? "opacity-100" : "opacity-0"
              )}
              style={{
                transform: `translateX(${pill.left}px)`,
                width: pill.width,
              }}
              aria-hidden="true"
            />
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    ref={(node) => (itemRefs.current[l.href] = node)}
                    className={clsx(
                      "relative z-10 px-3 py-1 rounded-full text-sm transition-colors",
                      isActive
                        ? "text-white"
                        : "text-zinc-300 hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <div className="hamburger" data-open={open} />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={clsx(
          "md:hidden overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur transition-[max-height,opacity] duration-300",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-outer py-2 flex flex-col">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    "block w-full px-2 py-3 rounded-lg text-sm transition",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
