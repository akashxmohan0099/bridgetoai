"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass, FileText, Rocket, Handshake } from "@phosphor-icons/react";

const steps = [
  { icon: MagnifyingGlass, number: "01", title: "Free Audit", description: "We come to you, assess your business, and find where AI makes a real difference.", time: "Day 1" },
  { icon: FileText, number: "02", title: "Clear Proposal", description: "You get a straightforward plan — what we'll do, how long, and what it'll save you.", time: "Day 3" },
  { icon: Rocket, number: "03", title: "We Implement", description: "We set up alongside your team. Fast, clean, no disruption to your day.", time: "Week 1–2" },
  { icon: Handshake, number: "04", title: "Ongoing Support", description: "We monitor, optimise, and keep improving as your business grows.", time: "Ongoing" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="text-center max-w-xl mx-auto mb-14">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              Our process
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">How it works</h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">Four steps from first conversation to running AI.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-bg border-2 border-primary/15 shadow-sm"
                >
                  <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-light">
                    <step.icon size={32} weight="duotone" className="text-primary" />
                  </div>
                </motion.div>

                {/* Step number */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="mt-5 text-[12px] font-bold tracking-widest text-primary"
                >
                  {step.number}
                </motion.span>

                {/* Title */}
                <h3 className="mt-2 text-[18px] font-bold text-text">{step.title}</h3>

                {/* Description */}
                <p className="mt-2 text-[14px] text-text-muted leading-relaxed max-w-[240px]">{step.description}</p>

                {/* Time badge */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 text-[12px] font-bold text-primary bg-primary-light border border-primary/10 rounded-full px-4 py-1.5"
                >
                  {step.time}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
