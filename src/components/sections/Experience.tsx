"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/animations/RevealText";
import { EXPERIENCE_DATA } from "@/data/experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Experience() {
  // WDIPL (index 0) expanded by default, Skandha (index 1) collapsed by default
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    wdipl: true,
    skandha: false,
  });

  const prefersReducedMotion = useReducedMotion();

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="relative w-full py-20 md:py-32 lg:py-40 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <RevealText delay={0.1}>
            <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
              03 / EXPERIENCE
            </p>
          </RevealText>
          <RevealText delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-8">
              BUILDING<br />
              REAL SYSTEMS<br />
              IN PRODUCTION.
            </h2>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
              Building backend systems, AI/ML workflows, cloud automation, and production engineering solutions across different domains.
            </p>
          </RevealText>
        </div>

        {/* Experience Entries */}
        <div className="flex flex-col gap-14 md:gap-24 lg:gap-32 mb-24 md:mb-40">
          {EXPERIENCE_DATA.map((item, index) => {
            const isExpanded = expandedItems[item.id] || false;
            
            return (
              <div key={item.id} className="relative group/entry">
                
                {/* Visual progression line between items (desktop only) */}
                {index === 0 && (
                  <div className="hidden md:block absolute top-[100%] left-[8.5%] bottom-[-8rem] w-px bg-[var(--border)] z-0 opacity-50" />
                )}

                <RevealText delay={0.1 + (index * 0.1)} direction="up">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20">
                    
                    {/* LEFT COLUMN: Dates (Desktop) */}
                    <div className="w-full md:w-48 lg:w-64 shrink-0 mt-1 md:mt-2">
                      <p className="text-xs md:text-sm font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                        {item.period}
                      </p>
                    </div>

                    {/* RIGHT COLUMN: Content */}
                    <div className="flex-1 flex flex-col items-start w-full relative z-10">
                      
                      {/* Interactive Header */}
                      <button 
                        onClick={() => toggleExpand(item.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`exp-content-${item.id}`}
                        className="w-full text-left group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm pb-4"
                      >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-primary)] group-hover/btn:text-white transition-colors duration-300 relative inline-block mb-3">
                          {item.company}
                          {/* Accent line on hover */}
                          <div className="absolute left-0 bottom-0 w-0 h-px bg-[var(--accent)] group-hover/btn:w-full transition-all duration-500 ease-out" />
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                          <p className="text-base md:text-lg font-medium text-[var(--text-secondary)] group-hover/btn:text-[var(--text-primary)] transition-colors duration-300">
                            {item.role}
                          </p>
                          <span className="hidden sm:inline-block text-[var(--text-tertiary)]">—</span>
                          <p className="text-xs font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                            {item.location}
                          </p>
                        </div>
                        
                        {!isExpanded && (
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl mt-4">
                            {item.shortDescription}
                          </p>
                        )}
                        
                        <div className="mt-4 flex items-center gap-2 text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] group-hover/btn:text-[var(--accent)] transition-colors duration-300">
                          {isExpanded ? "− COLLAPSE" : "+ EXPAND DETAILS"}
                        </div>
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`exp-content-${item.id}`}
                            initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden w-full"
                          >
                            <div className="pt-8 flex flex-col gap-10">
                              
                              {/* Responsibilities */}
                              <div className="flex flex-col gap-4">
                                <h4 className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                                  RESPONSIBILITIES
                                </h4>
                                <ul className="flex flex-col gap-4">
                                  {item.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed flex items-start gap-3">
                                      <span className="text-[var(--text-tertiary)] mt-1.5 text-xs">▹</span>
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Technologies */}
                              <div className="flex flex-col gap-4">
                                <h4 className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                                  TECHNOLOGIES
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.technologies.map(tech => (
                                    <span 
                                      key={tech} 
                                      className="text-xs font-mono tracking-widest px-3 py-1.5 border border-[var(--border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors duration-300 cursor-default"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Related Work */}
                              {item.relatedWork && item.relatedWork.length > 0 && (
                                <div className="flex flex-col gap-4">
                                  <h4 className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                                    RELATED WORK
                                  </h4>
                                  <div className="flex flex-col gap-3">
                                    {item.relatedWork.map(work => (
                                      <a 
                                        key={work.label} 
                                        href={work.href} 
                                        className="text-xs font-mono tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-3 w-fit group/link"
                                      >
                                        <span className="text-[var(--text-tertiary)] group-hover/link:translate-x-1 transition-transform">→</span>
                                        {work.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                </RevealText>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
