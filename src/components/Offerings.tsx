"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wrench, Crown, CheckCircle } from "@phosphor-icons/react";

const offerings = [
  {
    icon: Wrench,
    number: "01",
    title: "AI Setup & Integration",
    tagline: "We pick the right tools, plug them into your systems, and get you live — fast.",
    highlights: ["Tool selection & vetting", "Full system integration", "Data migration & testing"],
  },
  {
    icon: Crown,
    number: "02",
    title: "Custom AI Build",
    tagline: "When off-the-shelf won't cut it, we build a platform shaped around your business.",
    highlights: ["Built to your workflows", "Centralised dashboard", "Ongoing support & updates"],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "AI Training",
    tagline: "Your whole team — from admin to leadership — confident with AI in days, not months.",
    highlights: ["Tailored to each role", "Hands-on, practical sessions", "Plain English, no jargon"],
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              What we do
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Three ways we help your business
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            Whether you need a quick start, a full integration, or a ground-up enterprise build — we work with owner-operators, mid-market organisations, and established enterprises across trades, healthcare, legal, real estate, retail, financial services, and professional services Australia-wide.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-border bg-bg p-6 sm:p-8 transition-shadow duration-300 hover:shadow-xl hover:border-primary/15 flex flex-col overflow-hidden"
            >
              {/* Brand accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
              {/* Large watermark number */}
              <span className="absolute -top-4 -right-2 text-[120px] font-black leading-none select-none pointer-events-none text-primary opacity-[0.04]">
                {o.number}
              </span>

              {/* Icon + number row */}
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light"
                >
                  <o.icon size={24} weight="duotone" className="text-primary" />
                </motion.div>
                <span className="text-[13px] font-bold tracking-wider text-primary">
                  {o.number}
                </span>
              </div>

              <h3 className="mt-5 text-[19px] font-bold text-text leading-snug relative z-10">{o.title}</h3>
              <p className="mt-2 text-[14px] text-text-muted leading-relaxed relative z-10">{o.tagline}</p>

              <div className="mt-5 pt-5 border-t border-border space-y-3 relative z-10">
                {o.highlights.map((h, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle size={16} weight="fill" className="text-primary shrink-0" />
                    <span className="text-[13px] font-medium text-text">{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
