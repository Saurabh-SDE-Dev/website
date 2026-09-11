"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { CONTACT_INFO } from "@/data/contact";
import { useWebGL } from "@/hooks/useWebGL";

const IdentityCore = dynamic(
  () => import("@/components/3d/IdentityCore").then(mod => mod.IdentityCore),
  { ssr: false }
);

const SceneLighting = dynamic(
  () => import("@/components/3d/SceneLighting").then(mod => mod.SceneLighting),
  { ssr: false }
);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWebGLSupported = useWebGL();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // As user scrolls into Contact, the core moves forward and CTA fades in
  const coreScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const coreY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="bg-graphite relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ambient-indigo rounded-full blur-[150px] opacity-30 mix-blend-screen pointer-events-none" />

      {/* 3D Background (Cinematic Finale) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-60">
        {isWebGLSupported && (
          <motion.div style={{ scale: coreScale, y: coreY }} className="w-full h-[120vh]">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <SceneLighting />
              <IdentityCore />
            </Canvas>
          </motion.div>
        )}
      </div>

      <div className="section-container relative z-10 w-full flex flex-col items-center justify-center text-center mt-20">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="flex flex-col items-center">
          
          <div className="mb-12 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-[#F5F7FA]/20" />
            <p className="editorial-label text-[#F5F7FA]">06 — CONNECT</p>
            <div className="h-[1px] w-12 bg-[#F5F7FA]/20" />
          </div>
          
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tighter leading-[0.9] text-[#F5F7FA] mb-12">
            LET&apos;S BUILD <br />
            <span className="text-[#3B82F6]">SOMETHING</span> <br />
            INTELLIGENT.
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-8">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="group relative px-10 py-5 bg-[#F5F7FA] text-[#0B0D10] text-xs font-bold tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-4">
                GET IN TOUCH
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-[#E8EDF3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-12 mt-32">
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm font-mono tracking-wide text-[#9CA3AF] hover:text-[#22D3EE] transition-colors"
            >
              EMAIL
            </a>
            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono tracking-wide text-[#9CA3AF] hover:text-[#22D3EE] transition-colors"
            >
              LINKEDIN
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
