"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { EXPERIENCE_DATA } from "@/data/experience";
import { useWebGL } from "@/hooks/useWebGL";

const DataStream = dynamic(
  () => import("@/components/3d/DataStream").then(mod => mod.DataStream),
  { ssr: false }
);

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWebGLSupported = useWebGL();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate active index based on scroll progress
  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      // Divide the scroll space evenly among the experiences
      const segment = 1 / EXPERIENCE_DATA.length;
      let newIndex = Math.floor(latest / segment);
      if (newIndex >= EXPERIENCE_DATA.length) {
        newIndex = EXPERIENCE_DATA.length - 1;
      }
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
  }, [smoothProgress, activeIndex]);

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="bg-ambient-indigo relative w-full"
      style={{ height: `${EXPERIENCE_DATA.length * 100}vh` }} // Make section tall enough to scroll through
    >
      {/* 3D Background Data Stream (Fixed while scrolling section) */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
        {isWebGLSupported && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: false, alpha: true }}
            className="w-full h-full opacity-60"
          >
            <DataStream />
          </Canvas>
        )}

        {/* Content Container (Sticky) */}
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center">
          <div className="section-container w-full">
            
            {/* Header */}
            <div className="absolute top-24 left-0 w-full px-6 md:px-12 lg:px-20">
              <div className="flex items-center gap-6">
                <p className="editorial-label">02 — EXPERIENCE</p>
                <div className="h-[1px] w-24 bg-[#F5F7FA]/10" />
              </div>
            </div>

            {/* Desktop Layout: Left (Year), Center (Timeline), Right (Details) */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-8 md:gap-16 items-center">
              
              {/* Left: Huge Year */}
              <div className="hidden md:flex justify-end pr-8">
                <motion.h2 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[clamp(4rem,8vw,6rem)] font-bold tracking-tighter text-[#E8EDF3] leading-none"
                >
                  {EXPERIENCE_DATA[activeIndex]?.period.split(" ")[0] || "2024"}
                </motion.h2>
              </div>

              {/* Center: Timeline line */}
              <div className="hidden md:flex relative h-[60vh] w-[2px] bg-[#181D24] justify-center">
                {/* Progress fill */}
                <motion.div 
                  className="absolute top-0 w-full bg-gradient-to-b from-[#3B82F6] to-[#6366F1]"
                  style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                />
                
                {/* Active Node Indicator */}
                <div 
                  className="absolute w-4 h-4 rounded-full bg-[#0B0D10] border-2 border-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-500"
                  style={{ top: `${(activeIndex / Math.max(1, EXPERIENCE_DATA.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}
                />
              </div>

              {/* Right: Active Experience Content */}
              <div className="relative h-[60vh] flex flex-col justify-center">
                {EXPERIENCE_DATA.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={item.id}
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 1 : 0, 
                        y: isActive ? 0 : 20,
                        pointerEvents: isActive ? 'auto' : 'none',
                        position: isActive ? 'relative' : 'absolute'
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex flex-col gap-6"
                    >
                      <div className="md:hidden">
                        <p className="text-sm font-mono tracking-widest text-[#3B82F6] mb-2">{item.period}</p>
                      </div>
                      
                      <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#F5F7FA]">
                        {item.company}
                      </h3>
                      
                      <h4 className="text-xl font-medium text-[#22D3EE]">
                        {item.role}
                      </h4>
                      
                      <p className="text-base text-[#9CA3AF] leading-relaxed max-w-xl">
                        {item.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-3 mt-4">
                        {item.technologies.slice(0, 6).map(tech => (
                          <span key={tech} className="text-xs font-mono text-[#F5F7FA] bg-[#181D24] px-4 py-2 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
