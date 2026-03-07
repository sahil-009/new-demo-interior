import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import AboutSection from "@/components/AboutSection";
import ServicesGridSection from "@/components/ServicesGridSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import SwipeCardGallery from "@/components/SwipeCardGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <FounderSection />
    <AboutSection />
    <ServicesGridSection />
    <ProcessSection />
    <ProjectsSection />
    <SwipeCardGallery />
    <TestimonialsSection />
    <StatsSection />
    <LocationSection />
    <FaqSection />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
