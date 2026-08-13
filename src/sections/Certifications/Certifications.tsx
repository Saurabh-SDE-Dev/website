import React from 'react';
import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '@/data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 border-b border-gray-100 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                {cert.skills.map(skill => (
                  <span 
                    key={skill}
                    className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
