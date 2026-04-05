"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wrench, Crown, ArrowRight } from "@phosphor-icons/react";

const offerings = [
  {
    icon: Wrench,
    title: "AI Setup & Integration",
    tagline: "Up and running in 1–2 weeks",
    highlights: ["Tool selection & vetting", "Full system integration", "Data migration & testing"],
    gradient: "from-[#0ea5e9] to-[#0284c7]",
  },
  {
    icon: Crown,
    title: "Custom AI Build",
    tagline: "One platform, built around you",
    highlights: ["Built to your workflows", "Centralised dashboard", "Ongoing support & updates"],
    gradient: "from-[#0ea5e9] to-[#0284c7]",
  },
  {
    icon: GraduationCap,
    title: "AI Training",
    tagline: "Confidence across the whole team",
    highlights: ["Tailored to each role", "Hands-on, practical sessions", "Plain English, no jargon"],
    gradient: "from-[#0ea5e9] to-[#0284c7]",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-28">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Three ways we help your business
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            Whether you need a quick start, a full integration, or a ground-up build.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl bg-gradient-to-br ${o.gradient} p-7 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <o.icon size={24} weight="duotone" className="text-white" />
              </div>

              <h3 className="mt-5 text-[18px] font-bold text-white leading-snug">{o.title}</h3>
              <p className="mt-1 text-[14px] text-white/60">{o.tagline}</p>

              <ul className="mt-5 space-y-2.5">
                {o.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-[14px] text-white/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/80 hover:text-white transition-colors">
                Get started <ArrowRight size={14} weight="bold" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
