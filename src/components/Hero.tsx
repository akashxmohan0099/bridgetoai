"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex flex-col bg-[#0F172A] overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4F46E5]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Human hand — left side */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{ width: "28vw", maxWidth: "380px" }}
      >
        <Image src="/human-hand-v2.webp" alt="Human hand reaching toward AI" width={987} height={1054} className="w-full h-auto" priority />
      </motion.div>

      {/* Robot hand — right side */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{ width: "28vw", maxWidth: "380px" }}
      >
        <Image src="/robot-hand-v2.webp" alt="Robot hand reaching toward human" width={934} height={1080} className="w-full h-auto" priority />
      </motion.div>

      {/* Content — centered */}
      <div className="flex-1 flex flex-col justify-between mx-auto w-full max-w-[700px] px-5 sm:px-10 relative z-10">
        <div className="pt-20 sm:pt-32 lg:pt-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-[#a5b4fc]/50">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              AI for Australian business
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,6.5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white"
          >
            We&apos;ll show you exactly where AI fits in your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-[17px] text-[#c7d2fe]/60 leading-relaxed max-w-lg mx-auto"
          >
            We find where AI saves you time and money, set it up, and train your team. From audit to live in 1–2 weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row flex-wrap justify-center gap-3"
          >
            <a href="#contact" className="rounded-xl bg-accent px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25 text-center">
              Book your free audit
            </a>
            <a href="#offerings" className="rounded-xl border border-white/15 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/5 transition-colors text-center">
              See what we do
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-4 text-[14px] text-[#a5b4fc]/40"
          >
            Free audit &middot; No obligation &middot; No jargon
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-white/8 mt-auto"
        >
          <div className="py-6 flex flex-wrap justify-center gap-x-6 gap-y-2.5 sm:gap-x-12 sm:gap-y-3">
            {[
              { label: "Cost to start", value: "$0" },
              { label: "Audit to live", value: "1–2 weeks" },
              { label: "Coverage", value: "Australia-wide" },
            ].map((s, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                <span className="text-[16px] font-bold text-white">{s.value}</span>
                <span className="text-[13px] text-[#a5b4fc]/40">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
