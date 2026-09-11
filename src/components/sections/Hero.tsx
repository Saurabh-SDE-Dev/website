"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { useWebGL } from "@/hooks/useWebGL";
import { HERO_CONTENT } from "@/data/hero";

const IdentityCore = dynamic(
  () => import("@/components/3d/IdentityCore").then(mod => mod.IdentityCore),
  { ssr: false }
);

const SceneLighting = dynamic(
  () => import("@/components/3d/SceneLighting").then(mod => mod.SceneLighting),
  { ssr: false }
);

export function Hero() {
  const isWebGLSupported = useWebGL();
  const { scrollY } = useScroll();

  // Scroll animations for storytelling parallax
  const textY = useTransform(scrollY, [0, 1000], [0, -150]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const modelX = useTransform(scrollY, [0, 1000], [0, 200]);
  const modelOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);

  return (
    <section 
      id="home" 
      className="bg-graphite relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Subtle ambient light in the background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ambient-blue rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none" />

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
            <h1 className="editorial-heading mb-6">
              {HERO_CONTENT.name.split(" ")[0]}<br />
              <span className="text-[#9CA3AF]">{HERO_CONTENT.name.split(" ")[1]}</span>
            </h1>
            
            <div className="flex flex-col gap-2 mb-8">
              <h2 className="text-xl md:text-2xl font-medium tracking-tight text-[#E8EDF3]">
                {HERO_CONTENT.role}
              </h2>
              <p className="text-sm font-mono tracking-widest text-[#3B82F6] uppercase">
                AI / ML • Backend Engineering • Cloud Systems
              </p>
            </div>

            <p className="text-base text-[#9CA3AF] max-w-md leading-relaxed mb-12">
              {HERO_CONTENT.headline}
            </p>

            <div className="flex items-center gap-6">
              <a 
                href="#contact"
                className="group relative px-8 py-4 bg-[#F5F7FA] text-[#0B0D10] text-xs font-bold tracking-widest uppercase overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  CONTACT ME
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-[#E8EDF3] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              <a 
                href="#work"
                className="group px-8 py-4 border border-[rgba(245,247,250,0.2)] text-[#F5F7FA] text-xs font-bold tracking-widest uppercase hover:border-[rgba(245,247,250,0.5)] transition-colors"
              >
                VIEW WORK
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Digital Core 3D Object */}
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
              <SceneLighting />
              <IdentityCore />
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
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#F5F7FA]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
