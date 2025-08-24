"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
          animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
          style={{ willChange: "transform, opacity" }}
        >
          Om Borisagar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
          animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
          animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting exceptional digital experiences with modern technologies.
          Passionate about clean code, innovative solutions, and user-centric
          design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
          animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full transition-all duration-200 hover:scale-105"
            style={{ willChange: "transform" }}
          >
            Get In Touch
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-16 cursor-pointer"
          onClick={() => scrollToSection("tools")}
          whileHover={{ transform: "translate3d(0, -2px, 0)" }}
          style={{ willChange: "transform" }}
        >
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 hover:text-white transition-colors duration-200 animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
