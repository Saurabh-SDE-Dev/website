import React from 'react';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Certifications } from '@/sections/Certifications';
import { Education } from '@/sections/Education';
import { GitHub } from '@/sections/GitHub';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />

      <Experience />
      <Projects />
      <GitHub />
      <Skills />

      <Certifications />
      <Education />

      <Contact />
    </div>
  );
}
