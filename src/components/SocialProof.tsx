"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Buildings, Star, Clock, ShieldCheck } from "@phosphor-icons/react";
import { useRef, useEffect } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: Buildings, value: 50, suffix: "+", label: "Businesses audited" },
  { icon: Star, displayValue: "4.9/5", label: "Client satisfaction" },
  { icon: Clock, displayValue: "1–2 wks", label: "Average go-live" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Data stays yours" },
];

export default function SocialProof() {
  return (
    <section className="relative py-10 bg-primary-light border-b border-primary/[0.08]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
                <stat.icon size={20} weight="duotone" className="text-primary" />
              </div>
              <div>
                <p className="text-[18px] font-bold text-text leading-tight">
                  {stat.value !== undefined ? (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.displayValue
                  )}
                </p>
                <p className="text-[13px] text-text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
