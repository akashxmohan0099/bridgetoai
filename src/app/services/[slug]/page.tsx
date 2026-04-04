import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailClient from "./ServiceDetailClient";
import { serviceAreas } from "@/data/services";

export function generateStaticParams() {
  return serviceAreas.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceAreas.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Bridge To AI`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = serviceAreas.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = serviceAreas[index];
  const prev = index > 0 ? serviceAreas[index - 1] : null;
  const next = index < serviceAreas.length - 1 ? serviceAreas[index + 1] : null;

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <ServiceDetailClient service={service} index={index} prev={prev} next={next} />
      </main>
      <Footer />
    </div>
  );
}
