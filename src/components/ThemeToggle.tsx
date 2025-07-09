'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('theme-dark'));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = isDark ? 'theme-light' : 'theme-dark';

    root.classList.remove('theme-dark', 'theme-light');
    root.classList.add(nextTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 bg-white/10 text-white border border-white/20 backdrop-blur px-3 py-2 rounded-full hover:bg-white/20 transition-all z-50"
      aria-label="Toggle Theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
