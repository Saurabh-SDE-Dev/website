import React from 'react';
import { ABOUT_DATA } from '@/data/about';

export function About() {
  return (
    <section id="about" className="py-20 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            {ABOUT_DATA.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {ABOUT_DATA.skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <Icon className="text-gray-500" />
                  <span className="font-medium text-sm">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What I Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_DATA.whatIBuild.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover-card"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
