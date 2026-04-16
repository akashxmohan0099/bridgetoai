"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  { q: "How much does it cost?", a: "The initial audit is completely free. After that, projects typically range from $2,000 to $25,000+ depending on scope \u2014 from a one-day training session to a full custom platform build. You\u2019ll get exact fixed pricing in your proposal before committing to anything." },
  { q: "Will it disrupt my team?", a: "No. We work alongside your team and implement around your schedule. Most setups are done within 1\u20132 weeks with zero downtime." },
  { q: "Do we need technical knowledge?", a: "Not at all. We handle everything technical and train every staff member until they\u2019re confident. Plain English, always." },
  { q: "What if AI isn\u2019t right for us?", a: "That\u2019s what the free audit is for. We\u2019ll tell you honestly. If it\u2019s not a fit, you\u2019ll know before spending a cent." },
  { q: "How long until we see results?", a: "Most clients see time savings within the first week after go-live. Measurable cost savings typically follow within 30 days." },
  { q: "Do you work with small businesses?", a: "That\u2019s exactly who we\u2019re built for. 97% of Australian businesses are small to medium \u2014 AI is no longer just for the big end of town." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="pt-20 pb-10">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="relative rounded-2xl border border-border bg-bg p-8 sm:p-12 lg:p-14 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
            {/* Left — heading */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <div className="mb-4">
                <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                  <span className="h-[2px] w-5 bg-accent rounded-full" />
                  FAQ
                </span>
              </div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
                Common questions
              </h2>
              <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
                Everything you need to know before getting started. Can&apos;t find what you&apos;re looking for?
              </p>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-light px-5 py-2.5 text-[14px] font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Right — accordion */}
            <div className="divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className="flex items-start gap-3">
                      <span className="text-[13px] font-bold text-primary mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] font-semibold text-text group-hover:text-primary transition-colors">{faq.q}</span>
                    </span>
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary transition-transform duration-200" style={{ transform: open === i ? "rotate(180deg)" : "none" }}>
                      {open === i ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden" role="region">
                        <p className="pb-5 pl-8 text-[15px] text-text-muted leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
