"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, HandCoins, MapPin } from "@phosphor-icons/react";

const promises = [
  { icon: HandCoins, value: "$0", label: "Cost to audit" },
  { icon: Clock, value: "1–2 weeks", label: "Audit to live" },
  { icon: MapPin, value: "Australia-wide", label: "Wherever you are" },
  { icon: ShieldCheck, value: "Your data", label: "Stays yours" },
];

export default function SocialProof() {
  return (
    <section className="relative py-8 sm:py-10 bg-primary-light border-b border-primary/[0.08]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {promises.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
                <item.icon size={20} weight="duotone" className="text-primary" />
              </div>
              <div>
                <p className="text-[16px] sm:text-[18px] font-bold text-text leading-tight">{item.value}</p>
                <p className="text-[12px] sm:text-[13px] text-text-muted">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
