// src/components/forms/newsletterForm.tsx
"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your email service; for now just simulate success
    console.log("Subscribe:", email);
    setOk(true);
  };

  if (ok) {
    return (
      <div className="card p-4 text-sm text-zinc-300">
        You’re in! We’ll only send meaningful updates. 🌱
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-white/15 hover:bg-white/20 border border-white/10"
      >
        Join
      </button>
    </form>
  );
}
