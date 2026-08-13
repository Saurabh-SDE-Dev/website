import React from 'react';
import { ABOUT_DATA } from '@/data/about';

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column — Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-3 block">About</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-heading)] mb-4">
                Engineering systems that scale.
              </h2>
              <div className="accent-line mb-8" />
            </div>

            <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
              {ABOUT_DATA.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* What I Build */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-[var(--text-heading)] mb-6">What I Build</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {ABOUT_DATA.whatIBuild.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="card-dark p-5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center mb-3 text-[var(--accent)]">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-sm font-semibold text-[var(--text-heading)] mb-1">{item.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column — Tech Stack */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <h3 className="text-lg font-semibold text-[var(--text-heading)] mb-6">Core Technologies</h3>
              <div className="grid grid-cols-3 gap-3">
                {ABOUT_DATA.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="card-dark flex flex-col items-center gap-2 p-4 text-center group"
                    >
                      <Icon className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" size={24} />
                      <span className="text-xs font-medium text-[var(--text-secondary)]">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
