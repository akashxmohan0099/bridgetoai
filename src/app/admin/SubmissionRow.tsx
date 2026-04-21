"use client";

import { useState, useTransition } from "react";
import { CaretDown, Envelope, Phone, Buildings, Clock, Check, Trash } from "@phosphor-icons/react";
import type { ContactSubmission } from "@/lib/supabaseAdmin";
import { toggleReadAction, deleteSubmissionAction } from "./actions";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function SubmissionRow({ submission }: { submission: ContactSubmission }) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const unread = !submission.read_at;

  function onToggleRead() {
    startTransition(async () => {
      await toggleReadAction(submission.id, unread);
    });
  }

  function onDelete() {
    if (!confirm(`Delete submission from ${submission.name}? This can't be undone.`)) return;
    startTransition(async () => {
      await deleteSubmissionAction(submission.id);
    });
  }

  return (
    <div className={`rounded-2xl border transition-colors ${unread ? "border-primary/30 bg-primary-light/40" : "border-border bg-surface"}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left p-4 sm:p-5 flex items-start gap-3 sm:gap-4"
      >
        <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${unread ? "bg-primary" : "bg-border"}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-[15px] font-bold text-text break-words">{submission.name}</p>
            {unread && (
              <span className="text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 rounded-full px-2 py-0.5">
                New
              </span>
            )}
          </div>
          <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-1 sm:gap-x-4 sm:gap-y-1 text-[13px] text-text-muted">
            <span className="flex items-center gap-1.5 min-w-0"><Envelope size={13} weight="bold" className="shrink-0" /><span className="break-all">{submission.email}</span></span>
            <span className="flex items-center gap-1.5"><Phone size={13} weight="bold" className="shrink-0" />{submission.phone}</span>
            {submission.business && <span className="flex items-center gap-1.5 min-w-0"><Buildings size={13} weight="bold" className="shrink-0" /><span className="break-words">{submission.business}</span></span>}
          </div>
          <p className="mt-1.5 text-[12px] text-text-light flex items-center gap-1.5">
            <Clock size={12} weight="bold" className="shrink-0" /> {formatDate(submission.created_at)}
          </p>
        </div>
        <CaretDown
          size={16}
          weight="bold"
          className={`text-text-light shrink-0 mt-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 space-y-4">
          {submission.message ? (
            <div className="rounded-xl bg-bg border border-border p-4">
              <p className="text-[11px] font-bold tracking-wider uppercase text-text-light mb-1.5">Message</p>
              <p className="text-[14px] text-text leading-relaxed whitespace-pre-wrap break-words">{submission.message}</p>
            </div>
          ) : (
            <p className="text-[13px] text-text-light italic">No message provided.</p>
          )}

          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:flex-wrap">
            <a
              href={`mailto:${submission.email}?subject=Re:%20your%20Bridge%20To%20AI%20enquiry`}
              className="justify-center rounded-xl bg-accent px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-accent-dark transition-colors inline-flex items-center gap-1.5"
            >
              <Envelope size={14} weight="bold" /> Reply
            </a>
            <a
              href={`tel:${submission.phone.replace(/\s+/g, "")}`}
              className="justify-center rounded-xl border border-border bg-bg px-4 py-2.5 text-[13px] font-semibold text-text hover:border-primary/30 hover:bg-primary-light/40 transition-colors inline-flex items-center gap-1.5"
            >
              <Phone size={14} weight="bold" /> Call
            </a>
            <button
              type="button"
              onClick={onToggleRead}
              disabled={pending}
              className="col-span-2 justify-center rounded-xl border border-border bg-bg px-4 py-2.5 text-[13px] font-semibold text-text hover:border-primary/30 hover:bg-primary-light/40 transition-colors inline-flex items-center gap-1.5 disabled:opacity-60"
            >
              <Check size={14} weight="bold" /> {unread ? "Mark as read" : "Mark as unread"}
            </button>
            <button
              type="button"
              onClick={onDelete}
              disabled={pending}
              className="col-span-2 sm:col-auto sm:ml-auto justify-center rounded-xl border border-red-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-red-600 hover:bg-red-50 transition-colors inline-flex items-center gap-1.5 disabled:opacity-60"
            >
              <Trash size={14} weight="bold" /> Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
