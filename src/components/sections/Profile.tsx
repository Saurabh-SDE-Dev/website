"use client";

import { RevealText } from "@/components/animations/RevealText";
import { WHAT_I_BUILD, CORE_COMPETENCIES } from "@/data/skills";

export function Profile() {
  return (
    <div className="w-full bg-[var(--background)]">
      
      {/* 01 / PROFILE SECTION */}
      <section id="about" className="relative w-full py-20 md:py-32 border-t border-[var(--border)]">
        <div className="section-container">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            
            {/* LEFT - Headlines */}
            <div className="flex flex-col">
              <RevealText delay={0.1}>
                <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                  01 / PROFILE
                </p>
              </RevealText>
              
              <RevealText delay={0.2}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                  ENGINEERING<br />
                  WITH A FOCUS<br />
                  ON REAL SYSTEMS.
                </h2>
              </RevealText>
            </div>

            {/* RIGHT - Description & Info Blocks */}
            <div className="flex flex-col pt-2 md:pt-14">
              <RevealText delay={0.3}>
                <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-normal mb-12 max-w-xl">
                  Software Development Engineer with 3+ years of experience building scalable backend applications, microservices, AI/ML systems, cloud automation, OCR pipelines, and production platforms.
                </p>
              </RevealText>

              <RevealText delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                      EXPERIENCE
                    </p>
                    <p className="text-sm font-medium tracking-wide text-[var(--text-primary)]">
                      3+ YEARS
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                      FOCUS
                    </p>
                    <p className="text-sm font-medium tracking-wide text-[var(--text-primary)]">
                      BACKEND • AI/ML • CLOUD
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-2">
                      LOCATION
                    </p>
                    <p className="text-sm font-medium tracking-wide text-[var(--text-primary)]">
                      MUMBAI, INDIA
                    </p>
                  </div>
                </div>
              </RevealText>
            </div>
            
          </div>

          {/* WHAT I BUILD */}
          <div className="mt-24 md:mt-32 pt-12 border-t border-[var(--border)]">
            <RevealText delay={0.1}>
              <h3 className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-12">
                WHAT I BUILD
              </h3>
            </RevealText>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              {WHAT_I_BUILD.map((area, index) => (
                <RevealText key={area.id} delay={0.2 + (index * 0.1)}>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold tracking-wide text-[var(--text-primary)] mb-4">
                      {area.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </RevealText>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 02 / CORE COMPETENCIES SECTION */}
      <section className="relative w-full py-20 md:py-32 border-t border-[var(--border)]">
        <div className="section-container">
          
          <div className="mb-16 md:mb-24">
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                02 / CORE COMPETENCIES
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                THE AREAS<br />
                I WORK IN.
              </h2>
            </RevealText>
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {CORE_COMPETENCIES.map((category, catIndex) => (
              <div key={category.id} className="relative group">
                
                {/* Optional Subtle connection line (only on desktop between categories) */}
                {catIndex < CORE_COMPETENCIES.length - 1 && (
                  <div className="hidden md:block absolute left-4 top-16 bottom-[-4rem] w-px bg-[var(--border)] z-0" />
                )}

                <RevealText delay={0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 relative z-10">
                    
                    {/* Category Title */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-3">
                      <div className="flex items-center gap-4">
                        <div className="hidden md:block w-2 h-2 rounded-full bg-[var(--text-tertiary)] group-hover:bg-[var(--accent)] transition-colors duration-300" />
                        <h3 className="text-xs font-mono tracking-widest text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] uppercase transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Technical Matrix */}
                    <div className="col-span-1 md:col-span-8 lg:col-span-9">
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <RevealText 
                            key={tech} 
                            delay={0.1 + (techIndex * 0.05)} 
                            direction="none" // Just fade in to avoid jitter in the grid
                          >
                            <div className="relative cursor-default group/tech py-1">
                              <span className="text-sm md:text-base font-medium tracking-wide text-[var(--text-secondary)] group-hover/tech:text-[var(--text-primary)] transition-colors duration-300">
                                {tech}
                              </span>
                              {/* Accent Underline on hover */}
                              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--accent)] group-hover/tech:w-full transition-all duration-300 ease-out" />
                            </div>
                          </RevealText>
                        ))}
                      </div>
                    </div>

                  </div>
                </RevealText>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
