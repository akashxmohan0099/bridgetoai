"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wrench, Crown } from "@phosphor-icons/react";

const offerings = [
  {
    icon: Wrench,
    title: "AI Setup & Integration",
    description: "We find the best AI tools for your needs — some built by us, some already on the market — then set them up, connect your systems, and get everything running within 1–2 weeks.",
  },
  {
    icon: Crown,
    title: "Custom AI Build",
    description: "A fully custom AI platform built from scratch — one centralised hub where your calls, messages, scheduling, reports and customer communications all live. Built around how your business operates.",
  },
  {
    icon: GraduationCap,
    title: "AI Training",
    description: "We identify the gaps in your business, then run a fully tailored session — implementing the right AI tools and training every staff member to use them confidently.",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-xl mb-14"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Three ways we help your business
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            Whether you need a quick start, a full integration, or a ground-up build.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {offerings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-surface border border-border p-7 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                <o.icon size={22} weight="duotone" className="text-primary" />
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-text leading-snug">{o.title}</h3>
              <p className="mt-2 text-[15px] text-text-muted leading-relaxed">{o.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
