"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-2xl border-b border-primary/[0.08]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 text-[16px] font-bold text-text">
            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
            Bridge To AI
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="hidden sm:inline-flex rounded-xl bg-accent px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book an audit
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-text hover:bg-primary-light transition-colors"
            >
              {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-primary/[0.08] bg-surface/95 backdrop-blur-2xl"
          >
            <div className="mx-auto max-w-[1200px] px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-text hover:bg-primary-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-[15px] font-semibold text-white hover:bg-accent-dark transition-colors"
              >
                Book an audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
