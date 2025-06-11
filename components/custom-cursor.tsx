"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseOut = () => setIsVisible(false)

    // Add event listeners for mouse movement
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseout", handleMouseOut)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, input, textarea, [role='button'], .cursor-hover")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseout", handleMouseOut)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 5,
        y: mousePosition.y - 5,
        scale: isHovering ? 1.5 : 1,
        opacity: isHovering ? 0.8 : 1,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.15,
      }}
    >
      <div className="w-3 h-3 rounded-full border border-white bg-white/50" />
    </motion.div>
  )
}
