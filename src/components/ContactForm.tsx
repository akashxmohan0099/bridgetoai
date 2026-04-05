"use client";

import { motion } from "framer-motion";
import { Check, Phone, EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] p-8 sm:p-12 lg:p-16 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — copy */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                Book your free audit
              </h2>
              <p className="mt-4 text-[15px] text-white/60 leading-relaxed max-w-md">
                We come to you, walk through your business, and show you exactly where AI can help.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: Check, text: "Completely free — no strings attached" },
                  { icon: Check, text: "On-site or video call" },
                  { icon: Check, text: "Clear proposal within 48 hours" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 shrink-0">
                      <item.icon size={14} weight="bold" className="text-white" />
                    </span>
                    <span className="text-[15px] text-white/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact details */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Phone, label: "Call us", value: "1300 XXX XXX" },
                  { icon: EnvelopeSimple, label: "Email", value: "hello@bridgetoai.com.au" },
                  { icon: MapPin, label: "Coverage", value: "Australia-wide" },
                  { icon: Clock, label: "Response", value: "Within 24 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon size={18} weight="duotone" className="text-white/40 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[12px] text-white/30">{item.label}</p>
                      <p className="text-[14px] text-white/70 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <form method="post" onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white p-7 sm:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-semibold text-[#111] mb-1.5">Name</label>
                    <input id="name" type="text" required autoComplete="name"
                      className="w-full rounded-lg border border-[#e5e5e5] bg-[#fafafa] px-4 py-3 text-[14px] text-[#111] placeholder:text-[#999] outline-none focus:border-[#0ea5e9] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-semibold text-[#111] mb-1.5">Phone</label>
                    <input id="phone" type="tel" required autoComplete="tel"
                      className="w-full rounded-lg border border-[#e5e5e5] bg-[#fafafa] px-4 py-3 text-[14px] text-[#111] placeholder:text-[#999] outline-none focus:border-[#0ea5e9] transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-[#111] mb-1.5">Email</label>
                  <input id="email" type="email" required autoComplete="email"
                    className="w-full rounded-lg border border-[#e5e5e5] bg-[#fafafa] px-4 py-3 text-[14px] text-[#111] placeholder:text-[#999] outline-none focus:border-[#0ea5e9] transition-colors" />
                </div>
                <div>
                  <label htmlFor="business" className="block text-[13px] font-semibold text-[#111] mb-1.5">Business name</label>
                  <input id="business" type="text" autoComplete="organization"
                    className="w-full rounded-lg border border-[#e5e5e5] bg-[#fafafa] px-4 py-3 text-[14px] text-[#111] placeholder:text-[#999] outline-none focus:border-[#0ea5e9] transition-colors" />
                </div>
                <div>
                  <label htmlFor="about" className="block text-[13px] font-semibold text-[#111] mb-1.5">
                    How can we help? <span className="font-normal text-[#999]">(optional)</span>
                  </label>
                  <textarea id="about" rows={3}
                    className="w-full rounded-lg border border-[#e5e5e5] bg-[#fafafa] px-4 py-3 text-[14px] text-[#111] placeholder:text-[#999] outline-none focus:border-[#0ea5e9] transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-[#0ea5e9] py-3.5 text-[15px] font-semibold text-white hover:bg-[#0284c7] transition-colors">
                  Get my free audit
                </button>
                <p className="text-[12px] text-[#999] text-center">No spam, no sales pitch. Just a straight conversation about your business.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
