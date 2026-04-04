"use client";

import { motion } from "framer-motion";

const industries = [
  "Trades & Construction", "Healthcare & Medical", "Professional Services",
  "Legal", "Real Estate", "Retail & Hospitality", "Finance & Accounting",
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-10"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Who we work with
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            We help Australian businesses from 5 to 200 staff across these industries.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {industries.map((industry, i) => (
            <span key={i} className="rounded-full bg-surface border border-primary/10 px-5 py-2.5 text-[14px] text-text font-medium">
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
