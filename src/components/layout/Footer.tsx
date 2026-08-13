import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Saurabh Sonalakar</h3>
            <p className="text-sm text-gray-500 mt-1">
              Software Development Engineer
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.github && (
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
            )}
            {SOCIAL_LINKS.linkedin && (
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Saurabh Sonalakar. All rights reserved.</p>
          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
