"use client";

import dynamic from "next/dynamic";
import { CONTACT_INFO } from "@/data/contact";

const ContactVisual3D = dynamic(
  () => import("@/components/3d/ScrollVisuals").then(mod => mod.ContactVisual3D),
  { ssr: false }
);

export function Contact() {
  return (
    <section id="contact" className="theme-dark relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* 3D Sphere rendered in background */}
      <ContactVisual3D />

      <div className="section-container relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            <div className="mb-16 flex items-center gap-6">
              <p className="editorial-label text-[#ffffff]">07 — CONTACT</p>
              <div className="h-[1px] w-24 bg-white/20" />
            </div>
            
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tighter leading-[0.9] text-white mb-12">
              READY TO <br />
              <span className="text-[#a0a0b0]">BUILD</span> <br />
              TOGETHER.
            </h2>

            <p className="text-lg text-[#a0a0b0] leading-relaxed mb-16 max-w-md">
              Interested in backend engineering, AI/ML systems, or scaling cloud architecture? Let&apos;s connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              
              {/* Primary CTA */}
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-semibold tracking-widest text-xs uppercase overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  GET IN TOUCH
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>

            </div>

            {/* Contact Links */}
            <div className="flex items-center gap-12 mt-24 pt-12 border-t border-white/10 w-full max-w-lg">
              <div className="flex flex-col gap-2">
                <span className="editorial-label text-[#666677]">EMAIL</span>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-medium tracking-wide text-white hover:text-[#007aff] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col gap-2">
                <span className="editorial-label text-[#666677]">NETWORK</span>
                <a 
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium tracking-wide text-white hover:text-[#007aff] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
