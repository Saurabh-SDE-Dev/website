'use client';

import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { PROFILE } from '@/data/profile';
import { SOCIAL_LINKS } from '@/data/navigation';

export function Hero() {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    window.open('/resume/Saurabh-Sonalakar-Resume.pdf', '_blank');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white border-b border-gray-100"
    >
      {/* Abstract Background Element for subtle professional design */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 mb-6 border border-blue-100 shadow-sm animate-fade-in-up">
            {PROFILE.positioning}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {PROFILE.name}
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {PROFILE.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {PROFILE.introduction}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={handleScrollToProjects}
              className="group gap-2 shadow-sm hover:shadow-md transition-all"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleDownloadResume}
              className="gap-2 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <Download size={18} />
              Download Resume
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.github && (
                <a 
                  href={SOCIAL_LINKS.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 p-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={22} />
                </a>
              )}
              
              {SOCIAL_LINKS.linkedin && (
                <a 
                  href={SOCIAL_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 p-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={22} />
                </a>
              )}
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
            
            <div className="flex flex-wrap gap-2">
              {PROFILE.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
