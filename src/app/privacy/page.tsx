import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Bridge To AI",
  description: "How Bridge To AI collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-[720px] px-6 sm:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] uppercase text-primary/60">
              <span className="h-[2px] w-5 bg-accent rounded-full" />
              Legal
            </span>
          </div>
          <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-0.02em] text-text">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[15px] text-text-muted">Last updated: April 2026</p>

          <div className="relative mt-10 rounded-2xl border border-border bg-surface p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

            <div className="space-y-8 text-[15px] text-text-muted leading-relaxed">
              <section>
                <h2 className="flex items-center gap-3 text-[18px] font-bold text-text mb-3">
                  <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                  1. Information we collect
                </h2>
                <p className="pl-[15px]">
                  When you fill out our contact form, we collect your name, phone number, email address,
                  business name, and any additional information you choose to provide. We do not collect
                  information automatically through cookies or tracking scripts beyond basic analytics.
                </p>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-[18px] font-bold text-text mb-3">
                  <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                  2. How we use your information
                </h2>
                <div className="pl-[15px]">
                  <p>We use the information you provide to:</p>
                  <ul className="mt-2 space-y-1.5 list-disc list-inside">
                    <li>Respond to your enquiry and schedule your free audit</li>
                    <li>Provide you with a tailored proposal</li>
                    <li>Communicate with you about our services</li>
                  </ul>
                  <p className="mt-3">We will never sell or share your personal information with third parties for marketing purposes.</p>
                </div>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-[18px] font-bold text-text mb-3">
                  <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                  3. Data storage and security
                </h2>
                <p className="pl-[15px]">
                  Your information is stored securely and only accessible to authorised Bridge To AI team
                  members. We take reasonable steps to protect your personal information from unauthorised
                  access, modification, or disclosure.
                </p>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-[18px] font-bold text-text mb-3">
                  <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                  4. Your rights
                </h2>
                <p className="pl-[15px]">
                  Under the Australian Privacy Act 1988, you have the right to access, correct, or request
                  deletion of your personal information. To make a request, email us at{" "}
                  <a href="mailto:hello@bridgetoai.com.au" className="text-primary hover:text-primary-dark transition-colors font-medium">
                    hello@bridgetoai.com.au
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="flex items-center gap-3 text-[18px] font-bold text-text mb-3">
                  <span className="h-5 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent shrink-0" />
                  5. Contact
                </h2>
                <p className="pl-[15px]">
                  If you have any questions about this privacy policy, contact us at{" "}
                  <a href="mailto:hello@bridgetoai.com.au" className="text-primary hover:text-primary-dark transition-colors font-medium">
                    hello@bridgetoai.com.au
                  </a>.
                </p>
              </section>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-primary-dark transition-colors">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
