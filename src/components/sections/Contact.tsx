"use client";

import { RevealText } from "@/components/animations/RevealText";
import { CONTACT_INFO } from "@/data/contact";

function ContactVisual() {
  return (
    <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-[0.03] pointer-events-none overflow-hidden flex items-end justify-end">
      {/* Abstract thin grid / system node visualization */}
      <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="320" cy="320" r="4" fill="currentColor" className="animate-pulse" />
        <circle cx="160" cy="240" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <path d="M 160 240 L 320 320" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 md:py-36 lg:py-48 border-t border-[var(--border)] bg-[var(--background)] overflow-hidden">
      
      <ContactVisual />

      <div className="section-container relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-16 md:gap-24">
          
          {/* Left Column: Headline and CTAs */}
          <div className="flex-1 flex flex-col">
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-8 md:mb-12">
                09 / CONTACT
              </p>
            </RevealText>
            
            <RevealText delay={0.2}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05] mb-8">
                LET&apos;S BUILD<br />
                SOMETHING<br />
                USEFUL.
              </h2>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md mb-12 md:mb-16">
                Interested in backend engineering, AI/ML, cloud systems, or building reliable software? Let&apos;s connect.
              </p>
            </RevealText>

            <RevealText delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                
                {/* Primary CTA */}
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-white font-medium tracking-wide text-sm rounded-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    GET IN TOUCH
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out">→</span>
                  </span>
                  {/* Subtle background shift */}
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>

                {/* Secondary CTA */}
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] font-medium tracking-wide text-sm rounded-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  VIEW RESUME
                  <span className="ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent)]">→</span>
                </a>

              </div>
            </RevealText>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full md:w-64 lg:w-80 shrink-0 flex flex-col gap-12 pt-4">
            
            <RevealText delay={0.5}>
              <div className="flex flex-col">
                <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-4">
                  EMAIL
                </p>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm md:text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </RevealText>

            <RevealText delay={0.6}>
              <div className="flex flex-col">
                <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-4">
                  LINKEDIN
                </p>
                <a 
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
                >
                  Saurabh Sonalkar
                </a>
              </div>
            </RevealText>

          </div>
        </div>

        <RevealText delay={0.7}>
          <div className="mt-32 md:mt-40">
            <p className="text-[0.55rem] md:text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase max-w-sm">
              OPEN TO BUILDING RELIABLE SOFTWARE AND SOLVING HARD PROBLEMS.
            </p>
          </div>
        </RevealText>

      </div>
    </section>
  );
}
