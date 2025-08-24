"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ViewportAnimation, slideLeft, slideRight } from "@/components/animations/ViewportAnimation";

import { socialLinks } from "@/data/social";

export function ContactSection() {

  return (
    <section id="contact" className="relative z-10 py-32 px-4">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <ViewportAnimation>
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-white tracking-tight leading-tight">
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'd love to hear about your
              project and discuss how we can work together.
            </p>
          </div>
        </ViewportAnimation>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form */}
          <ViewportAnimation
            variant={slideLeft}
            delay={0.1}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.03] rounded-3xl border border-white/10 p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wide">
                      Full Name
                    </label>
                    <Input
                      className="bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:bg-white/10 transition-all duration-200 h-14 text-base group-hover:border-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wide">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      className="bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:bg-white/10 transition-all duration-200 h-14 text-base group-hover:border-white/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wide">
                    Project Details
                  </label>
                  <Textarea
                    className="bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:bg-white/10 transition-all duration-200 min-h-32 text-base resize-none group-hover:border-white/20"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ transform: "scale3d(1.02, 1.02, 1)" }}
                    whileTap={{ transform: "scale3d(0.98, 0.98, 1)" }}
                    className="group relative w-full md:w-auto px-12 py-4 bg-white text-black font-medium rounded-xl transition-all duration-200 hover:bg-gray-100 overflow-hidden"
                    style={{ willChange: "transform" }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>
          </ViewportAnimation>

          {/* Contact Info */}
          <ViewportAnimation
            variant={slideRight}
            delay={0.2}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ transform: "translate3d(5px, 0, 0)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">work.om08@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.label}
                      initial={{
                        opacity: 0,
                        transform: "translate3d(0, 20px, 0)",
                      }}
                      whileInView={{
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                      }}
                      transition={{
                        delay: index * 0.05 + 0.3,
                        duration: 0.3,
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <Link
                        href={social.href}
                        className={`group flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-200 hover:scale-105 ${social.color}`}
                        style={{ willChange: "transform" }}
                      >
                        <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200 font-medium">
                          {social.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </ViewportAnimation>
        </div>
      </div>
    </section>
  );
}
