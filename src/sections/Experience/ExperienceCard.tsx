import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  projects: Project[];
  isLast: boolean;
}

export function ExperienceCard({ company, role, period, projects, isLast }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Vertical Line */}
      {!isLast && (
        <div className="hidden sm:block absolute left-8 top-16 bottom-0 w-px bg-gray-200 group-hover:bg-blue-300 transition-colors"></div>
      )}

      {/* Timeline Node */}
      <div className="hidden sm:flex absolute left-[1.375rem] top-8 w-12 h-12 bg-white rounded-full border-4 border-blue-100 items-center justify-center text-blue-600 shadow-sm z-10 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
        <Briefcase size={20} />
      </div>

      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 border-b border-gray-50 pb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{company}</h3>
            <div className="text-lg font-medium text-blue-600 mb-2">{role}</div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
            <Calendar size={16} />
            {period}
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="relative">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {project.name}
              </h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
