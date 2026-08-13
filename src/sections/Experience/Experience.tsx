'use client';

import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  const [expandedCompany, setExpandedCompany] = useState<number>(0);

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Subtle grid accent */}
      <div className="absolute inset-0 grid-bg-accent opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-3 block">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-heading)] mb-4">
            Professional Experience
          </h2>
          <div className="accent-line mb-6" />
          <p className="text-[var(--text-secondary)] max-w-2xl">
            A track record of engineering scalable backend systems, automating cloud infrastructure, and deploying AI-driven solutions in production environments.
          </p>
        </div>

        <div className="max-w-5xl space-y-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceCard
              key={`${exp.company}-${index}`}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              projects={exp.projects}
              isExpanded={expandedCompany === index}
              onToggle={() => setExpandedCompany(expandedCompany === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
