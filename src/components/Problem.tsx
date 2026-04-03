"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section id="problem" className="py-28">
      <div className="mx-auto max-w-[800px] px-8 sm:px-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] uppercase tracking-[0.2em] text-text-muted mb-5"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-text mr-2 align-middle" />
          About Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text"
        >
          A consulting partner dedicated to building smarter and more adaptive businesses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-[15px] text-text-muted leading-relaxed max-w-lg mx-auto"
        >
          You don&apos;t need to understand AI. You just need someone who does — and who understands your business. We handle product selection, implementation, and training.
        </motion.p>
      </div>
    </section>
  );
}
