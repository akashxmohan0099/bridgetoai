import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/adminSession";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin — Bridge To AI",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (await isAdminAuthenticated()) redirect("/admin");

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-5">
      <div className="w-full max-w-[380px] rounded-2xl bg-surface p-7 sm:p-8 shadow-xl shadow-black/5 border border-border">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
          <span className="text-[15px] font-bold text-text">Bridge To AI</span>
        </div>
        <h1 className="text-[22px] font-bold text-text tracking-[-0.01em]">Admin access</h1>
        <p className="mt-1 text-[14px] text-text-muted">Enter your 6-digit passcode to view submissions.</p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
