import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import WhoWeHelp from "@/components/WhoWeHelp";
import ServiceCatalogue from "@/components/ServiceCatalogue";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <Offerings />
      <WhoWeHelp />
      <ServiceCatalogue />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
