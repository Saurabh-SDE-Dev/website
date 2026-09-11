"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { CORE_COMPETENCIES } from "@/data/skills";

export function Profile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="bg-charcoal relative w-full py-32 md:py-48 overflow-hidden"
    >
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-24 flex items-center gap-6">
          <p className="editorial-label">01 — PROFILE & SKILLS</p>
          <div className="h-[1px] w-24 bg-[#F5F7FA]/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Large Statement */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <motion.div style={{ y: y1 }}>
              <h2 className="editorial-subheading text-[#F5F7FA] mb-8 leading-tight">
                {PROFILE_DATA.headline}
              </h2>
              <p className="text-lg text-[#9CA3AF] leading-relaxed mb-6">
                {PROFILE_DATA.summary}
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed">
                {PROFILE_DATA.philosophy}
              </p>
            </motion.div>
          </div>

          {/* Right: Technical Clusters (Editorial Typography) */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-12 lg:pt-12">
            <motion.div style={{ y: y2 }} className="flex flex-col gap-12">
              {CORE_COMPETENCIES.map((category, index) => (
                <div key={category.id} className="group flex flex-col">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-[10px] font-mono text-[#3B82F6]">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-[#F5F7FA] uppercase group-hover:text-[#22D3EE] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm font-mono tracking-wide text-[#9CA3AF] leading-relaxed pl-8">
                    {category.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
