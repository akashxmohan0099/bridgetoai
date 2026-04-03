"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "$0", label: "Cost to find out exactly where AI fits in your business" },
  { number: "87%", label: "Of businesses using AI report cost and time savings" },
  { number: "40%", label: "Of small businesses saw revenue grow after implementing AI" },
  { number: "97%", label: "Of Australian businesses are small to medium — AI is no longer just for the big end of town" },
];

export default function Stats() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl bg-white border border-border p-6"
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="mt-3 text-[13px] text-muted leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-muted/50">
          Sources: CommBank, Intuit QuickBooks, ABS, BizCover 2025
        </p>
      </div>
    </section>
  );
}
