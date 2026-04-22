import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bridge To AI",
  url: "https://bridgetoai.com.au",
  logo: "https://bridgetoai.com.au/apple-icon",
  description:
    "Bridge To AI helps Australian businesses find exactly where AI fits, set it up, and train teams to use it.",
  email: "BridgeToAI@proton.me",
  areaServed: { "@type": "Country", name: "Australia" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
