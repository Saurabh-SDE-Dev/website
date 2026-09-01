"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { NAV_ITEMS } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#" className="font-semibold tracking-wide text-sm md:text-base text-[var(--text-primary)]">
            SAURABH SONALKAR
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-xs font-mono tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono tracking-widest px-4 py-2 bg-[var(--text-primary)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-colors rounded-sm"
              >
                VIEW RESUME
              </a>
            </nav>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button 
              className="text-sm font-mono tracking-widest text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          )}

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 flex flex-col">
          <ul className="flex flex-col gap-8 mb-12">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="text-xl font-bold tracking-tight text-[var(--text-primary)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noreferrer"
            className="text-sm font-mono text-center tracking-widest px-6 py-4 bg-[var(--text-primary)] text-[var(--background)] rounded-sm"
          >
            VIEW RESUME
          </a>
        </div>
      )}
    </>
  );
}
