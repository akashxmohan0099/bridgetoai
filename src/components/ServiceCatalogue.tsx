"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Envelope, Phone, BookOpen, Microphone, TreeStructure, ChartLineUp,
  CaretDown, CaretUp,
} from "@phosphor-icons/react";

const serviceAreas = [
  {
    icon: Envelope,
    title: "AI Email & Document Automation",
    tagline: "From inbox zero to content on autopilot",
    features: [
      "Email Prioritisation & Smart Drafting",
      "Hands-Free Email by Voice",
      "Proposal & Document Generation",
      "Form Completion & Processing",
      "Professional Documentation",
      "AI Email Campaigns & Newsletters",
    ],
  },
  {
    icon: Phone,
    title: "AI Call, Messaging & Chat Receptionist",
    tagline: "Never miss a call, never lose a lead",
    features: [
      "24/7 Phone Reception",
      "After-Hours Handling",
      "Smart Website & Chat Agents",
      "SMS & Messaging Automation",
      "Lead Qualification & Filter",
      "Appointment Booking",
    ],
  },
  {
    icon: BookOpen,
    title: "AI Training & Advisory",
    tagline: "Build capability, not dependency",
    features: [
      "AI Platform & Model Selection",
      "AI Prompt Training",
      "AI Tool Training",
    ],
  },
  {
    icon: Microphone,
    title: "AI Voice, Call & Meeting Records",
    tagline: "Capture everything, search anything",
    features: [
      "Call Recording & Summarisation",
      "Voice-to-Text Notes",
      "Meeting Transcription & Summaries",
      "Knowledge Capture & SOP Documentation",
      "Searchable Record Management",
      "Compliance-Ready Documentation",
    ],
  },
  {
    icon: TreeStructure,
    title: "AI Workflow & Process Automation",
    tagline: "One platform, zero busywork",
    features: [
      "Centralised Communications Platform",
      "Smart CRM & Client Pipeline",
      "End-to-End Process Automation",
      "System Integration & Data Flow",
      "Client Follow-Up & Retention",
      "Workforce, Rostering & HR",
    ],
  },
  {
    icon: ChartLineUp,
    title: "AI Business & Finance Insights",
    tagline: "See what\u2019s really happening in your business",
    features: [
      "Real-Time Financial Dashboards",
      "Revenue Leakage Detection",
      "Sales Pipeline & Marketing Analytics",
      "Operational Performance Reporting",
      "Forecasting & Scenario Planning",
    ],
  },
];

export default function ServiceCatalogue() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="services" className="py-28 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.02em] text-text">
            Our service areas
          </h2>
          <p className="mt-3 text-[15px] text-text-muted leading-relaxed">
            Six areas where we implement AI. Each includes product selection, setup, and hands-on training.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceAreas.map((area, i) => {
            const isExpanded = expanded.has(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-bg border border-border p-7 transition-all duration-300 hover:shadow-md hover:border-text/12"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-card">
                  <area.icon size={22} weight="duotone" className="text-text" />
                </div>

                <h3 className="mt-5 text-[17px] font-bold text-text leading-snug">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-[15px] text-text-muted">
                  {area.tagline}
                </p>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-5 pt-5 border-t border-border space-y-2.5 overflow-hidden"
                    >
                      {area.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent mt-[7px] shrink-0" />
                          <span className="text-[15px] text-text-muted leading-snug">{f}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggle(i)}
                  className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-text-muted hover:text-text transition-colors"
                >
                  {isExpanded ? (
                    <>
                      Hide details
                      <CaretUp size={14} weight="bold" />
                    </>
                  ) : (
                    <>
                      Show details
                      <CaretDown size={14} weight="bold" />
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
