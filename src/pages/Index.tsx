import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

