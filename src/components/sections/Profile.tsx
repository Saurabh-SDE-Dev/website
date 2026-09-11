"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { PROFILE_DATA } from "@/data/profile";
import { CORE_COMPETENCIES } from "@/data/skills";

const ProfileVisual3D = dynamic(
  () => import("@/components/3d/ScrollVisuals").then(mod => mod.ProfileVisual3D),
  { ssr: false }
);

export function Profile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="theme-offwhite relative w-full py-32 md:py-48 overflow-hidden"
    >
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-24 flex items-center gap-6">
          <p className="editorial-label">01 — PROFILE</p>
          <div className="h-[1px] w-24 bg-black/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Large Statement & 3D */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div style={{ y: y1 }}>
              <h2 className="editorial-subheading text-[#111111] mb-8 max-w-2xl leading-tight">
                {PROFILE_DATA.headline}
              </h2>
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="mt-12 hidden lg:block w-full max-w-sm">
              <ProfileVisual3D />
            </motion.div>
          </div>

          {/* Right: Details & Skills */}
          <div className="lg:col-span-5 flex flex-col gap-16 lg:pt-24">
            
            {/* About Text */}
            <motion.div style={{ y: y2 }}>
              <p className="text-base text-[#555555] leading-relaxed mb-6">
                {PROFILE_DATA.summary}
              </p>
              <p className="text-base text-[#555555] leading-relaxed">
                {PROFILE_DATA.philosophy}
              </p>
            </motion.div>

            {/* Clean Skills List */}
            <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
              <h3 className="editorial-label text-[#111111]">CORE EXPERTISE</h3>
              <div className="flex flex-col gap-6">
                {CORE_COMPETENCIES.map((category) => (
                  <div key={category.id} className="border-t border-black/10 pt-4">
                    <h4 className="text-xs font-bold text-[#111111] mb-3 uppercase tracking-wider">{category.title}</h4>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {category.technologies.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
