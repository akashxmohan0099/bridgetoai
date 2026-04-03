"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "What we offer", href: "#offerings" },
  { label: "Service areas", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-[16px] font-bold text-text">Bridge To AI</a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[14px] text-text-muted hover:text-text transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="rounded-lg bg-text px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-text/85 transition-colors">
              Book free audit
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-text" aria-label="Menu">
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 pb-5 pt-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[14px] text-text-muted">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-text py-3 text-center text-[15px] font-semibold text-white">
            Book free audit
          </a>
        </div>
      )}
    </nav>
  );
}
