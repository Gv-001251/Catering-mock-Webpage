import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import WeddingArrangements from "@/components/WeddingArrangements";
import CulinaryExperience from "@/components/CulinaryExperience";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Journey from "@/components/Journey";
import CTASection from "@/components/CTASection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F4EA] text-[#20211E] overflow-x-hidden">
      {/* Refined Navigation & Announcement */}
      <Navbar />

      {/* Cinematic Editorial Hero Section */}
      <Hero />

      {/* Brand Philosophy & Kumbakonam Roots */}
      <Philosophy />

      {/* Comprehensive Catering & Mandapam Services */}
      <Services />

      {/* Complete Wedding Arrangements & Ceremonial Planning */}
      <WeddingArrangements />

      {/* Signature Food Experience ("Made with Care. Served with Grace.") */}
      <CulinaryExperience />

      {/* Photo & Event Gallery with Lightbox */}
      <Gallery />

      {/* Why Choose Pavithram: Four Pillars of Excellence */}
      <WhyUs />

      {/* Our Approach to Hospitality & 3-Generation Journey */}
      <Journey />

      {/* Signature Large Visual CTA Banner */}
      <CTASection />

      {/* Functional Front-End Enquiry Form */}
      <EnquiryForm />

      {/* Verified Contact Details & Refined Footer with Lumer Labs Notice */}
      <Footer />

      {/* Direct Quick WhatsApp Action */}
      <WhatsAppFloat />
    </main>
  );
}
