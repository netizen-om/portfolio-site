"use client"

import React from "react"

import { useState, useEffect, useCallback } from "react"
import ZustandIcon from "@/components/icons/ZustandIcon";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
  Code,
  Database,
  Globe,
  Server,
  Menu,
  X,
  ArrowUp,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BiLogoTypescript, BiSolidVector } from "react-icons/bi";
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiShadcnui, SiTailwindcss, SiReactquery, SiMaterialdesign, SiDaisyui, SiNodedotjs, SiMongodb, SiMongoose, SiExpress, SiPostgresql, SiMysql, SiPrisma, SiDrizzle, SiRedis, SiDocker, SiSocketdotio, SiWebrtc, SiServerless, SiClerk, SiGit, SiGithub, SiVscodium, SiLangchain,   } from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";


// Ultra-lightweight animation variants - GPU optimized
const fadeIn = {
  initial: { opacity: 0, transform: "translate3d(0, 15px, 0)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
}

const scaleIn = {
  initial: { opacity: 0, transform: "translate3d(0, 0, 0) scale3d(0.95, 0.95, 1)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)" },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
}

const slideLeft = {
  initial: { opacity: 0, transform: "translate3d(-20px, 0, 0)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
}

const slideRight = {
  initial: { opacity: 0, transform: "translate3d(20px, 0, 0)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
}

// Optimized viewport animation component
function ViewportAnimation({
  children,
  className = "",
  variant = fadeIn,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  variant?: any
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
    amount: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={isInView ? variant.animate : variant.initial}
      transition={{ ...variant.transition, delay }}
      className={className}
      style={{ willChange: isInView ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation container
function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-60px",
    amount: 0.1,
  })

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, transform: "translate3d(0, 12px, 0)" }}
          animate={
            isInView
              ? { opacity: 1, transform: "translate3d(0, 0, 0)" }
              : { opacity: 0, transform: "translate3d(0, 12px, 0)" }
          }
          transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
            delay: index * staggerDelay,
          }}
          style={{ willChange: isInView ? "auto" : "transform, opacity" }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Optimized scroll handler with RAF throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setShowScrollTop(scrollY > 400)
    setIsScrolled(scrollY > 50)
  }, [])

  useEffect(() => {
    let rafId: number
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "tools" },
    { name: "Work", href: "projects" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Optimized Navbar */}
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
              {[
                { name: "About", href: "tools" },
                { name: "Projects", href: "projects" },
                { name: "Tools", href: "tools" },
                { name: "Contact", href: "contact" },
              ].map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, transform: "translate3d(0, -8px, 0)" }}
                  animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                  onClick={() => scrollToSection(link.href)}
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
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, index) => {
                const IconComponent = social.icon
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
                )
              })}

              <div className="w-px h-6 bg-gray-600 mx-2" />

              <motion.div
                initial={{ opacity: 0, transform: "translate3d(10px, 0, 0)" }}
                animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link
                  href="#"
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200"
              whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                {[
                  { name: "About", href: "tools" },
                  { name: "Projects", href: "projects" },
                  { name: "Tools", href: "tools" },
                  { name: "Contact", href: "contact" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
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

      {/* Optimized Background - Using pseudo-elements */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
            animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
            style={{ willChange: "transform, opacity" }}
          >
            Om Borisagar
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
            animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
            animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern technologies. Passionate about clean code, innovative
            solutions, and user-centric design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
            animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
            transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16 cursor-pointer"
            onClick={() => scrollToSection("tools")}
            whileHover={{ transform: "translate3d(0, -2px, 0)" }}
            style={{ willChange: "transform" }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400 hover:text-white transition-colors duration-200 animate-float" />
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
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
                <StaggerContainer className="flex flex-wrap justify-center gap-8" staggerDelay={0.06}>
                  {[
                    { name: "TypeScript", icon: SiTypescript  },
                    { name: "JavaScript", icon: SiJavascript },
                    { name: "Material UI", icon: SiMaterialdesign },
                    { name: "Daisy UI", icon: SiDaisyui },
                    { name: "Shadcn UI", icon: SiShadcnui  },
                    // { name: "Zustand", icon: GiBearFace },
                    { name: "Tailwind CSS", icon: SiTailwindcss },
                    { name: "React Query", icon: SiReactquery },
                    { name: "Next.js", icon: SiNextdotjs },
                    { name: "React", icon: SiReact },
                  ].map((tech) => {
                    const IconComponent = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{
                          transform: "translate3d(0, -5px, 0) scale3d(1.02, 1.02, 1)",
                          transition: { type: "spring", stiffness: 400, damping: 30 },
                        }}
                        className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/10"
                        style={{ willChange: "transform" }}
                      >
                        <IconComponent className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-200 mx-auto mb-3" />
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 text-center font-medium">
                          {tech.name}
                        </p>
                      </motion.div>
                    )
                  })}
                </StaggerContainer>
              </div>
            </ViewportAnimation>

            {/* Backend */}
            <ViewportAnimation delay={0.2}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Backend</h3>
                <StaggerContainer className="flex flex-wrap justify-center gap-8" staggerDelay={0.06}>
                  {[
                    { name: "Nextjs", icon: SiNextdotjs },
                    { name: "Node.js", icon: SiNodedotjs },
                    { name: "MongoDB", icon: SiMongodb },
                    { name: "Mongoose", icon: SiMongoose },
                    { name: "Express", icon: SiExpress },
                    { name: "PostgreSQL", icon: SiPostgresql },
                    { name: "NeonDB", icon: () => <img src="neondb.svg" 
                      className="w-12 h-12 object-contain mx-auto mb-3 brightness-50 contrast--150" alt="Neon"/> },
                    { name: "MySQL", icon: SiMysql },
                    { name: "Prisma", icon: SiPrisma },
                    { name: "Drizzle", icon: SiDrizzle },
                    { name: "Redis", icon: SiRedis },
                    { name: "Docker", icon: SiDocker },
                    { name: "Socket.io", icon: SiSocketdotio },
                    { name: "WebRTC", icon: SiWebrtc },
                    { name: "Serverless", icon: SiServerless },
                    { name: "Langchain", icon: SiLangchain },
                    
                  ].map((tech) => {
                    const IconComponent = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{
                          transform: "translate3d(0, -5px, 0) scale3d(1.02, 1.02, 1)",
                          transition: { type: "spring", stiffness: 400, damping: 30 },
                        }}
                        className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/10"
                        style={{ willChange: "transform" }}
                      >
                        <IconComponent className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-200 mx-auto mb-3" />
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 text-center font-medium">
                          {tech.name}
                        </p>
                      </motion.div>
                    )
                  })}
                </StaggerContainer>
              </div>
            </ViewportAnimation>

            {/* Other */}
            <ViewportAnimation delay={0.3}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Other</h3>
                <StaggerContainer className="flex flex-wrap justify-center gap-8" staggerDelay={0.06}>
                  {[
                    { name: "GitHub", icon: SiGithub },
                    { name: "Git", icon: SiGit },
                  ].map((tech) => {
                    const IconComponent = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        whileHover={{
                          transform: "translate3d(0, -5px, 0) scale3d(1.02, 1.02, 1)",
                          transition: { type: "spring", stiffness: 400, damping: 30 },
                        }}
                        className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/10"
                        style={{ willChange: "transform" }}
                      >
                        <IconComponent className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-200 mx-auto mb-3" />
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 text-center font-medium">
                          {tech.name}
                        </p>
                      </motion.div>
                    )
                  })}
                </StaggerContainer>
              </div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ViewportAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Check out some of my work!</h2>
          </ViewportAnimation>

          <div className="space-y-8">
            {/* Project 1 */}
            <ViewportAnimation variant={slideLeft} delay={0.1}>
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
                        <motion.button
                          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                          whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                          className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                          style={{ willChange: "transform" }}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                          whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                          className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                          style={{ willChange: "transform" }}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Eldora UI</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      A comprehensive design system and component library built for modern web applications. Features
                      customizable components, dark mode support, and accessibility-first design principles.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["TypeScript", "React", "Tailwind"].map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                          className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20"
                          style={{ willChange: "transform" }}
                        >
                          <Code className="w-4 h-4 text-gray-300" />
                          <span className="text-gray-300 text-sm font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md">
                    <motion.div
                      className="relative"
                      whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ willChange: "transform" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transition-all duration-300" />
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Eldora UI Preview"
                        className="relative z-10 w-full h-64 object-cover rounded-2xl border border-white/20"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ViewportAnimation>

            {/* Project 2 */}
            <ViewportAnimation variant={slideRight} delay={0.2}>
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
                        <motion.button
                          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                          whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                          className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                          style={{ willChange: "transform" }}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                          whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                          className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                          style={{ willChange: "transform" }}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">VR Mall</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      An immersive virtual reality shopping experience that brings the mall to your home. Features 3D
                      product visualization, virtual try-ons, and seamless payment integration.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["React", "Next.js", "PostgreSQL"].map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                          className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20"
                          style={{ willChange: "transform" }}
                        >
                          <Code className="w-4 h-4 text-gray-300" />
                          <span className="text-gray-300 text-sm font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md">
                    <motion.div
                      className="relative"
                      whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ willChange: "transform" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl transition-all duration-300" />
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="VR Mall Preview"
                        className="relative z-10 w-full h-64 object-cover rounded-2xl border border-white/20"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ViewportAnimation>

            {/* Project 3 */}
            <ViewportAnimation variant={slideLeft} delay={0.3}>
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
                        <motion.button
                          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                          whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                          className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                          style={{ willChange: "transform" }}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
                          whileTap={{ transform: "scale3d(0.95, 0.95, 1)" }}
                          className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                          style={{ willChange: "transform" }}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">AI Content Studio</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Advanced AI-powered content creation platform with multiple templates, SEO optimization, and team
                      collaboration features. Streamlines content workflow for marketing teams.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["TypeScript", "Node.js", "MongoDB"].map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                          className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20"
                          style={{ willChange: "transform" }}
                        >
                          <Code className="w-4 h-4 text-gray-300" />
                          <span className="text-gray-300 text-sm font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md">
                    <motion.div
                      className="relative"
                      whileHover={{ transform: "scale3d(1.05, 1.05, 1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ willChange: "transform" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transition-all duration-300" />
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="AI Content Studio Preview"
                        className="relative z-10 w-full h-64 object-cover rounded-2xl border border-white/20"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <ViewportAnimation>
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">Contact</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light mb-8 text-white tracking-tight leading-tight">
                Let's Create
                <br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work
                together.
              </p>
            </div>
          </ViewportAnimation>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form */}
            <ViewportAnimation variant={slideLeft} delay={0.1} className="lg:col-span-3">
              <div className="bg-white/[0.03] rounded-3xl border border-white/10 p-8 md:p-12">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-400 mb-3 tracking-wide">Full Name</label>
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
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ transform: "translate3d(2px, 0, 0)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </motion.svg>
                      </span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </ViewportAnimation>

            {/* Contact Info */}
            <ViewportAnimation variant={slideRight} delay={0.2} className="lg:col-span-2 space-y-8">
              {/* Contact Methods */}
              <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ transform: "translate3d(5px, 0, 0)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ willChange: "transform" }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <p className="text-white">alex@example.com</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      icon: Linkedin,
                      href: "#",
                      label: "LinkedIn",
                      color: "hover:bg-blue-500/10 hover:border-blue-500/30",
                    },
                    {
                      icon: Twitter,
                      href: "#",
                      label: "Twitter",
                      color: "hover:bg-sky-500/10 hover:border-sky-500/30",
                    },
                    {
                      icon: Github,
                      href: "#",
                      label: "GitHub",
                      color: "hover:bg-gray-500/10 hover:border-gray-500/30",
                    },
                  ].map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, transform: "translate3d(0, 20px, 0)" }}
                        whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                        transition={{ delay: index * 0.05 + 0.3, duration: 0.3 }}
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
                    )
                  })}
                </div>
              </div>
            </ViewportAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ViewportAnimation>
        <footer className="relative z-10 bg-white/5 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, transform: "translate3d(-20px, 0, 0)" }}
                      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
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
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                  ].map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, transform: "scale3d(0, 0, 1)" }}
                        whileInView={{ opacity: 1, transform: "scale3d(1, 1, 1)" }}
                        transition={{ delay: index * 0.05 + 0.1, duration: 0.2 }}
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
                    )
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
              <p className="text-gray-400">© Om Borisagar 2025 – All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </ViewportAnimation>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, transform: "scale3d(0, 0, 1)" }}
          animate={{ opacity: 1, transform: "scale3d(1, 1, 1)" }}
          exit={{ opacity: 0, transform: "scale3d(0, 0, 1)" }}
          onClick={scrollToTop}
          whileHover={{ transform: "scale3d(1.1, 1.1, 1)" }}
          whileTap={{ transform: "scale3d(0.9, 0.9, 1)" }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
          style={{ willChange: "transform" }}
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </div>
  )
}
