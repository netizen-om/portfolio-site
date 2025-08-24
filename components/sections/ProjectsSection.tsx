"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, Code } from "lucide-react";
import { ViewportAnimation, slideLeft, slideRight } from "@/components/animations/ViewportAnimation";

import { projects } from "@/data/projects";

export function ProjectsSection() {

  const ProjectCard = ({ project, variant }: { project: any; variant: any }) => (
    <ViewportAnimation variant={variant} delay={0.1 * project.id}>
      <motion.div
        whileHover={{ transform: "scale3d(1.01, 1.01, 1)" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="group bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-200 p-8"
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <div className="relative">
              <div className="flex gap-3 lg:absolute lg:-top-2 lg:-right-2 mb-4 lg:mb-0">
                <Link href={project.githubUrl} target="_blank">
                  <motion.button
                    whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                    whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                    className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                    style={{ willChange: "transform" }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.button>
                </Link>
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank">
                    <motion.button
                      whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                      whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                      className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                      style={{ willChange: "transform" }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.button>
                  </Link>
                )}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: string) => (
                <motion.div
                  key={tech}
                  whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                  className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20"
                  style={{ willChange: "transform" }}
                >
                  <Code className="w-4 h-4 text-gray-300" />
                  <span className="text-gray-300 text-sm font-medium">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex-1 lg:max-w-md">
            <motion.div
              className="relative"
              whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{ willChange: "transform" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl transition-all duration-300`} />
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="relative z-10 w-full h-64 object-cover rounded-2xl border border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </ViewportAnimation>
  );

  return (
    <section id="projects" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ViewportAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Check out some of my work!
          </h2>
        </ViewportAnimation>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={index % 2 === 0 ? slideLeft : slideRight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
