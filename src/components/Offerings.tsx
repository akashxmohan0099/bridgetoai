"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Wrench, Crown, ArrowRight } from "@phosphor-icons/react";

const offerings = [
  {
    icon: Wrench,
    number: "01",
    title: "AI Setup & Integration",
    tagline: "Up and running in 1–2 weeks",
    description: "We find the best AI tools for your needs — some built by us, some already on the market — then set them up, connect your systems, and get everything running.",
    highlights: ["Tool selection & vetting", "Full system integration", "Data migration & testing"],
  },
  {
    icon: Crown,
    number: "02",
    title: "Custom AI Build",
    tagline: "One platform, built around you",
    description: "A fully custom AI platform built from scratch — one centralised hub where your calls, messages, scheduling, reports and customer communications all live.",
    highlights: ["Built to your workflows", "Centralised dashboard", "Ongoing support & updates"],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "AI Training",
    tagline: "Confidence across the whole team",
    description: "We identify the gaps in your business, then run a fully tailored session — implementing the right AI tools and training every staff member to use them confidently.",
    highlights: ["Tailored to each role", "Hands-on, practical sessions", "Plain English, no jargon"],
  },
];

export default function Offerings() {
  const [active, setActive] = useState(0);

  return (
    <section id="offerings" className="py-28">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
              What we offer
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Three ways we help your business
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed max-w-md">
            Whether you need a quick start, a full integration, or a ground-up build.
          </p>
        </motion.div>

        {/* Desktop: interactive layout */}
        <div className="hidden lg:grid lg:grid-cols-[340px,1fr] gap-6">
          {/* Tabs */}
          <div className="flex flex-col gap-2">
            {offerings.map((o, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => setActive(i)}
                className={`group text-left rounded-xl px-5 py-5 transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-surface border border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                    active === i ? "bg-white/15" : "bg-primary-light"
                  }`}>
                    <o.icon size={22} weight="duotone" className={active === i ? "text-white" : "text-primary"} />
                  </div>
                  <div>
                    <span className={`text-[11px] font-bold tracking-wide ${
                      active === i ? "text-white/40" : "text-text-light"
                    }`}>
                      {o.number}
                    </span>
                    <h3 className={`text-[15px] font-bold leading-snug ${
                      active === i ? "text-white" : "text-text group-hover:text-primary"
                    } transition-colors`}>
                      {o.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-surface border border-border p-10 min-h-[300px] flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

              <span className="text-[64px] font-black text-primary/[0.07] leading-none mb-3">
                {offerings[active].number}
              </span>
              <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-text tracking-[-0.01em]">
                {offerings[active].title}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-primary">{offerings[active].tagline}</p>
              <p className="mt-4 text-[16px] text-text-muted leading-relaxed max-w-md">
                {offerings[active].description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {offerings[active].highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3.5 py-1.5 text-[13px] font-medium text-primary">
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a href="#contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-primary-dark transition-colors">
                  Get started <ArrowRight size={14} weight="bold" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden grid sm:grid-cols-3 gap-4">
          {offerings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-2xl bg-surface border border-border p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                <o.icon size={22} weight="duotone" className="text-primary" />
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-text leading-snug">{o.title}</h3>
              <p className="mt-1 text-[14px] font-medium text-primary">{o.tagline}</p>
              <p className="mt-2 text-[15px] text-text-muted leading-relaxed">{o.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
