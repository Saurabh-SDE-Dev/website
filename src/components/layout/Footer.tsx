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
    <footer className="w-full bg-[#0a0a0c] border-t border-white/10 pt-20 pb-12">
      <div className="section-container">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-16 mb-24">
          
          {/* Branding */}
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-bold tracking-tight text-[#ffffff]">
              SAURABH SONALKAR
            </h2>
            <p className="text-[0.65rem] font-mono tracking-[0.15em] text-[#a0a0b0] uppercase">
              SOFTWARE DEVELOPMENT ENGINEER
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
              {["ABOUT", "EXPERIENCE", "WORK", "CONTACT"].map((label) => (
                <li key={label}>
                  <a 
                    href={`#${label.toLowerCase()}`} 
                    className="text-[0.65rem] font-mono tracking-[0.15em] text-[#a0a0b0] hover:text-[#ffffff] uppercase transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="text-[0.65rem] font-mono tracking-[0.15em] text-[#a0a0b0] uppercase">
            © 2026 SAURABH SONALKAR
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group text-[0.65rem] font-mono tracking-[0.15em] text-[#a0a0b0] hover:text-[#ffffff] uppercase transition-colors flex items-center gap-2"
          >
            BACK TO TOP 
            <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
