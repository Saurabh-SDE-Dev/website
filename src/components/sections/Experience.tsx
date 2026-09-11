"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/experience";

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="theme-dark relative w-full py-32 md:py-48"
    >
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-24 flex items-center gap-6">
          <p className="editorial-label">02 — EXPERIENCE</p>
          <div className="h-[1px] w-24 bg-white/10" />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10">
            <motion.div 
              className="w-full bg-[#007aff]"
              style={{ height: timelineHeight }}
            />
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {EXPERIENCE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative w-full flex flex-col md:flex-row items-start group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-2 w-[9px] h-[9px] rounded-full bg-[#111114] border-2 border-white/20 transition-colors duration-500 group-hover:border-[#007aff] group-hover:shadow-[0_0_12px_rgba(0,122,255,0.5)] z-10" />

                  {/* Left Side (Date / Role on Desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-2'}`}>
                    <p className="editorial-label text-[#007aff] mb-4">{item.period}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">{item.company}</h3>
                    <p className="text-sm font-mono tracking-widest text-[#a0a0b0] uppercase mb-6">{item.role}</p>
                  </div>

                  {/* Right Side (Details on Desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 mt-6 md:mt-0 ${isEven ? 'md:pl-16' : 'md:pr-16 md:order-1 md:text-right'}`}>
                    <p className="text-base text-[#a0a0b0] leading-relaxed mb-8 max-w-lg ${!isEven && 'md:ml-auto'}">
                      {item.shortDescription}
                    </p>

                    <div className={`flex flex-col gap-3 ${!isEven && 'md:items-end'}`}>
                      {item.responsibilities.slice(0, 3).map((resp, i) => (
                        <p key={i} className="text-sm text-[#888888] leading-relaxed flex items-start gap-3 max-w-lg">
                          {isEven && <span className="text-[#007aff] mt-1 text-[10px]">■</span>}
                          <span>{resp}</span>
                          {!isEven && <span className="text-[#007aff] mt-1 text-[10px]">■</span>}
                        </p>
                      ))}
                    </div>

                    <div className={`flex flex-wrap gap-2 mt-8 ${!isEven && 'md:justify-end'}`}>
                      {item.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="text-[10px] font-mono tracking-widest text-[#666677] uppercase px-3 py-1 border border-white/10 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 5 && (
                        <span className="text-[10px] font-mono tracking-widest text-[#666677] uppercase px-3 py-1 border border-white/5 rounded-full">
                          +{item.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
