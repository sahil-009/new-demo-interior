import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import AboutSection from "@/components/AboutSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <Navbar />
    <HeroSection />
    <FounderSection />
    <AboutSection />
    <ServicesGridSection />
    <ProcessSection />
    <ProjectsSection />
    <TestimonialsSection />
    <StatsSection />
    <LocationSection />
    <FaqSection />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
