'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileMenu({ isOpen, activeSection, onNavClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="lg:hidden mobile-menu-enter bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-t border-[var(--border)]"
    >
      <nav className="container mx-auto px-4 py-4">
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-[var(--accent)] bg-[var(--accent-subtle)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border)]">
          {SOCIAL_LINKS.github && (
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
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
              className="p-2.5 text-[var(--text-muted)] hover:text-[var(--accent)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          <button
            className="ml-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg btn-outline"
            onClick={() => window.open('/resume/Saurabh-Sonalakar-Resume.pdf', '_blank')}
            aria-label="Download Resume"
          >
            <Download size={16} />
            Resume
          </button>
        </div>
      </nav>
    </div>
  );
}
