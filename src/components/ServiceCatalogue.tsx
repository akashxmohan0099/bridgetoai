"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Envelope, Phone, BookOpen, Microphone, TreeStructure, ChartLineUp, ArrowRight,
} from "@phosphor-icons/react";
import { serviceAreas } from "@/data/services";

const icons = [Envelope, Phone, BookOpen, Microphone, TreeStructure, ChartLineUp];

export default function ServiceCatalogue() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="max-w-xl mb-14">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">Our service areas</h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">Six areas where we implement AI. Each includes product selection, setup, and hands-on training.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceAreas.map((area, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-surface border border-border p-7 transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light">
                  <Icon size={22} weight="duotone" className="text-primary" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-text leading-snug">{area.title}</h3>
                <p className="mt-1.5 text-[15px] text-text-muted">{area.tagline}</p>

                <ul className="mt-5 pt-5 border-t border-border space-y-2.5">
                  {area.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-[7px] shrink-0" />
                      <span className="text-[14px] text-text-muted leading-snug">{f.name}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${area.slug}`}
                  className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Learn more <ArrowRight size={14} weight="bold" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
