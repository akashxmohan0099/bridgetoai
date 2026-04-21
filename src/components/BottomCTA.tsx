"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function BottomCTA() {
  return (
    <section id="cta" className="pb-4 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[1.5rem] bg-text p-8 sm:p-12 lg:p-20 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <h2 className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
            Ready to find out where AI
            <br className="hidden sm:block" />
            {" "}fits in your business?
          </h2>
          <p className="mt-5 text-[14px] sm:text-[15px] text-white/40 max-w-md mx-auto leading-relaxed">
            Book an audit today. We come to you, analyse your business, and show you exactly where AI can help. Free or fixed-fee depending on scope — let&apos;s discuss.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-text hover:bg-accent/90 transition-colors"
            >
              Get Started
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-text">
                <ArrowUpRight size={14} weight="bold" className="text-accent group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
          </div>
          <p className="mt-6 text-[11px] text-white/20 uppercase tracking-[0.15em]">
            No obligation &middot; Scoped to your business &middot; Australia-wide
          </p>
        </div>
      </motion.div>
    </section>
  );
}
