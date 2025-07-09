import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white py-6 px-4 mt-12">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <div className="flex justify-center gap-6">
          <Link href="https://github.com/CybernetixDotDev" target="_blank" className="hover:text-cyan-300 transition">
            GitHub
          </Link>
          <Link href="/roadmap" className="hover:text-cyan-300 transition">
            Roadmap
          </Link>
          <Link href="/vision" className="hover:text-cyan-300 transition">
            Vision
          </Link>
        </div>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Cybernetix. All rights reserved.</p>
      </div>
    </footer>
  );
}
