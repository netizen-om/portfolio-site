"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { ViewportAnimation } from "@/components/animations/ViewportAnimation";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

import { socialLinks } from "@/data/social";
import { footerNavLinks } from "@/data/navigation";

export function Footer({ scrollToSection }: FooterProps) {

  return (
    <ViewportAnimation>
      <footer className="relative z-10 bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {footerNavLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{
                      opacity: 0,
                      transform: "translate3d(-20px, 0, 0)",
                    }}
                    whileInView={{
                      opacity: 1,
                      transform: "translate3d(0, 0, 0)",
                    }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left flex items-center gap-2 group"
                    whileHover={{ transform: "translate3d(5px, 0, 0)" }}
                    style={{ willChange: "transform" }}
                  >
                    <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, transform: "scale3d(0, 0, 1)" }}
                      whileInView={{
                        opacity: 1,
                        transform: "scale3d(1, 1, 1)",
                      }}
                      transition={{
                        delay: index * 0.05 + 0.1,
                        duration: 0.2,
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <Link
                        href={social.href}
                        className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200"
                        style={{ willChange: "transform" }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-400">
              © Om Borisagar 2025 – All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </ViewportAnimation>
  );
}
