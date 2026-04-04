"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass, FileText, Rocket, Handshake } from "@phosphor-icons/react";

const steps = [
  { icon: MagnifyingGlass, number: "1", title: "Free Audit", description: "We come to you, assess your business, and find where AI makes a real difference.", time: "Day 1" },
  { icon: FileText, number: "2", title: "Clear Proposal", description: "You get a straightforward plan — what we'll do, how long, and what it'll save you.", time: "Day 3" },
  { icon: Rocket, number: "3", title: "We Implement", description: "We set up alongside your team. Fast, clean, no disruption to your day.", time: "Week 1–2" },
  { icon: Handshake, number: "4", title: "Ongoing Support", description: "We monitor, optimise, and keep improving as your business grows.", time: "Ongoing" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">How it works</h2>
          <p className="mt-3 text-[15px] text-white/55 leading-relaxed">Four steps from first conversation to running AI.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-white/15" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="text-center relative"
              >
                {/* Step circle */}
                <div className="relative z-10 mx-auto flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
                  <step.icon size={28} weight="duotone" className="text-white" />
                  <span className="text-[11px] font-bold text-white/50 mt-1">{step.time}</span>
                </div>

                <h3 className="text-[17px] font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-[14px] text-white/50 leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-primary hover:bg-white/90 transition-colors inline-block">
            Book your free audit
          </a>
          <p className="mt-3 text-[13px] text-white/35">Free · No obligation · We come to you</p>
        </motion.div>
      </div>
    </section>
  );
}
