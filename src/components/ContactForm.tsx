"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
              Book your free audit
            </h2>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed max-w-md">
              We come to you, walk through your business, and show you exactly where AI can help.
            </p>
            <div className="mt-10 space-y-5">
              {[
                "Completely free — no strings attached",
                "On-site or video call — your choice",
                "Clear proposal within 48 hours",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent shrink-0">
                    <Check size={14} weight="bold" className="text-text" />
                  </span>
                  <span className="text-[15px] text-text">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-surface border border-border p-8 space-y-5">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
                { id: "phone", label: "Phone", type: "tel", placeholder: "04XX XXX XXX" },
                { id: "business", label: "Business name", type: "text", placeholder: "Your business" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-[14px] font-semibold text-text mb-2">{f.label}</label>
                  <input
                    id={f.id} type={f.type} placeholder={f.placeholder}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-[15px] text-text placeholder:text-text-light outline-none focus:border-text transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="about" className="block text-[14px] font-semibold text-text mb-2">Tell us about your business (optional)</label>
                <textarea
                  id="about"
                  rows={3}
                  placeholder="What does your business do? What are you hoping AI can help with?"
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-[15px] text-text placeholder:text-text-light outline-none focus:border-text transition-colors resize-none"
                />
              </div>
              <button type="submit" className="w-full rounded-lg bg-text py-3.5 text-[15px] font-semibold text-white hover:bg-text/85 transition-colors mt-2">
                Get my free audit
              </button>
              <p className="text-[13px] text-text-muted mt-3">We&apos;ll get back to you within 24 hours.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
