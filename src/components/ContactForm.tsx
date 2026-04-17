"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, EnvelopeSimple, MapPin, Clock, PaperPlaneTilt, SpinnerGap, CheckCircle, Plus, Minus } from "@phosphor-icons/react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-bg px-4 py-3.5 text-[14px] text-text placeholder:text-text-light outline-none transition-all duration-300 focus-visible:border-primary focus-visible:bg-surface focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:shadow-sm hover:border-primary/30";

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <div className="rounded-2xl bg-[#0F172A] p-6 sm:p-12 lg:p-16 overflow-hidden relative">
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7C3AED]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left — copy */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}>
              <div className="mb-4">
                <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-[#a5b4fc]/50">
                  <span className="h-[2px] w-5 bg-accent rounded-full" />
                  Get started
                </span>
              </div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                Book your free audit
              </h2>
              <p className="mt-4 text-[15px] text-[#c7d2fe]/50 leading-relaxed max-w-md">
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
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 shrink-0">
                      <item.icon size={14} weight="bold" className="text-accent" />
                    </span>
                    <span className="text-[15px] text-white/80">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: EnvelopeSimple, label: "Email", value: "hello@bridgetoai.com.au" },
                  { icon: MapPin, label: "Coverage", value: "Australia-wide" },
                  { icon: Clock, label: "Response", value: "Within 24 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon size={18} weight="duotone" className="text-[#a5b4fc]/40 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[12px] text-[#a5b4fc]/40">{item.label}</p>
                      <p className="text-[14px] text-white/60 font-medium">{item.value}</p>
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
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-surface p-10 sm:p-12 text-center shadow-xl shadow-black/10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={56} weight="duotone" className="text-primary mx-auto" />
                  </motion.div>
                  <h3 className="mt-5 text-[20px] font-bold text-text">We&apos;ve got your details!</h3>
                  <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
                    Our team will be in touch within 24 hours to schedule your free audit.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative rounded-2xl bg-surface p-6 sm:p-8 shadow-xl shadow-black/10 space-y-5">
                  {/* Honeypot — real users won't see or fill this */}
                  <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden [clip:rect(0,0,0,0)]">
                    <label htmlFor="website">Website (leave blank)</label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <p className="text-[18px] font-bold text-text">Get started in 30 seconds</p>
                    <p className="text-[13px] text-text-light mt-0.5">Three fields. That&apos;s it.</p>
                  </div>

                  {error && (
                    <p className="text-[13px] text-red-600 bg-red-50 rounded-lg px-4 py-2.5">{error}</p>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-[13px] font-semibold text-text mb-1.5">Name or business name</label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="John Smith or Smith Plumbing"
                      className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-semibold text-text mb-1.5">Phone</label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="04XX XXX XXX"
                      className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-semibold text-text mb-1.5">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="john@company.com.au"
                      className={inputClass} />
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => setShowMore(!showMore)}
                      className="flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      {showMore ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                      {showMore ? "Less info" : "Add more details"}
                    </button>

                    <AnimatePresence>
                      {showMore && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 space-y-4">
                            <div>
                              <label htmlFor="business" className="block text-[13px] font-semibold text-text mb-1.5">What does your business do?</label>
                              <input id="business" name="business" type="text" placeholder="e.g. Plumbing, Real estate, Dental clinic"
                                className={inputClass} />
                            </div>
                            <div>
                              <label htmlFor="message" className="block text-[13px] font-semibold text-text mb-1.5">Anything specific you want to improve?</label>
                              <textarea id="message" name="message" rows={3} placeholder="e.g. We're missing calls after hours, admin is eating up half our day..."
                                className={`${inputClass} resize-none`} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full rounded-xl bg-accent py-4 text-[15px] font-semibold text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <SpinnerGap size={20} className="animate-spin" />
                    ) : (
                      <>
                        Get my free audit
                        <PaperPlaneTilt size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[12px] text-text-light text-center">No spam, no sales pitch. Just a straight conversation about your business.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
