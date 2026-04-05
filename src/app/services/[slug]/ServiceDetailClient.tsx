"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowLeft, Lightning, CheckCircle, Clock, ArrowRight } from "@phosphor-icons/react";
import type { ServiceArea } from "@/data/services";

interface Props {
  service: ServiceArea;
  index: number;
  prev: ServiceArea | null;
  next: ServiceArea | null;
}

export default function ServiceDetailClient({ service, index, prev, next }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      {/* Hero — dark with giant watermark number */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#0b1a2e]">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0ea5e9]/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#38bdf8]/15 blur-[100px]" style={{ animationDelay: "1s", animationDuration: "4s" }} />
          <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#0284c7]/10 blur-[80px]" />
        </div>

        {/* Giant watermark number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] pointer-events-none select-none hidden lg:block"
        >
          <span className="text-[clamp(16rem,28vw,22rem)] font-black leading-none text-white/[0.03] tracking-tighter">
            {service.number}
          </span>
        </motion.div>

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative w-full mx-auto max-w-[1200px] px-6 sm:px-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/#services" className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm px-4 py-2 text-[13px] text-white/50 hover:bg-white/10 hover:text-white/80 transition-all mb-12">
              <ArrowLeft size={14} weight="bold" /> All services
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-gradient-to-r from-[#0ea5e9] to-transparent" />
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#38bdf8]/70">
                Service {service.number} / 06
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[clamp(2.6rem,6vw,4rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-[clamp(1.1rem,2vw,1.3rem)] text-[#38bdf8]/80 font-medium leading-snug max-w-xl"
            >
              {service.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-[16px] text-white/35 leading-relaxed max-w-lg"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/#contact" className="group relative rounded-xl bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] px-7 py-4 text-[15px] font-semibold text-white overflow-hidden transition-all hover:shadow-xl hover:shadow-[#0ea5e9]/25">
                <span className="relative z-10">Book your free audit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <div className="flex items-center gap-2.5 text-[14px] text-white/30">
                <Clock size={16} weight="bold" />
                <span>{service.timeline}</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap gap-x-12 gap-y-4"
          >
            {[
              { label: "Features included", value: String(service.features.length) },
              { label: "Real-world examples", value: String(service.useCases.length) },
              { label: "Setup & training", value: "Included" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                <span className="text-[28px] font-bold text-white/90 tracking-tight">{stat.value}</span>
                <span className="text-[13px] text-white/25">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features — interactive selector */}
      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-14"
          >
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] text-text">
              What&apos;s included
            </h2>
            <p className="mt-2 text-[15px] text-text-muted max-w-lg leading-relaxed">
              Product selection, setup, and training — all included.
            </p>
          </motion.div>

          {/* Desktop: interactive left/right layout */}
          <div className="hidden lg:grid lg:grid-cols-[340px,1fr] gap-6">
            {/* Feature list */}
            <div className="flex flex-col gap-1.5">
              {service.features.map((feature, j) => (
                <motion.button
                  key={j}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.05, duration: 0.3 }}
                  onClick={() => setActiveFeature(j)}
                  className={`group text-left rounded-xl px-5 py-4 transition-all duration-300 ${
                    activeFeature === j
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-surface border border-border hover:border-primary/20 hover:bg-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[12px] font-bold tracking-wide ${
                      activeFeature === j ? "text-white/50" : "text-text-light"
                    }`}>
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-[14px] font-semibold leading-snug ${
                      activeFeature === j ? "text-white" : "text-text group-hover:text-primary"
                    } transition-colors`}>
                      {feature.name}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Feature detail */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-surface border border-border p-10 min-h-[320px] flex flex-col justify-center relative overflow-hidden"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

                  <span className="text-[64px] font-black text-primary/[0.07] leading-none mb-4">
                    {String(activeFeature + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold text-text tracking-[-0.01em]">
                    {service.features[activeFeature].name}
                  </h3>
                  <p className="mt-4 text-[16px] text-text-muted leading-relaxed max-w-md">
                    {service.features[activeFeature].description}
                  </p>
                  <div className="mt-8">
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-primary-dark transition-colors">
                      Get started with this <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: j * 0.06, duration: 0.4 }}
                className="rounded-2xl bg-surface border border-border p-6"
              >
                <span className="text-[12px] font-bold text-primary/50">{String(j + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[15px] font-bold text-text">{feature.name}</h3>
                <p className="mt-1.5 text-[14px] text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world use cases — dark immersive section */}
      <section className="relative py-16 sm:py-28 bg-[#0b1a2e] overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/10 blur-[100px]" />
          <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full bg-[#38bdf8]/[0.07] blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-[#0ea5e9] to-transparent" />
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#38bdf8]/60">
                Proof it works
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em] text-white">
              Real-world examples
            </h2>
            <p className="mt-3 text-[16px] text-white/35 max-w-lg leading-relaxed">
              Here&apos;s how this service works in practice for businesses like yours.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {service.useCases.map((uc, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: j * 0.1, duration: 0.5 }}
                className="group grid lg:grid-cols-[1fr,1fr] rounded-2xl bg-white/[0.04] border border-white/[0.06] overflow-hidden hover:border-[#0ea5e9]/20 transition-all duration-500"
              >
                {/* The problem */}
                <div className="p-8 lg:p-10 flex items-start gap-4 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#0ea5e9]/20 to-transparent lg:hidden" />
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08]">
                    <Lightning size={20} weight="duotone" className="text-[#38bdf8]" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/20 mb-2 block">The challenge</span>
                    <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                      {uc.scenario}
                    </p>
                  </div>
                </div>

                {/* The outcome */}
                <div className="p-8 lg:p-10 flex items-start gap-4 bg-[#0ea5e9]/[0.06] relative lg:border-l border-t lg:border-t-0 border-white/[0.06]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/15">
                    <CheckCircle size={20} weight="duotone" className="text-[#38bdf8]" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#38bdf8]/40 mb-2 block">The result</span>
                    <p className="text-[15px] text-white/50 leading-relaxed">
                      {uc.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center gap-4"
          >
            <Link href="/#contact" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#38bdf8] hover:text-white transition-colors">
              See how this applies to your business <ArrowRight size={14} weight="bold" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] p-6 sm:p-10 lg:p-14">
            <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-white mb-8">
              How we deliver {service.title.toLowerCase()}
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { step: "1", title: "We find the right tools", desc: "We assess your specific needs and recommend the best solution — whether it\u2019s an existing product or something we build." },
                { step: "2", title: "We set it all up", desc: "Full configuration, system connections, data migration, and testing. We work alongside your team with zero disruption." },
                { step: "3", title: "We train your team", desc: "Hands-on, role-specific training until every person is confident. Plain English, no jargon, no one left behind." },
              ].map((s, i) => (
                <div key={i} className="text-center sm:text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-[16px] font-bold text-white mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-[16px] font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-[14px] text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-[14px] text-white/40 flex items-center justify-center gap-2">
                <Clock size={16} weight="bold" />
                {service.timeline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service-specific FAQ */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[720px] px-6 sm:px-10">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-text mb-10">
            Questions about {service.title.toLowerCase()}
          </h2>
          <div className="divide-y divide-border">
            {service.faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[16px] font-semibold text-text">{faq.q}</span>
                  <span className="shrink-0 text-primary">
                    {openFaq === i ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
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
                      <p className="pb-5 text-[15px] text-text-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 text-center">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-text">
            Ready to get started?
          </h2>
          <p className="mt-3 text-[15px] text-text-muted max-w-md mx-auto">
            Book a free audit and we&apos;ll show you exactly how {service.title.toLowerCase()} works for your business.
          </p>
          <Link href="/#contact" className="mt-6 inline-block rounded-lg bg-primary px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-primary-dark transition-colors">
            Book your free audit
          </Link>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link href={`/services/${prev.slug}`} className="group rounded-2xl border border-border p-6 hover:border-primary/20 hover:shadow-md transition-all flex items-center gap-3">
                <ArrowLeft size={16} weight="bold" className="text-text-light group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-[12px] text-text-light">Previous</p>
                  <p className="text-[15px] font-bold text-text group-hover:text-primary transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/services/${next.slug}`} className="group rounded-2xl border border-border p-6 hover:border-primary/20 hover:shadow-md transition-all flex items-center justify-end gap-3 text-right">
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
