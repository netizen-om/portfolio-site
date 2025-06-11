"use client"

import { useEffect } from "react"

export default function TouchDetector() {
  useEffect(() => {
    // Detect touch devices
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0
    }

    if (isTouchDevice()) {
      document.documentElement.classList.add("touch")
    }
  }, [])

  return null
}
