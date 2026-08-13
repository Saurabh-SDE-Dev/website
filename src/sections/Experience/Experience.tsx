import React from 'react';
import { EXPERIENCE_DATA } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
          <p className="text-lg text-gray-600">
            A track record of engineering scalable backend systems, automating cloud infrastructure, and deploying AI-driven solutions in production environments.
          </p>
        </div>

        <div className="max-w-5xl relative">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceCard 
              key={`${exp.company}-${index}`}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              projects={exp.projects}
              isLast={index === EXPERIENCE_DATA.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
