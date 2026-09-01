"use client";

import { RevealText } from "@/components/animations/RevealText";
import { HeroSystemStructure } from "@/components/3d/HeroSystemStructure";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden bg-[var(--background)]">
      
      <div className="section-container relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* LEFT COLUMN: Typography (70% width on desktop) */}
        <div className="w-full md:w-[70%] flex flex-col z-20">
          
          <RevealText delay={0.1} direction="up">
            <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase mb-6">
              SAURABH SONALKAR <span className="opacity-50 mx-2">/</span> SOFTWARE DEVELOPMENT ENGINEER
            </p>
          </RevealText>

          <RevealText delay={0.2} direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05] mb-8">
              BUILDING<br />
              SYSTEMS<br />
              THAT SCALE.
            </h1>
          </RevealText>
          
          <RevealText delay={0.3} direction="up">
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-normal max-w-lg mb-12">
              Software Development Engineer with 3+ years of experience building 
              scalable backend applications, microservices, AI/ML systems, 
              cloud automation, OCR pipelines, and production platforms.
            </p>
          </RevealText>
          
          {/* ACTION BUTTONS */}
          <RevealText delay={0.4} direction="up">
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <a 
                href="#work" 
                className="px-6 py-3 bg-[var(--text-primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-colors text-xs font-mono tracking-widest rounded-sm"
              >
                VIEW MY WORK
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--text-secondary)] transition-colors text-xs font-mono tracking-widest rounded-sm"
              >
                VIEW RESUME
              </a>
            </div>
          </RevealText>

          {/* METADATA (Desktop only here, rendered at bottom on mobile) */}
          {!isMobile && (
            <RevealText delay={0.5} direction="up">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <p className="text-[0.6rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  3+ YEARS EXPERIENCE
                </p>
                <p className="text-[0.6rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                  PYTHON / BACKEND / AI / CLOUD
                </p>
                <p className="text-[0.6rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                  MUMBAI, INDIA
                </p>
              </div>
            </RevealText>
          )}

        </div>

        {/* RIGHT COLUMN: 3D Visualization (30% width on desktop) */}
        <RevealText delay={0.6} direction="none" className="w-full md:w-[30%] h-[300px] md:h-[500px] flex items-center justify-center lg:justify-end z-10">
          <HeroSystemStructure />
        </RevealText>

        {/* METADATA (Mobile only here, rendered at bottom) */}
        {isMobile && (
          <RevealText delay={0.7} direction="up" className="w-full mt-8 pb-12 border-t border-[var(--border)] pt-8">
            <div className="flex flex-col gap-4">
              <p className="text-[0.6rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                3+ YEARS EXPERIENCE
              </p>
              <p className="text-[0.6rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                PYTHON / BACKEND / AI / CLOUD
              </p>
              <p className="text-[0.6rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                MUMBAI, INDIA
              </p>
            </div>
          </RevealText>
        )}

      </div>
      
    </section>
  );
}
