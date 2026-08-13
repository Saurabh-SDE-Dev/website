import React from 'react';
import { GraduationCap, MapPin, Calendar, Activity } from 'lucide-react';
import { EDUCATION_DATA } from '@/data/education';

export function Education() {
  return (
    <section id="education" className="py-20 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
        </div>

        <div className="max-w-4xl relative">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 py-6">
              {/* Timeline Node */}
              <div className="absolute left-0 top-8 w-6 h-6 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              
              {/* Vertical Line */}
              {idx !== EDUCATION_DATA.length - 1 && (
                <div className="absolute left-3 top-14 bottom-0 w-px bg-gray-200"></div>
              )}

              <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <div className="text-lg font-medium text-blue-600 mb-4">{edu.major}</div>
                    
                    <div className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                      <GraduationCap size={20} className="text-gray-400" />
                      {edu.institution}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 shrink-0 text-sm font-medium">
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full w-fit">
                      <Calendar size={16} />
                      Class of {edu.graduationYear}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 px-3 py-1.5">
                      <MapPin size={16} className="text-gray-400" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 px-4 py-2 rounded-lg font-semibold">
                  <Activity size={18} />
                  CGPA: {edu.cgpa}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
