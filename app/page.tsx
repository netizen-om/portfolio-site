"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { useScroll } from "@/hooks/useScroll";

export default function Portfolio() {
  const { showScrollTop, isScrolled, scrollToSection, scrollToTop } = useScroll();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Optimized Navbar */}
      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />

      {/* Optimized Background - Using pseudo-elements */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
      </div>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Tools Section */}
      <ToolsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top Button */}
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
}
