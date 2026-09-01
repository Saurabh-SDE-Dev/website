"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  return (
    <footer className="w-full bg-[var(--background)] border-t border-[var(--border)] pt-12 md:pt-16 pb-8">
      <div className="section-container">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-20 md:mb-24">
          
          {/* Left: Branding */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm md:text-base font-bold tracking-tight text-[var(--text-primary)]">
              SAURABH SONALKAR
            </h2>
            <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
              SOFTWARE DEVELOPMENT ENGINEER
            </p>
          </div>

          {/* Right/Center: Navigation */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
              <li>
                <a href="#about" className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] hover:text-[var(--text-primary)] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] hover:text-[var(--text-primary)] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#work" className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] hover:text-[var(--text-primary)] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  WORK
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] hover:text-[var(--text-primary)] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

        </div>

        {/* Bottom: Copyright and Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[var(--border)] pt-8">
          <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
            © 2026 SAURABH SONALKAR
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group text-[0.65rem] font-mono tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] uppercase transition-colors duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          >
            BACK TO TOP 
            <span className="group-hover:-translate-y-1 transition-transform duration-300 ease-out text-[var(--text-tertiary)]">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
