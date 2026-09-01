"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      requestAnimationFrame(() => setIsTouchDevice(true));
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      // Smooth lerping for the cursor
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      requestAnimationFrame(updateCursor);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    
    // Start animation loop
    const animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice || prefersReducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -ml-2 -mt-2 w-4 h-4 flex items-center justify-center mix-blend-difference"
    >
      {/* 
        Minimal cursor: 
        A small white dot that expands into a larger outlined circle on hover 
      */}
      <motion.div
        className="rounded-full border border-white flex items-center justify-center"
        animate={{
          width: isHovering ? 32 : 6,
          height: isHovering ? 32 : 6,
          backgroundColor: isHovering ? "transparent" : "rgba(255, 255, 255, 1)",
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15, ease: "linear" }}
      />
    </div>
  );
}
