"use client";

import { motion } from "framer-motion";
import { Lightbulb, ChartBar, Robot, Users } from "@phosphor-icons/react";

const features = [
  {
    icon: Lightbulb,
    title: "Automation & optimization",
    description: "Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.",
  },
  {
    icon: ChartBar,
    title: "Data analytics & insights",
    description: "Transform raw data into strategic insight using advanced analytics, dashboards, and predictive modeling.",
  },
  {
    icon: Robot,
    title: "AI receptionist & comms",
    description: "Round-the-clock intelligent agents that answer calls, respond to messages, qualify leads, and book appointments.",
  },
  {
    icon: Users,
    title: "Training & capability",
    description: "Practical training and strategic advice ensure your team gets lasting value from every AI investment.",
  },
];

export default function Solution() {
  return (
    <section id="features" className="pb-28">
      <div className="mx-auto max-w-[1280px] px-8 sm:px-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-surface border border-border p-10 sm:p-12 cursor-default transition-all duration-300 hover:shadow-xl hover:shadow-text/5"
            >
              {/* Visual area */}
              <div className="h-48 sm:h-56 rounded-xl bg-card mb-8 flex items-center justify-center overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-2xl bg-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <f.icon size={36} weight="duotone" className="text-text" />
                  </div>
                  <div className="hidden sm:block h-16 w-28 rounded-xl bg-white shadow-md border border-border p-3">
                    <div className="h-2 w-16 rounded-full bg-accent mb-2" />
                    <div className="h-1.5 w-12 rounded-full bg-card" />
                    <div className="h-1.5 w-20 rounded-full bg-card mt-1" />
                  </div>
                </div>
              </div>

              <h3 className="text-[20px] font-bold text-text tracking-[-0.02em]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
