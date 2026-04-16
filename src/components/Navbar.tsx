"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-2xl border-b border-primary/[0.08]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[16px] font-bold text-text">
            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
            Bridge To AI
          </Link>
          <a href="/#contact" className="rounded-xl bg-accent px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-accent-dark transition-colors">
            Book free audit
          </a>
        </div>
      </div>
    </nav>
  );
}
