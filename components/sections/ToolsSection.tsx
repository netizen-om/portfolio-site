"use client";

import React from "react";
import { motion } from "framer-motion";
import { ViewportAnimation, StaggerContainer } from "@/components/animations/ViewportAnimation";
import { frontendTechs, backendTechs, otherTechs } from "@/data/technologies";

export function ToolsSection() {

  const TechCard = ({ tech }: { tech: any }) => {
    const IconComponent = tech.icon;
    return (
      <motion.div
        whileHover={{
          transform: "translate3d(0, -5px, 0) scale3d(1.02, 1.02, 1)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 30,
          },
        }}
        className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/10"
        style={{ willChange: "transform" }}
      >
        <IconComponent className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-200 mx-auto mb-3" />
        <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 text-center font-medium">
          {tech.name}
        </p>
      </motion.div>
    );
  };

  return (
    <section id="tools" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ViewportAnimation>
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white tracking-tight">
            TOOLS I'M USING.
          </h2>
        </ViewportAnimation>

        <div className="space-y-12">
          {/* Frontend */}
          <ViewportAnimation delay={0.1}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Frontend</h3>
              <StaggerContainer
                className="flex flex-wrap justify-center gap-8"
                staggerDelay={0.06}
              >
                {frontendTechs.map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </StaggerContainer>
            </div>
          </ViewportAnimation>

          {/* Backend */}
          <ViewportAnimation delay={0.2}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Backend</h3>
              <StaggerContainer
                className="flex flex-wrap justify-center gap-8"
                staggerDelay={0.06}
              >
                {backendTechs.map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </StaggerContainer>
            </div>
          </ViewportAnimation>

          {/* Other */}
          <ViewportAnimation delay={0.3}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Other</h3>
              <StaggerContainer
                className="flex flex-wrap justify-center gap-8"
                staggerDelay={0.06}
              >
                {otherTechs.map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </StaggerContainer>
            </div>
          </ViewportAnimation>
        </div>
      </div>
    </section>
  );
}
