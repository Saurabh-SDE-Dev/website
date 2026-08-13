import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-100 hover:border-gray-300 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
