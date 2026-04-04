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
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-[720px] px-6 sm:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="mb-12">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">Common questions</h2>
        </motion.div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-4 py-5 text-left">
                <span className="text-[16px] font-semibold text-text">{faq.q}</span>
                <span className="shrink-0 text-primary">{open === i ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden" role="region">
                    <p className="pb-5 text-[15px] text-text-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
