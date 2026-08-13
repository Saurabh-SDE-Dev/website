import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, Server, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ProjectData } from '@/data/projects';
import { Button } from '@/components/ui/Button';

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 p-6 sm:px-8 flex items-center justify-between z-20">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-2.5 py-0.5 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-medium text-gray-500">
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 sm:p-8 space-y-10">
          {/* Summary Section */}
          <section>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.shortDescription}
            </p>
          </section>

          {/* Problem & Solution */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="bg-red-50/50 p-6 rounded-xl border border-red-100/50">
              <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                The Problem
              </h3>
              <p className="text-red-800/80 leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100/50">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                The Solution
              </h3>
              <p className="text-emerald-800/80 leading-relaxed">{project.solution}</p>
            </div>
          </section>

          {/* Architecture & Tech Stack */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Server size={20} className="text-blue-600 animate-float-subtle" />
              Architecture & Technology
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.architecture}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features & Highlights */}
          <section className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-indigo-600 animate-pulse-subtle" />
                Engineering Highlights
              </h3>
              <ul className="space-y-3">
                {project.engineeringHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 p-6 sm:px-8 flex flex-wrap gap-4 mt-auto">
          {project.githubUrl ? (
            <Button 
              variant="outline"
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="gap-2 bg-white hover:bg-gray-50"
            >
              <FaGithub size={18} />
              View Source
            </Button>
          ) : (
            <Button 
              variant="outline"
              disabled
              className="gap-2 bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              title="Source code is private"
            >
              <FaGithub size={18} />
              Private Repository
            </Button>
          )}
          
          {project.demoUrl && (
            <Button 
              variant="primary"
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="gap-2"
            >
              <ExternalLink size={18} />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
