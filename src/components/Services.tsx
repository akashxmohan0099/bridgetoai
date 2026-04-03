"use client";

import { motion } from "framer-motion";
import { Crown, GraduationCap, Wrench } from "@phosphor-icons/react";

const offerings = [
  { icon: GraduationCap, title: "AI Training Day", desc: "One day. Fully tailored. Real results." },
  { icon: Wrench, title: "AI Setup & Integration", desc: "Best tools, running in 1–2 weeks." },
  { icon: Crown, title: "Custom AI Build", desc: "One hub for everything. Built for you.", highlight: true },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-[1280px] px-8 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[13px] uppercase tracking-[0.18em] text-text-muted mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-text mr-2 align-middle" />
            How We Deliver
          </p>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Three ways we help your business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {offerings.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-7 flex items-center gap-5 cursor-default transition-all duration-300 ${
                o.highlight
                  ? "bg-text text-white"
                  : "bg-surface border border-border hover:border-accent"
              }`}
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                o.highlight ? "bg-accent" : "bg-card"
              }`}>
                <o.icon size={22} weight="bold" className={o.highlight ? "text-text" : "text-text"} />
              </div>
              <div>
                <h3 className={`text-[15px] font-bold ${o.highlight ? "text-white" : "text-text"}`}>
                  {o.title}
                </h3>
                <p className={`text-[13px] mt-0.5 ${o.highlight ? "text-white/50" : "text-text-muted"}`}>
                  {o.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
