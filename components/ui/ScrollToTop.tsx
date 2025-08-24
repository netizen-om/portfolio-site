"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

export function ScrollToTop({ showScrollTop, scrollToTop }: ScrollToTopProps) {
  if (!showScrollTop) return null;

  return (
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
  );
}
