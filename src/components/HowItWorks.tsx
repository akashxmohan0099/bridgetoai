"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "1", title: "Free Audit", description: "We come to you. No cost, no commitment." },
  { number: "2", title: "Clear Proposal", description: "What we\u2019ll do, what it costs, what you\u2019ll save." },
  { number: "3", title: "We Implement", description: "Set up alongside your team in 1\u20132 weeks." },
  { number: "4", title: "Ongoing Support", description: "We stick around and keep improving." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-14"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            How it works
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            Four steps. No jargon, no disruption.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Connecting line between step circles on desktop */}
          <div className="hidden lg:block absolute top-[54px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-border z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="relative rounded-2xl bg-surface border border-border p-7 transition-all duration-300 hover:shadow-md hover:border-text/12"
            >
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-text text-[14px] font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-5 text-[16px] font-bold text-text">{step.title}</h3>
              <p className="mt-2 text-[15px] text-text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
