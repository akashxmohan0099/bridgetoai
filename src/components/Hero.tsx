"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex flex-col bg-gradient-to-br from-[#38bdf8] via-[#0ea5e9] to-[#0284c7] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
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
        className="absolute top-1/2 -translate-y-[40%] pointer-events-none hidden lg:block"
        style={{ left: "5%", width: "28vw", maxWidth: "380px" }}
      >
        <Image src="/human-hand-v2.png" alt="Human hand reaching toward AI" width={987} height={1054} className="w-full h-auto -rotate-[15deg] origin-center" priority />
      </motion.div>

      {/* Robot hand — right side */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-1/2 -translate-y-[40%] pointer-events-none hidden lg:block"
        style={{ right: "5%", width: "28vw", maxWidth: "380px" }}
      >
        <Image src="/robot-hand-v2.png" alt="Robot hand reaching toward human" width={934} height={1080} className="w-full h-auto rotate-[15deg] origin-center" priority />
      </motion.div>

      {/* Content — centered */}
      <div className="flex-1 flex flex-col justify-between mx-auto w-full max-w-[700px] px-6 sm:px-10 relative z-10">
        <div className="pt-32 sm:pt-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-white/50">
              AI for Australian business
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.4rem,5.5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.035em] text-white"
          >
            We&apos;ll show you exactly where AI fits in your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-[17px] text-white/65 leading-relaxed max-w-lg mx-auto"
          >
            We find where AI saves you time and money, set it up, and train your team. From audit to live in 1–2 weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <a href="#contact" className="rounded-lg bg-white px-6 py-3.5 text-[15px] font-semibold text-primary hover:bg-white/90 transition-colors">
              Book your free audit
            </a>
            <a href="#offerings" className="rounded-lg border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition-colors">
              See what we do
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-4 text-[14px] text-white/60"
          >
            Free audit &middot; No obligation &middot; No jargon
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-white/10 mt-auto"
        >
          <div className="py-7 flex flex-wrap justify-center gap-x-12 gap-y-3">
            {[
              { label: "Cost to start", value: "$0" },
              { label: "Audit to live", value: "1–2 weeks" },
              { label: "Coverage", value: "Australia-wide" },
            ].map((s, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                <span className="text-[16px] font-bold text-white">{s.value}</span>
                <span className="text-[13px] text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
