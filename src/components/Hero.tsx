"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col bg-gradient-to-br from-[#7eaec4] via-[#5a94ad] to-[#3b7a96]">
      <div className="flex-1 flex flex-col justify-between mx-auto w-full max-w-[1200px] px-6 sm:px-10">
        <div className="pt-20 sm:pt-28 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            >
              We&apos;ll show you exactly where AI fits in your business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-[17px] text-white/75 leading-relaxed max-w-lg"
            >
              We find where AI saves you time and money, set it up, and train your team. From audit to live in 1–2 weeks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="rounded-lg bg-white px-6 py-3.5 text-[15px] font-semibold text-[#1a1a1a] hover:bg-white/90 transition-colors">
                Book your free audit
              </a>
              <span className="text-[15px] text-white/55">$0 — no obligation</span>
            </motion.div>
          </div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 shadow-lg">
              {/* Header bar */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-3 w-3 rounded-full bg-white/30" />
                <div className="h-3 w-3 rounded-full bg-white/20" />
                <div className="h-3 w-3 rounded-full bg-white/20" />
                <div className="ml-auto h-2.5 w-24 rounded-full bg-white/15" />
              </div>
              {/* Stat boxes */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="rounded-lg bg-white/8 p-3">
                  <div className="h-2 w-10 rounded bg-white/20 mb-2" />
                  <div className="h-5 w-14 rounded bg-white/30" />
                </div>
                <div className="rounded-lg bg-white/8 p-3">
                  <div className="h-2 w-10 rounded bg-white/20 mb-2" />
                  <div className="h-5 w-14 rounded bg-white/30" />
                </div>
                <div className="rounded-lg bg-white/8 p-3">
                  <div className="h-2 w-10 rounded bg-white/20 mb-2" />
                  <div className="h-5 w-14 rounded bg-[#c8e040]/50" />
                </div>
              </div>
              {/* Data rows */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white/25 shrink-0" />
                  <div className="h-3 flex-1 rounded-full bg-white/12" />
                  <div className="h-3 w-16 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white/25 shrink-0" />
                  <div className="h-3 flex-1 rounded-full bg-white/12" />
                  <div className="h-3 w-20 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#c8e040]/40 shrink-0" />
                  <div className="h-3 flex-1 rounded-full bg-[#c8e040]/15" />
                  <div className="h-3 w-24 rounded-full bg-[#c8e040]/35" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white/25 shrink-0" />
                  <div className="h-3 flex-1 rounded-full bg-white/12" />
                  <div className="h-3 w-14 rounded-full bg-white/20" />
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2 w-20 rounded bg-white/20" />
                  <div className="h-2 w-8 rounded bg-white/25" />
                </div>
                <div className="h-2.5 w-full rounded-full bg-white/10">
                  <div className="h-2.5 w-[72%] rounded-full bg-[#c8e040]/60" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 mt-auto"
        >
          <div className="py-8 grid grid-cols-3 gap-6 bg-white/5 rounded-t-xl -mx-2 px-4 sm:-mx-4 sm:px-6">
            {[
              { label: "Cost to start", value: "$0" },
              { label: "Audit to live", value: "1–2 weeks" },
              { label: "Coverage", value: "Australia-wide" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-[13px] text-white/50 mb-1">{s.label}</p>
                <p className="text-[24px] sm:text-[28px] font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
