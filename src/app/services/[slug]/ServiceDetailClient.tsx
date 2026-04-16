"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowLeft, CheckCircle, Clock, ArrowRight } from "@phosphor-icons/react";
import { serviceAreas, type ServiceArea } from "@/data/services";

interface Props {
  service: ServiceArea;
  index: number;
  prev: ServiceArea | null;
  next: ServiceArea | null;
}

export default function ServiceDetailClient({ service, index, prev, next }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] pointer-events-none select-none hidden lg:block"
        >
          <span className="text-[clamp(16rem,28vw,22rem)] font-black leading-none text-primary/[0.04] tracking-tighter">
            {service.number}
          </span>
        </motion.div>

        <div className="relative w-full mx-auto max-w-[1200px] px-6 sm:px-10 pt-28 sm:pt-36 pb-20">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-primary transition-colors mb-10">
              <ArrowLeft size={14} weight="bold" /> All services
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-3 mb-5">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                Service {service.number} / {String(serviceAreas.length).padStart(2, "0")}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[clamp(2.4rem,5.5vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.035em] text-text">
              {service.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-[clamp(1.05rem,2vw,1.2rem)] text-text-muted leading-relaxed max-w-xl">
              {service.tagline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25">
                Book your free audit
              </Link>
              <div className="flex items-center gap-2.5 text-[14px] text-text-light">
                <Clock size={16} weight="bold" />
                <span>{service.timeline}</span>
              </div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 pt-8 border-t border-primary/[0.08] flex flex-wrap gap-x-12 gap-y-4">
            {[
              { label: "Features included", value: String(service.features.length) },
              { label: "Real-world examples", value: String(service.useCases.length) },
              { label: "Setup & training", value: "Included" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                <span className="text-[28px] font-bold text-text tracking-tight">{stat.value}</span>
                <span className="text-[13px] text-text-light">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features — Bento Grid */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-xl mx-auto mb-14">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                <span className="h-[2px] w-5 bg-accent rounded-full" />
                Features
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] text-text">
              What&apos;s included
            </h2>
            <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
              Everything you need — product selection, setup, and training.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: j * 0.06, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className={`relative overflow-hidden rounded-2xl bg-bg border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col ${
                  j === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
                <div className="flex items-center justify-between mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-[13px] font-bold text-primary">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-text leading-snug">{feature.name}</h3>
                <p className="mt-2 text-[15px] text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-7 sm:p-8 flex flex-col justify-center lg:col-span-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4F46E5]/15 rounded-full blur-[80px] pointer-events-none" />
              <h3 className="relative z-10 text-[18px] font-bold text-white">See how these work for your business</h3>
              <p className="relative z-10 mt-2 text-[15px] text-[#c7d2fe]/50 leading-relaxed">
                Book a free audit and we&apos;ll walk through exactly which features apply to you.
              </p>
              <Link href="/#contact" className="relative z-10 mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:text-white transition-colors">
                Book your free audit <ArrowRight size={14} weight="bold" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-world use cases */}
      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-xl mx-auto mb-14">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                <span className="h-[2px] w-5 bg-accent rounded-full" />
                Real-world examples
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] text-text">
              How this works in practice
            </h2>
            <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
              Common scenarios we solve for businesses like yours.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.useCases.map((uc, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: j * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="relative rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
                <div className="p-7 sm:p-8 flex-1">
                  <span className="text-[48px] font-black text-primary/[0.08] leading-none block mb-3">
                    {String(j + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-text-light mb-2 block">The scenario</span>
                  <p className="text-[15px] text-text leading-relaxed font-medium">{uc.scenario}</p>
                </div>

                <div className="px-7 sm:px-8 py-6 bg-primary/[0.03] border-t border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary/50 mb-1 block">What we set up</span>
                      <p className="text-[14px] text-text-muted leading-relaxed">{uc.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="relative rounded-2xl bg-[#0F172A] p-6 sm:p-10 lg:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4F46E5]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#7C3AED]/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-[#a5b4fc]/50">
                  <span className="h-[2px] w-5 bg-accent rounded-full" />
                  Delivery
                </span>
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-white mb-8 text-center">
                How we deliver {service.title.toLowerCase()}
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { step: "1", title: "We find the right tools", desc: "We assess your specific needs and recommend the best solution — whether it\u2019s an existing product or something we build." },
                  { step: "2", title: "We set it all up", desc: "Full configuration, system connections, data migration, and testing. We work alongside your team with zero disruption." },
                  { step: "3", title: "We train your team", desc: "Hands-on, role-specific training until every person is confident. Plain English, no jargon, no one left behind." },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-[16px] font-bold text-white mb-4">
                      {s.step}
                    </span>
                    <h3 className="text-[16px] font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-[14px] text-white/60 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <p className="text-[14px] text-white/50 flex items-center justify-center gap-2">
                  <Clock size={16} weight="bold" />
                  {service.timeline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg">
        <div className="mx-auto max-w-[720px] px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                <span className="h-[2px] w-5 bg-accent rounded-full" />
                FAQ
              </span>
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-text">
              Questions about {service.title.toLowerCase()}
            </h2>
          </motion.div>
          <div className="divide-y divide-border">
            {service.faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-[13px] font-bold text-primary mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] font-semibold text-text group-hover:text-primary transition-colors">{faq.q}</span>
                  </span>
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                    {openFaq === i ? <Minus size={14} weight="bold" /> : <Plus size={14} weight="bold" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                      role="region"
                    >
                      <p className="pb-5 pl-8 text-[15px] text-text-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              Get started
            </span>
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-text">
            Ready to get started?
          </h2>
          <p className="mt-3 text-[15px] text-text-muted max-w-md mx-auto">
            Book a free audit and we&apos;ll show you exactly how {service.title.toLowerCase()} works for your business.
          </p>
          <Link href="/#contact" className="mt-6 inline-block rounded-xl bg-accent px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-accent-dark shadow-lg shadow-accent/25 transition-all">
            Book your free audit
          </Link>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="pb-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/services/${prev.slug}`} className="group rounded-2xl border border-border bg-bg p-6 hover:border-primary/20 hover:shadow-md transition-all flex items-center gap-3">
                <ArrowLeft size={16} weight="bold" className="text-text-light group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-[12px] text-text-light">Previous</p>
                  <p className="text-[15px] font-bold text-text group-hover:text-primary transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/services/${next.slug}`} className="group rounded-2xl border border-border bg-bg p-6 hover:border-primary/20 hover:shadow-md transition-all flex items-center justify-end gap-3 text-right">
                <div>
                  <p className="text-[12px] text-text-light">Next</p>
                  <p className="text-[15px] font-bold text-text group-hover:text-primary transition-colors">{next.title}</p>
                </div>
                <ArrowRight size={16} weight="bold" className="text-text-light group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
