"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_ITEMS as NAVIGATION_LINKS } from "@/data/navigation";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { useWebGL } from "@/hooks/useWebGL";

const IdentityCore = dynamic(
  () => import("@/components/3d/IdentityCore").then(mod => mod.IdentityCore),
  { ssr: false }
);

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isHoveringName, setIsHoveringName] = useState(false);
  const isWebGLSupported = useWebGL();

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(11, 13, 16, 0)", "rgba(11, 13, 16, 0.8)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(245, 247, 250, 0)", "rgba(245, 247, 250, 0.05)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      
      const sections = NAVIGATION_LINKS.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ backgroundColor: navBg, borderBottomWidth: 1, borderBottomColor: navBorder }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300"
    >
      <div className="section-container flex items-center justify-between h-20">
        
        {/* Visual Identity Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-4 group"
          onMouseEnter={() => setIsHoveringName(true)}
          onMouseLeave={() => setIsHoveringName(false)}
        >
          {isWebGLSupported && (
            <div className="w-8 h-8 relative">
              <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} color={isHoveringName ? "#22D3EE" : "#F5F7FA"} />
                <IdentityCore isMiniature={true} />
              </Canvas>
            </div>
          )}
          <span className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 ${isHoveringName ? 'text-[#F5F7FA] tracking-[0.25em]' : 'text-[#E8EDF3]'}`}>
            S.S.
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.label}
                href={link.href}
                className={`relative text-xs font-mono tracking-widest uppercase py-2 transition-colors duration-300 ${
                  isActive ? "text-[#F5F7FA]" : "text-[#9CA3AF] hover:text-[#E8EDF3]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -bottom-[2px] left-0 right-0 h-[1px] bg-[#3B82F6]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

      </div>
    </motion.nav>
  );
}
