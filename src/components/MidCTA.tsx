"use client";

import { motion } from "framer-motion";

export default function MidCTA() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-text p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6"
        >
          <div>
            <p className="text-[17px] sm:text-[18px] font-bold text-white">Not sure where to start?</p>
            <p className="mt-1 text-[14px] sm:text-[15px] text-white/65">Book an audit — free or fixed-fee depending on scope. We&apos;ll tell you exactly what&apos;s worth doing.</p>
          </div>
          <a href="#contact" className="w-full sm:w-auto rounded-lg bg-white px-6 py-3 text-center text-[15px] font-semibold text-text hover:bg-white/90 transition-colors shrink-0">
            Book your audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
