"use client";

import { CERTIFICATIONS_DATA } from "@/data/certifications";
import { EDUCATION_DATA } from "@/data/education";

export function Credentials() {
  return (
    <div className="w-full bg-charcoal">
      
      {/* 04 / CERTIFICATIONS */}
      <section id="certifications" className="relative w-full py-24 md:py-32 border-t border-[rgba(245,247,250,0.05)]">
        <div className="section-container">
          
          <div className="mb-24 flex items-center gap-6">
            <p className="editorial-label">04 — CERTIFICATIONS</p>
            <div className="h-[1px] w-24 bg-[#F5F7FA]/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div key={cert.id} className="flex flex-col group">
                <h3 className="text-xl md:text-2xl font-bold text-[#F5F7FA] leading-snug mb-3 group-hover:text-[#22D3EE] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                  {cert.provider}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 05 / EDUCATION */}
      <section id="education" className="relative w-full py-32 md:py-48 border-t border-[rgba(245,247,250,0.05)]">
        <div className="section-container">
          
          <div className="mb-24 flex items-center gap-6">
            <p className="editorial-label">05 — EDUCATION</p>
            <div className="h-[1px] w-24 bg-[#F5F7FA]/10" />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-16 lg:gap-32">
            {/* Huge Year Typography */}
            <div className="shrink-0">
              <span className="text-[clamp(5rem,12vw,10rem)] font-bold tracking-tighter text-[#E8EDF3] leading-none block">
                {EDUCATION_DATA.year}
              </span>
            </div>
            
            {/* Details */}
            <div className="flex flex-col gap-6 lg:pb-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA]">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-sm font-mono tracking-widest text-[#9CA3AF] uppercase">
                {EDUCATION_DATA.major}
              </p>
              <div className="h-[1px] w-full max-w-[200px] bg-[#F5F7FA]/10 my-2" />
              <p className="text-xs font-mono tracking-widest text-[#6B7280] uppercase">
                CGPA <span className="text-[#3B82F6] font-bold ml-4">{EDUCATION_DATA.cgpa}</span>
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
