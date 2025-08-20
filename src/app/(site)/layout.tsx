// src/app/(site)/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cybernetix — The Garden",
  description:
    "We don’t chase. We cultivate. A garden for visionaries building sacred technology for a kinder future.",
  metadataBase: new URL("https://cybernetix.dev"),
  openGraph: {
    title: "Cybernetix — The Garden",
    description:
      "We don’t chase. We cultivate. A garden for visionaries building sacred technology for a kinder future.",
    url: "https://cybernetix.dev",
    siteName: "Cybernetix",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
