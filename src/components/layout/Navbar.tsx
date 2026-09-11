"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NAV_ITEMS } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-bold tracking-tight text-sm text-[#ffffff]">
              SAURABH SONALKAR
            </span>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-xs font-medium tracking-wide text-[#a0a0b0] hover:text-[#ffffff] transition-colors relative group/nav"
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
                className="text-xs font-medium tracking-wide px-5 py-2.5 bg-white text-black hover:bg-gray-200 transition-colors rounded"
              >
                RESUME
              </a>
            </nav>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button 
              className="text-xs font-medium tracking-wide text-[#ffffff] z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          )}

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-[#0a0a0c] flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-2xl font-bold tracking-tight text-[#ffffff]"
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
              className="text-sm font-medium tracking-wide px-8 py-4 bg-white text-black rounded"
            >
              VIEW RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
