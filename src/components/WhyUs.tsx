"use client";

import { motion } from "framer-motion";

const reasons = [
  "Tailored to your business",
  "Live in 1–2 weeks",
  "Plain English always",
  "Ongoing support",
  "We come to you",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <span className="text-[15px] font-bold text-text">Why us</span>
          {reasons.map((r, i) => (
            <span key={i} className="flex items-center gap-2 text-[15px] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              {r}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
