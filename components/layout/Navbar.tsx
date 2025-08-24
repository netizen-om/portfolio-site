"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}

import { socialLinks } from "@/data/social";
import { navLinks } from "@/data/navigation";

export function Navbar({ isScrolled, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, transform: "translate3d(0, -100%, 0)" }}
      animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/90" : "bg-transparent"
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        willChange: "background-color, backdrop-filter",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-white tracking-tight cursor-pointer"
            whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ willChange: "transform" }}
          >
            OM.
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, transform: "translate3d(0, -8px, 0)" }}
                animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group text-sm font-medium tracking-wide"
                whileHover={{ transform: "translate3d(0, -2px, 0)" }}
                style={{ willChange: "transform" }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-200 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, transform: "scale3d(0, 0, 1)" }}
                  animate={{ opacity: 1, transform: "scale3d(1, 1, 1)" }}
                  transition={{ delay: index * 0.05 + 0.3, duration: 0.2 }}
                >
                  <Link
                    href={social.href}
                    className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    style={{ willChange: "transform" }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}

            <div className="w-px h-6 bg-gray-600 mx-2" />

            <motion.div
              initial={{ opacity: 0, transform: "translate3d(10px, 0, 0)" }}
              animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1dEnxuqddcRQcFXhV5FocNzzX5ClrtC59/view?usp=drive_link"
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-all duration-200 rounded-lg text-sm font-medium hover:bg-white/5"
              >
                <FileText className="w-4 h-4" />
                Resume
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleMenuToggle}
            className="md:hidden w-9 h-9 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200"
            whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, transform: "scale3d(1, 0, 1)" }}
            animate={{ opacity: 1, transform: "scale3d(1, 1, 1)" }}
            exit={{ opacity: 0, transform: "scale3d(1, 0, 1)" }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden mt-4 pt-4 border-t border-white/10 bg-black/95 rounded-lg origin-top"
            style={{
              backdropFilter: "blur(12px)",
              willChange: "transform, opacity",
            }}
          >
            <div className="flex flex-col space-y-4 px-4 pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left py-2 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
