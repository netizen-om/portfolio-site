"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Ultra-lightweight animation variants - GPU optimized
export const fadeIn = {
  initial: { opacity: 0, transform: "translate3d(0, 15px, 0)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    transform: "translate3d(0, 0, 0) scale3d(0.95, 0.95, 1)",
  },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)" },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
};

export const slideLeft = {
  initial: { opacity: 0, transform: "translate3d(-20px, 0, 0)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

export const slideRight = {
  initial: { opacity: 0, transform: "translate3d(20px, 0, 0)" },
  animate: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
};

// Optimized viewport animation component
export function ViewportAnimation({
  children,
  className = "",
  variant = fadeIn,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: any;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
    amount: 0.2,
  });

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
  );
}

// Staggered animation container
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-60px",
    amount: 0.1,
  });

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
  );
}
