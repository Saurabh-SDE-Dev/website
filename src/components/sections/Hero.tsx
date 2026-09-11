"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { useWebGL } from "@/hooks/useWebGL";
import { HERO_CONTENT } from "@/data/hero";

const HeroSystemStructure = dynamic(
  () => import("@/components/3d/HeroSystemStructure"),
  { ssr: false }
);

export function Hero() {
  const isWebGLSupported = useWebGL();
  const { scrollY } = useScroll();

  // Scroll animations for storytelling parallax
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const modelX = useTransform(scrollY, [0, 1000], [0, 300]);
  const modelOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);

  return (
    <section 
      id="home" 
      className="theme-dark relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] mt-20">
        
        {/* Left: Typography & Content */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-start pt-10 lg:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="editorial-label mb-8">
              {HERO_CONTENT.greeting}
            </p>
            <h1 className="editorial-heading mb-6 tracking-tighter">
              {HERO_CONTENT.name.split(" ")[0]}<br />
              <span className="text-[#a0a0b0]">{HERO_CONTENT.name.split(" ")[1]}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-[#ffffff] mb-8">
              {HERO_CONTENT.role}
            </h2>
            <p className="text-base text-[#888888] max-w-md leading-relaxed mb-12">
              {HERO_CONTENT.headline}
            </p>

            <div className="flex items-center gap-6">
              <a 
                href="#contact"
                className="px-8 py-4 bg-white text-black text-xs font-semibold tracking-wide rounded hover:bg-gray-200 transition-colors"
              >
                CONTACT ME
              </a>
              <a 
                href="#work"
                className="px-8 py-4 border border-white/20 text-white text-xs font-semibold tracking-wide rounded hover:border-white/50 transition-colors"
              >
                VIEW WORK
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Premium 3D Object */}
        <motion.div 
          style={{ x: modelX, opacity: modelOpacity }}
          className="relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center"
        >
          {isWebGLSupported && (
            <Canvas
              camera={{ position: [0, 0, 6], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
              className="w-full h-full"
            >
              <HeroSystemStructure scrollYProgress={scrollY} />
            </Canvas>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="editorial-label text-[10px]">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
