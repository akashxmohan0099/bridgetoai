"use client";

const services = [
  "Email Automation",
  "AI Receptionist",
  "Voice-to-Text",
  "Custom Platforms",
  "Process Automation",
  "Smart CRM",
  "Call Recording",
  "Staff Training",
  "Document Generation",
  "Lead Qualification",
  "Dashboards",
  "Booking",
];

export default function Marquee() {
  return (
    <div className="py-4 border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
          {services.map((item, i) => (
            <span
              key={i}
              className="rounded-full bg-surface border border-border px-4 py-2 text-[13px] text-text-muted whitespace-nowrap shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
