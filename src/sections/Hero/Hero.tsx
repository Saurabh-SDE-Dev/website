'use client';

import React from 'react';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';
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

  const handleScrollDown = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient Glow Spots */}
      <div className="glow-spot w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.04] top-1/4 -right-20" />
      <div className="glow-spot w-[400px] h-[400px] bg-indigo-500 opacity-[0.03] bottom-1/4 -left-20" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="hero-reveal hero-reveal-1 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-[var(--accent)] bg-[var(--accent-subtle)] border border-[var(--border-accent)] rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="hero-reveal hero-reveal-2 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[var(--text-heading)] mb-4 leading-[1.1]">
            {PROFILE.name}
          </h1>

          {/* Title */}
          <h2 className="hero-reveal hero-reveal-3 text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-secondary)] mb-6">
            {PROFILE.title}
          </h2>

          {/* Tech Stack Line */}
          <div className="hero-reveal hero-reveal-4 flex items-center gap-2 mb-8">
            <span className="font-mono text-sm text-[var(--accent)]">{'>'}</span>
            <span className="font-mono text-sm text-[var(--text-muted)]">
              {PROFILE.positioning}
            </span>
          </div>

          {/* Introduction */}
          <p className="hero-reveal hero-reveal-4 text-base sm:text-lg text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
            {PROFILE.introduction}
          </p>

          {/* CTA Buttons */}
          <div className="hero-reveal hero-reveal-5 flex flex-wrap items-center gap-3 mb-12">
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="group"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
            >
              <Download size={16} />
              Resume
            </Button>
          </div>

          {/* Social + Tech Tags */}
          <div className="hero-reveal hero-reveal-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.github && (
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-tertiary)] border border-[var(--border)]"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-tertiary)] border border-[var(--border)]"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              )}
            </div>

            {(SOCIAL_LINKS.github || SOCIAL_LINKS.linkedin) && (
              <div className="hidden sm:block w-px h-6 bg-[var(--border)]" />
            )}

            <div className="flex flex-wrap gap-2">
              {PROFILE.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors scroll-indicator focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
