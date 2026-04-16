import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ToolOverwhelm from "@/components/ToolOverwhelm";
import Offerings from "@/components/Offerings";
import ServiceCatalogue from "@/components/ServiceCatalogue";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ToolOverwhelm />
        <Offerings />
        <ServiceCatalogue />
        <HowItWorks />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
