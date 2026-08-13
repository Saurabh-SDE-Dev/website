import React from 'react';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileMenu({ isOpen, activeSection, onNavClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 mobile-menu-enter">
      <nav>
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className={`block px-4 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-100">
        <div className="flex gap-4">
          {SOCIAL_LINKS.github && (
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 hover:text-gray-900 p-2">
              <FaGithub size={24} />
            </a>
          )}
          {SOCIAL_LINKS.linkedin && (
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-blue-600 p-2">
              <FaLinkedin size={24} />
            </a>
          )}
        </div>
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2"
          onClick={() => window.open('/resume/Saurabh-Sonalakar-Resume.pdf', '_blank')}
        >
          <Download size={16} />
          Resume
        </Button>
      </div>
    </div>
  );
}
