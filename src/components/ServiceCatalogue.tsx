"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PaperPlaneTilt, ChatTeardropDots, Brain, VideoCamera, PlugsConnected, ChartPieSlice, ArrowRight,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { serviceAreas } from "@/data/services";

// Only shorten feature names that are too long for the 2-col grid
const shortNames: Record<string, string> = {
  "Email Prioritisation & Smart Drafting": "Smart Email Drafting",
  "AI Email Campaigns & Newsletters": "Campaigns & Newsletters",
  "Meeting Transcription & Summaries": "Meeting Summaries",
  "Knowledge Capture & SOP Documentation": "Knowledge Capture",
  "Compliance-Ready Documentation": "Compliance Docs",
  "Centralised Communications Platform": "Comms Platform",
  "Automated Reporting & Alerts": "Reporting & Alerts",
  "Real-Time Financial Dashboards": "Financial Dashboards",
  "Operational Performance Reporting": "Performance Reporting",
  "Sales Pipeline & Marketing Analytics": "Pipeline & Marketing",
  "End-to-End Process Automation": "Process Automation",
  "System Integration & Data Flow": "System Integration",
  "Forecasting & Scenario Planning": "Forecasting & Planning",
  "Client Follow-Up & Retention": "Follow-Up & Retention",
};

const cards: { icon: PhosphorIcon; logos: string[] }[] = [
  { icon: PaperPlaneTilt, logos: ["gmail.svg", "outlook.svg", "google-docs.svg", "grammarly.svg"] },
  { icon: ChatTeardropDots, logos: ["whatsapp.svg", "calendly.svg", "chatgpt.svg", "intercom.svg"] },
  { icon: Brain, logos: ["chatgpt.svg", "claude.svg", "gemini.svg", "notion.svg"] },
  { icon: VideoCamera, logos: ["zoom.svg", "teams.svg", "google-meet.svg", "google-docs.svg"] },
  { icon: PlugsConnected, logos: ["zapier.svg", "hubspot.svg", "slack.svg", "notion.svg"] },
  { icon: ChartPieSlice, logos: ["xero.svg", "quickbooks.svg", "google-sheets.svg", "power-bi.svg"] },
];

export default function ServiceCatalogue() {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              Service areas
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-text">
            Where we apply it
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            We work with the tools you already know. Each service includes setup, integration, and hands-on training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {serviceAreas.map((area, i) => {
            const { icon: Icon, logos } = cards[i];

            return (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/services/${area.slug}`}
                  className="group block rounded-2xl border border-border bg-bg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/15 hover:-translate-y-1 h-full"
                >
                  {/* Visual header */}
                  <div className="relative bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#818CF8] px-7 py-10 overflow-hidden">
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-32 bg-white/[0.06] rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-between">
                      {/* Category icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.1] border border-white/[0.12] shrink-0 backdrop-blur-sm">
                        <Icon size={28} weight="fill" className="text-white/70" />
                      </div>

                      {/* Brand logos */}
                      <div className="flex items-center gap-3">
                        {logos.map((logo, li) => (
                          <motion.div
                            key={logo}
                            initial={{ opacity: 0, scale: 0.7, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: (i % 2) * 0.08 + li * 0.07 + 0.15,
                            }}
                            whileHover={{ y: -5, scale: 1.08 }}
                            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/10 transition-shadow duration-300 group-hover:shadow-xl"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`/logos/${logo}`}
                              alt={logo.replace(".svg", "")}
                              width={28}
                              height={28}
                              className="w-[28px] h-[28px]"
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-[19px] font-bold text-text leading-snug">{area.title}</h3>
                    <p className="mt-1 text-[14px] text-text-muted">{area.tagline}</p>

                    <div className="mt-5 pt-5 border-t border-border grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {area.features.map((f) => (
                        <div key={f.name} className="flex items-center gap-2.5">
                          <div className="h-1.5 w-1.5 rounded-full shrink-0 bg-primary" />
                          <span className="text-[13px] font-medium text-text">{shortNames[f.name] ?? f.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-all duration-300 group-hover:gap-2.5">
                      See how it works <ArrowRight size={14} weight="bold" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 text-center"
        >
          <p className="text-[15px] text-text-muted">
            Not sure which you need?{" "}
            <a href="/#contact" className="font-semibold text-primary hover:text-primary-dark transition-colors">
              Book a free audit
            </a>{" "}
            and we&apos;ll tell you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
