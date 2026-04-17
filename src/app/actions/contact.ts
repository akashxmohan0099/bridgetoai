"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  business: string;
  message: string;
}

const MAX_PER_IP_PER_WINDOW = 3;
const WINDOW_MINUTES = 10;

async function getClientIp(): Promise<string | null> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? null;
}

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; error?: string }> {
  if (formData.get("website")) {
    return { success: true };
  }

  const data: ContactFormData = {
    name: (formData.get("name") as string)?.trim() ?? "",
    phone: (formData.get("phone") as string)?.trim() ?? "",
    email: (formData.get("email") as string)?.trim() ?? "",
    business: (formData.get("business") as string)?.trim() ?? "",
    message: (formData.get("message") as string)?.trim() ?? "",
  };

  if (!data.name || !data.phone || !data.email) {
    return { success: false, error: "Please fill in your name, phone, and email." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { success: false, error: "That email address doesn't look right." };
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Contact form: Supabase env vars not set");
    return { success: false, error: "Contact form is temporarily unavailable. Please email us directly." };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const ip = await getClientIp();

  if (ip) {
    const since = new Date(Date.now() - WINDOW_MINUTES * 60 * 1000).toISOString();
    const { count, error: countError } = await supabase
      .from("contact_submissions")
      .select("id", { count: "exact", head: true })
      .eq("ip", ip)
      .gte("created_at", since);

    if (countError) {
      // Column may not exist yet — log and continue without rate-limiting rather than blocking submissions.
      console.error("Rate-limit check failed (continuing):", countError);
    } else if ((count ?? 0) >= MAX_PER_IP_PER_WINDOW) {
      return {
        success: false,
        error: "You've sent a few messages already — give us a moment to get back to you.",
      };
    }
  }

  const { error: dbError } = await supabase.from("contact_submissions").insert({
    name: data.name,
    phone: data.phone,
    email: data.email,
    business: data.business || null,
    message: data.message || null,
    ip,
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return { success: false, error: "Couldn't save your message. Please try again." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Bridge To AI <noreply@bridgetoai.com.au>";

  if (apiKey && to) {
    const text = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      data.business && `Business: ${data.business}`,
      data.message && `\nMessage:\n${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const resend = new Resend(apiKey);
      const { error: emailError } = await resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject: `New audit request from ${data.name}`,
        text,
      });
      if (emailError) {
        console.error("Resend error (lead still saved to DB):", emailError);
      }
    } catch (err) {
      console.error("Resend exception (lead still saved to DB):", err);
    }
  }

  return { success: true };
}
