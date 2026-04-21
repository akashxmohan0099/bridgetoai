"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Plus, Minus, ArrowLeft, CheckCircle, Clock, ArrowRight,
  MagnifyingGlass, Wrench, GraduationCap, Sparkle, Target,
} from "@phosphor-icons/react";
import { serviceAreas, type ServiceArea } from "@/data/services";
import { serviceVisuals } from "@/data/serviceVisuals";

const logoFloatPositions: React.CSSProperties[] = [
  { top: 8, right: 20 },
  { top: "50%", right: -4, transform: "translateY(-50%)" },
  { bottom: 8, right: 28 },
  { bottom: 8, left: 28 },
];

/* ── component ─────────────────────────────────────────────────── */

interface Props {
  service: ServiceArea;
  prev: ServiceArea | null;
  next: ServiceArea | null;
}

export default function ServiceDetailClient({ service, prev, next }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const visual = serviceVisuals[service.slug];
  const { icon: CategoryIcon, logos, featureIcons: icons } = visual;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>

        {/* Large watermark number */}
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

        <div className="relative w-full mx-auto max-w-[1200px] px-5 sm:px-10 pt-24 sm:pt-36 pb-16 sm:pb-20">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/#services" className="inline-flex items-center gap-2 text-[13px] font-medium text-text-muted hover:text-primary transition-colors mb-10">
              <ArrowLeft size={14} weight="bold" /> All services
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Text column */}
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-5 bg-accent rounded-full" />
                <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                  Service {service.number} / {String(serviceAreas.length).padStart(2, "0")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-[clamp(2rem,6vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.035em] text-text"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 text-[clamp(1.05rem,2vw,1.2rem)] text-text-muted leading-relaxed max-w-xl"
              >
                {service.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/#contact"
                  className="rounded-xl bg-accent px-7 py-4 text-[15px] font-semibold text-white hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
                >
                  Book your audit
                </Link>
                <div className="flex items-center gap-2.5 text-[14px] text-text-light">
                  <Clock size={16} weight="bold" />
                  <span>{service.timeline}</span>
                </div>
              </motion.div>
            </div>

            {/* Hero visual — floating composition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative shrink-0 hidden lg:flex items-center justify-center"
              style={{ width: 300, height: 280 }}
            >
              {/* Ambient glow */}
              <div className="absolute inset-6 bg-primary/[0.08] rounded-full blur-[50px]" />

              {/* Gradient card */}
              <motion.div
                initial={{ scale: 0.8, rotate: -4 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 80, damping: 12 }}
                className="relative w-[180px] h-[180px] rounded-[2rem] bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#818CF8] flex items-center justify-center shadow-2xl shadow-primary/25"
              >
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-20 bg-white/[0.07] rounded-full blur-2xl" />
                </div>
                <CategoryIcon size={60} weight="fill" className="text-white/50 relative z-10" />
              </motion.div>

              {/* Floating brand logos */}
              {logos.map((logo, li) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + li * 0.09, type: "spring", stiffness: 280, damping: 18 }}
                  className="absolute flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-white shadow-lg shadow-black/8 border border-gray-100"
                  style={logoFloatPositions[li]}
                >
                  <Image src={`/logos/${logo}`} alt={logo.replace(".svg", "")} width={22} height={22} className="w-[22px] h-[22px]" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 sm:mt-14 pt-8 border-t border-primary/[0.08] flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-12 sm:gap-y-4"
          >
            {[
              { label: "Features included", value: String(service.features.length) },
              { label: "Real-world examples", value: String(service.useCases.length) },
              { label: "Setup & training", value: "Included" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2.5">
                <span className="text-[24px] sm:text-[28px] font-bold text-text tracking-tight">{stat.value}</span>
                <span className="text-[13px] text-text-light">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features — Bento Grid ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-xl mx-auto mb-14"
          >
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
            {service.features.map((feature, j) => {
              const FeatureIcon = icons[j] ?? CheckCircle;
              const isHero = j === 0;

              return (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: j * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col ${
                    isHero
                      ? "sm:col-span-2 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] border-primary/20 p-8 sm:p-10"
                      : "bg-bg border-border p-7 sm:p-8 hover:border-primary/20"
                  }`}
                >
                  {!isHero && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
                  )}

                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isHero ? "bg-white/15 border border-white/10" : "bg-primary-light"
                      }`}
                    >
                      <FeatureIcon size={22} weight="duotone" className={isHero ? "text-white/90" : "text-primary"} />
                    </span>
                    <span className={`text-[12px] font-bold ${isHero ? "text-white/30" : "text-text-light/50"}`}>
                      {String(j + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={`text-[17px] font-bold leading-snug ${isHero ? "text-white" : "text-text"}`}>
                    {feature.name}
                  </h3>
                  <p className={`mt-2 text-[15px] leading-relaxed ${isHero ? "text-white/70" : "text-text-muted"}`}>
                    {feature.description}
                  </p>

                  {/* Watermark icon on hero card */}
                  {isHero && (
                    <div className="absolute -bottom-6 -right-6 pointer-events-none">
                      <FeatureIcon size={120} weight="fill" className="text-white/[0.06]" />
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-7 sm:p-8 flex flex-col justify-center lg:col-span-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4F46E5]/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10 flex items-center gap-3 mb-3">
                <Sparkle size={20} weight="fill" className="text-accent" />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-accent/80">
                  Personalised for you
                </span>
              </div>
              <h3 className="relative z-10 text-[18px] font-bold text-white">
                See how these work for your business
              </h3>
              <p className="relative z-10 mt-2 text-[15px] text-[#c7d2fe]/50 leading-relaxed">
                Book an audit and we&apos;ll walk through exactly which features apply to you.
              </p>
              <Link
                href="/#contact"
                className="relative z-10 mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:text-white transition-colors group/cta"
              >
                Book your audit
                <ArrowRight size={14} weight="bold" className="group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Real-world use cases ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-bg">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center max-w-xl mx-auto mb-14"
          >
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
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 flex flex-col"
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-transparent" />

                <div className="p-7 sm:p-8 pl-8 sm:pl-9 flex-1 relative">
                  {/* Watermark number */}
                  <span className="absolute top-4 right-5 text-[64px] font-black leading-none text-text/[0.04] select-none pointer-events-none">
                    {String(j + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Target size={20} weight="fill" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-text-light">
                      Scenario {String(j + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[15px] text-text leading-relaxed font-medium">{uc.scenario}</p>
                </div>

                <div className="px-7 sm:px-8 pl-8 sm:pl-9 py-6 bg-primary/[0.03] border-t border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary/50 mb-1 block">
                        What we set up
                      </span>
                      <p className="text-[14px] text-text-muted leading-relaxed">{uc.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we deliver ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
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
              <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-white mb-12 text-center">
                How we deliver {service.title.toLowerCase()}
              </h2>

              <div className="relative">
                {/* Connecting dashed line between steps */}
                <div className="hidden sm:block absolute top-7 left-[17%] right-[17%] h-[1px] border-t border-dashed border-white/[0.12]" />

                <div className="grid gap-8 sm:grid-cols-3">
                  {[
                    { step: "01", title: "We find the right tools", desc: "We assess your specific needs and recommend the best solution — whether it\u2019s an existing product or something we build.", icon: MagnifyingGlass },
                    { step: "02", title: "We set it all up", desc: "Full configuration, system connections, data migration, and testing. We work alongside your team with zero disruption.", icon: Wrench },
                    { step: "03", title: "We train your team", desc: "Hands-on, role-specific training until every person is confident. Plain English, no jargon, no one left behind.", icon: GraduationCap },
                  ].map((s, i) => {
                    const StepIcon = s.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        className="text-center relative"
                      >
                        <div className="relative inline-flex">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm">
                            <StepIcon size={24} weight="duotone" className="text-white/80" />
                          </div>
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-lg shadow-accent/30">
                            {s.step}
                          </span>
                        </div>
                        <h3 className="mt-5 text-[16px] font-bold text-white">{s.title}</h3>
                        <p className="mt-2 text-[14px] text-white/50 leading-relaxed">{s.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-[14px] text-white/40 flex items-center justify-center gap-2">
                  <Clock size={16} weight="bold" />
                  {service.timeline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="mx-auto max-w-[720px] px-5 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-10"
          >
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

          <div className="rounded-2xl border border-border bg-surface overflow-hidden divide-y divide-border">
            {service.faqs.map((faq, i) => (
              <div key={i} className="px-6 sm:px-8">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-[13px] font-bold text-primary mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] font-semibold text-text group-hover:text-primary transition-colors">
                      {faq.q}
                    </span>
                  </span>
                  <span
                    className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light text-primary transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}
                  >
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

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-surface overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#4F46E5] via-[#5B52F0] to-[#818CF8] px-6 py-14 sm:px-16 sm:py-20 text-center overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.06] rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.04] rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Sparkle size={32} weight="fill" className="text-white/30 mx-auto mb-5" />
              <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-[-0.02em] text-white">
                Ready to get started?
              </h2>
              <p className="mt-3 text-[16px] text-white/60 max-w-md mx-auto leading-relaxed">
                Book an audit and we&apos;ll show you exactly how {service.title.toLowerCase()} works for your business.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-[15px] font-semibold text-[#4F46E5] hover:bg-white/90 shadow-xl shadow-black/10 transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                Book your audit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next ─────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20 pt-4 bg-surface">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="group rounded-2xl border border-border bg-bg p-6 hover:border-primary/20 hover:shadow-md transition-all flex items-center gap-3"
              >
                <ArrowLeft size={16} weight="bold" className="text-text-light group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="text-[12px] text-text-light">Previous</p>
                  <p className="text-[15px] font-bold text-text group-hover:text-primary transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/services/${next.slug}`}
                className="group rounded-2xl border border-border bg-bg p-6 hover:border-primary/20 hover:shadow-md transition-all flex items-center justify-end gap-3 text-right"
              >
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
