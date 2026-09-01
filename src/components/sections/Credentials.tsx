"use client";

import { RevealText } from "@/components/animations/RevealText";
import { CERTIFICATIONS_DATA } from "@/data/certifications";
import { EDUCATION_DATA } from "@/data/education";
import { PROFESSIONAL_DETAILS } from "@/data/profile";

export function Credentials() {
  return (
    <div className="w-full bg-[var(--background)]">
      
      {/* 06 / CERTIFICATIONS */}
      <section id="certifications" className="relative w-full py-20 md:py-32 border-t border-[var(--border)]">
        <div className="section-container">
          
          <div className="mb-20 md:mb-32">
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                06 / CERTIFICATIONS
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
                CONTINUOUSLY<br />LEARNING.
              </h2>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Building depth across software engineering, cloud, and modern AI technologies.
              </p>
            </RevealText>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-16 gap-y-0 md:gap-y-0">
            {CERTIFICATIONS_DATA.map((cert, i) => (
              <RevealText key={cert.id} delay={0.1 + (i * 0.1)} direction="up" className="md:col-span-1">
                <div className="group flex flex-col justify-center py-10 md:py-12 border-t border-[var(--border)] relative cursor-default">
                  
                  <div className="flex items-start gap-6">
                    {/* Minimal Icon/Badge */}
                    <div className="mt-1 w-12 h-12 border border-[var(--border)] rounded-sm flex items-center justify-center shrink-0 bg-[var(--surface)] group-hover:border-[var(--text-secondary)] transition-colors duration-300">
                      <span className="text-[0.55rem] font-mono font-bold tracking-widest text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                        CERT
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-base md:text-lg font-bold tracking-tight text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 leading-snug mb-2 pr-8">
                        {cert.title}
                      </h3>
                      <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                        {cert.provider}
                      </p>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-[var(--text-tertiary)] text-xl font-light">
                    →
                  </div>

                  {/* Accent Line */}
                  <div className="absolute left-0 bottom-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </RevealText>
            ))}
          </div>

        </div>
      </section>

      {/* 07 / EDUCATION */}
      <section id="education" className="relative w-full py-20 md:py-32 border-t border-[var(--border)]">
        <div className="section-container">
          
          <div className="mb-20">
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                07 / EDUCATION
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                THE FOUNDATION.
              </h2>
            </RevealText>
          </div>

          <RevealText delay={0.3} direction="up">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24 py-16 border-y border-[var(--border)]">
              {/* Massive Muted Year */}
              <div className="shrink-0">
                <span className="text-8xl md:text-9xl font-bold tracking-tighter text-[var(--surface)] select-none">
                  {EDUCATION_DATA.year}
                </span>
              </div>
              
              <div className="flex flex-col gap-6 relative z-10 -mt-12 md:mt-0 md:-ml-12">
                <p className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  {EDUCATION_DATA.degree}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-mono tracking-widest text-[var(--text-secondary)] uppercase">
                    {EDUCATION_DATA.major}
                  </p>
                  <p className="text-xs font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
                    CGPA: <span className="text-[var(--text-primary)] font-bold">{EDUCATION_DATA.cgpa}</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealText>

        </div>
      </section>

      {/* 08 / PROFESSIONAL DETAILS */}
      <section id="details" className="relative w-full py-20 md:py-32 border-t border-[var(--border)]">
        <div className="section-container">
          
          <div className="mb-20 md:mb-24">
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                08 / DETAILS
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                A FEW MORE<br />DETAILS.
              </h2>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pt-8">
            {PROFESSIONAL_DETAILS.map((detail, i) => (
              <RevealText key={detail.label} delay={0.1 + (i * 0.1)}>
                <div className="flex flex-col border-t border-[var(--border)] pt-6 md:pt-8">
                  <h4 className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                    {detail.label}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {Array.isArray(detail.value) ? (
                      detail.value.map(val => (
                        <p key={val} className="text-sm md:text-base text-[var(--text-secondary)] font-medium">
                          {val}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm md:text-base text-[var(--text-secondary)] font-medium">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              </RevealText>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
