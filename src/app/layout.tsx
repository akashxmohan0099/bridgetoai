import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bridgetoai.com.au"),
  title: "Bridge To AI — Making AI Work For Your Business",
  description:
    "We'll show you exactly where AI fits in your business — saving you time, money and resources. Book a no-obligation audit today.",
  openGraph: {
    title: "Bridge To AI — Making AI Work For Your Business",
    description: "We find exactly where AI fits in your business, set it up, and train your team. No-obligation audit, scoped to suit.",
    url: "https://bridgetoai.com.au",
    siteName: "Bridge To AI",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridge To AI — Making AI Work For Your Business",
    description: "We find exactly where AI fits in your business, set it up, and train your team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
