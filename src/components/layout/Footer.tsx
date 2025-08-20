// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-12">
      <div className="container-outer text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Cybernetix.</span>
        <span>“We don’t chase. We cultivate.”</span>
      </div>
    </footer>
  );
}
