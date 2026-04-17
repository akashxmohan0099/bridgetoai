"use server";

import { redirect } from "next/navigation";
import { createAdminSession, verifyPasscode } from "@/lib/adminSession";

export async function loginAction(
  _prev: { error: string | null },
  formData: FormData,
): Promise<{ error: string | null }> {
  const passcode = ((formData.get("passcode") as string) ?? "").trim();
  const ok = await verifyPasscode(passcode);
  if (!ok) {
    // Small fixed delay to slow brute-force attempts. Not a substitute for
    // rate limiting — if you need stronger protection, put this behind a
    // reverse proxy with per-IP limits or lengthen the passcode.
    await new Promise((r) => setTimeout(r, 750));
    return { error: "Incorrect passcode." };
  }
  await createAdminSession();
  redirect("/admin");
}
