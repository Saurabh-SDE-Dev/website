"use client";

import { CERTIFICATIONS_DATA } from "@/data/certifications";
import { EDUCATION_DATA } from "@/data/education";

export function Credentials() {
  return (
    <div className="w-full theme-offwhite">
      
      {/* 05 / CERTIFICATIONS */}
      <section id="certifications" className="relative w-full py-24 md:py-32 border-t border-black/5">
        <div className="section-container">
          
          <div className="mb-24 flex items-center gap-6">
            <p className="editorial-label">05 — CERTIFICATIONS</p>
            <div className="h-[1px] w-24 bg-black/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-24">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div key={cert.id} className="flex flex-col border-b border-black/10 pb-8 group">
                <h3 className="text-xl md:text-2xl font-bold text-[#111111] leading-snug mb-4 group-hover:text-[#007aff] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] font-mono tracking-widest text-[#888888] uppercase">
                  {cert.provider}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 06 / EDUCATION */}
      <section id="education" className="relative w-full py-32 md:py-48 border-t border-black/5">
        <div className="section-container">
          
          <div className="mb-24 flex items-center gap-6">
            <p className="editorial-label">06 — EDUCATION</p>
            <div className="h-[1px] w-24 bg-black/10" />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-16 lg:gap-32">
            {/* Huge Year Typography */}
            <div className="shrink-0">
              <span className="text-[clamp(6rem,15vw,12rem)] font-bold tracking-tighter text-[#111111] leading-none block">
                {EDUCATION_DATA.year}
              </span>
            </div>
            
            {/* Details */}
            <div className="flex flex-col gap-6 lg:pb-6">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-sm font-mono tracking-widest text-[#555555] uppercase">
                {EDUCATION_DATA.major}
              </p>
              <div className="h-[1px] w-full max-w-[200px] bg-black/20 my-2" />
              <p className="text-xs font-mono tracking-widest text-[#888888] uppercase">
                CGPA <span className="text-[#007aff] font-bold ml-4">{EDUCATION_DATA.cgpa}</span>
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
