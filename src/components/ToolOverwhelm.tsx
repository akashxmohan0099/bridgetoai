"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const innerLogos = [
  { name: "ChatGPT", file: "chatgpt.svg" },
  { name: "Claude", file: "claude.svg" },
  { name: "Gemini", file: "gemini.svg" },
  { name: "Figma", file: "figma.svg" },
  { name: "Lovable", file: "lovable.svg" },
  { name: "Perplexity", file: "perplexity.svg" },
];

const outerLogos = [
  { name: "HubSpot", file: "hubspot.svg" },
  { name: "Zapier", file: "zapier.svg" },
  { name: "Cursor", file: "cursor.svg" },
  { name: "ElevenLabs", file: "elevenlabs.svg" },
  { name: "Mistral", file: "mistral.svg" },
  { name: "Replit", file: "replit.svg" },
  { name: "Supabase", file: "supabase.svg" },
  { name: "HuggingFace", file: "huggingface.svg" },
  { name: "Notion", file: "notion.svg" },
  { name: "Grammarly", file: "grammarly.svg" },
];

export default function ToolOverwhelm() {
  return (
    <section className="py-28 bg-surface overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
                The problem
              </span>
            </div>

            <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em] text-text">
              Hundreds of AI tools.{" "}
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] bg-clip-text text-transparent">
                Zero clarity
              </span>{" "}
              on which ones matter.
            </h2>

            <p className="mt-5 text-[16px] text-text-muted leading-relaxed max-w-md">
              ChatGPT, Claude, Gemini, Lovable, Cursor, ElevenLabs — new tools
              launch every week. Your competitors are adopting them. But which
              ones actually fit your business? We cut through the noise.
            </p>

            <a
              href="#offerings"
              className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              See how we help
            </a>
          </motion.div>

          {/* Orbit side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-[480px]"
          >
            {/* Orbit tracks */}
            <div className="absolute h-[260px] w-[260px] rounded-full border border-primary/10" />
            <div className="absolute h-[420px] w-[420px] rounded-full border border-primary/5" />

            {/* Center — character illustration */}
            <div className="relative z-10">
              <Image
                src="/confused-person.png"
                alt="Business owner overwhelmed by AI tools"
                width={160}
                height={160}
                className="w-40 h-40 object-contain"
                priority
              />
            </div>

            {/* Inner ring — clockwise */}
            <div className="absolute h-[260px] w-[260px]" style={{ animation: "orbit-cw 16s linear infinite" }}>
              {innerLogos.map((logo, i) => (
                <div key={i} className="absolute" style={{ left: "50%", top: "50%", transform: `rotate(${i * 60}deg) translateX(130px)`, marginLeft: -20, marginTop: -20 }}>
                  <div className="group/chip" style={{ animation: "counter-rotate-cw 16s linear infinite" }}>
                    <div className="w-[40px] h-[40px] rounded-xl overflow-hidden shadow-md transition-transform duration-500 group-hover/chip:scale-150">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/logos/${logo.file}`} alt={logo.name} width={40} height={40} loading="lazy" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Outer ring — counter-clockwise */}
            <div className="absolute h-[420px] w-[420px] hidden sm:block" style={{ animation: "orbit-ccw 22s linear infinite" }}>
              {outerLogos.map((logo, i) => (
                <div key={i} className="absolute" style={{ left: "50%", top: "50%", transform: `rotate(${i * 36}deg) translateX(210px)`, marginLeft: -17, marginTop: -17 }}>
                  <div className="group/chip" style={{ animation: "counter-rotate-ccw 22s linear infinite" }}>
                    <div className="w-[34px] h-[34px] rounded-lg overflow-hidden shadow-sm opacity-50 transition-all duration-500 group-hover/chip:scale-150 group-hover/chip:opacity-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/logos/${logo.file}`} alt={logo.name} width={34} height={34} loading="lazy" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
