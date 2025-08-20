// src/components/forms/contactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // super-simple: open mail client; also flip a local "sent" state
    setLoading(true);
    const subject = encodeURIComponent(`Contact — ${name || "Cybernetix Visitor"}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:hello@cybernetix.dev?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="card p-6">
        <p className="text-sm text-zinc-300">
          Thanks for reaching out — we’ll be in touch. ✨
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
          rows={5}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="How can we help?"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded-md bg-white/15 hover:bg-white/20 border border-white/10 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
