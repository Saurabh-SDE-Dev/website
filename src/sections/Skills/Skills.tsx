import React from 'react';
import { SKILL_CATEGORIES } from '@/data/skills';
import { SkillCategory } from './SkillCategory';

export function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
          <p className="text-lg text-gray-600">
            A comprehensive overview of my technical expertise, spanning backend architecture, cloud infrastructure, AI/ML, and DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
