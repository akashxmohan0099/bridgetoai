"use client";

import { useActionState, useEffect, useRef, useState, type ClipboardEvent, type KeyboardEvent } from "react";
import { loginAction } from "./actions";

const LENGTH = 6;

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, { error: null });
  const [digits, setDigits] = useState<string[]>(() => Array(LENGTH).fill(""));
  const [lastError, setLastError] = useState<string | null>(null);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const passcode = digits.join("");
  const complete = passcode.length === LENGTH && /^\d{6}$/.test(passcode);

  if (state.error !== lastError) {
    setLastError(state.error);
    if (state.error) setDigits(Array(LENGTH).fill(""));
  }

  useEffect(() => {
    if (state.error) inputsRef.current[0]?.focus();
  }, [state.error]);

  function updateDigit(i: number, value: string) {
    const d = value.replace(/\D/g, "").slice(0, 1);
    setDigits((prev) => {
      const next = [...prev];
      next[i] = d;
      return next;
    });
    if (d && i < LENGTH - 1) inputsRef.current[i + 1]?.focus();
  }

  function onKeyDown(i: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      inputsRef.current[i - 1]?.focus();
      setDigits((prev) => {
        const next = [...prev];
        next[i - 1] = "";
        return next;
      });
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && i > 0) {
      inputsRef.current[i - 1]?.focus();
      e.preventDefault();
    } else if (e.key === "ArrowRight" && i < LENGTH - 1) {
      inputsRef.current[i + 1]?.focus();
      e.preventDefault();
    }
  }

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (!pasted) return;
    e.preventDefault();
    const next = Array(LENGTH).fill("");
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i];
    setDigits(next);
    const focusIndex = Math.min(pasted.length, LENGTH - 1);
    inputsRef.current[focusIndex]?.focus();
  }

  // Auto-submit when all six digits are entered.
  useEffect(() => {
    if (complete && !pending) formRef.current?.requestSubmit();
  }, [complete, pending]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <input type="hidden" name="passcode" value={passcode} />

      <div className="flex justify-between gap-2">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => { inputsRef.current[i] = el; }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            autoFocus={i === 0}
            disabled={pending}
            maxLength={1}
            value={d}
            onChange={(e) => updateDigit(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            onPaste={onPaste}
            onFocus={(e) => e.target.select()}
            aria-label={`Digit ${i + 1}`}
            className="h-14 w-full min-w-0 rounded-xl border border-border bg-bg text-center text-[22px] font-bold tabular-nums text-text outline-none transition-all duration-200 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 disabled:opacity-60"
          />
        ))}
      </div>

      {state.error && (
        <p className="text-[13px] text-red-600 bg-red-50 rounded-lg px-4 py-2.5 text-center">
          {state.error}
        </p>
      )}

      <p className="text-[12px] text-text-light text-center">
        {pending ? "Checking…" : "Enter your 6-digit passcode."}
      </p>
    </form>
  );
}
