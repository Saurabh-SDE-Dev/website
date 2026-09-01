"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { RevealText } from "@/components/animations/RevealText";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { GraphicalDetectionVisual, DnsVisual, CloudVisual, TranscoderVisual, DatadogVisual } from "@/components/projects/ProjectVisuals";

// Dynamically import 3D visual to prevent hydration issues and keep initial load fast
const AutolexVisual = dynamic(() => import("@/components/projects/AutolexVisual"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm">
      <p className="text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
        LOADING VISUALIZATION...
      </p>
    </div>
  )
});

// A simple functional component to render the correct visual based on project ID
function ProjectVisual({ id, isHovered }: { id: string, isHovered: boolean }) {
  switch (id) {
    case "autolex":
      return <AutolexVisual isHovered={isHovered} />;
    case "graphical-detection":
      return <GraphicalDetectionVisual isHovered={isHovered} />;
    case "dns-management":
      return <DnsVisual isHovered={isHovered} />;
    case "cloud-automation":
      return <CloudVisual isHovered={isHovered} />;
    case "custom-transcoder":
      return <TranscoderVisual isHovered={isHovered} />;
    case "datadog-monitoring":
      return <DatadogVisual isHovered={isHovered} />;
    default:
      return null;
  }
}

function ProjectRow({ project, index }: { project: Project, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isFeatured = project.featured;

  return (
    <RevealText delay={0.1 + (index * 0.1)} direction="up">
      <div 
        className="group flex flex-col md:flex-row gap-6 md:gap-12 py-12 md:py-16 border-t border-[var(--border)] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Subtle background shift on hover */}
        <div className="absolute inset-0 bg-[var(--surface)] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none -mx-6 px-6 sm:mx-0 sm:px-0 rounded-sm" />

        {/* Project Number */}
        <div className="w-full md:w-16 shrink-0 z-10">
          <p className="text-xs font-mono tracking-widest text-[var(--text-tertiary)] uppercase">
            {project.number}
          </p>
        </div>

        {/* Project Details */}
        <div className={`flex-1 flex flex-col z-10 ${isFeatured ? 'md:pr-12' : ''}`}>
          <a href={project.link || "#"} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm group/link block">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2 group-hover:text-white transition-colors duration-300 relative inline-block">
              {project.title}
              {/* Accent line on hover */}
              <div className="absolute left-0 bottom-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-500 ease-out" />
            </h3>
            
            <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
              {project.category}
            </p>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg mb-8 md:mb-0 pr-0 md:pr-12 group-hover:text-[var(--text-primary)] transition-colors duration-300">
              &quot;{project.description}&quot;
            </p>

            {/* Visual (Mobile placement: below description, before technologies) */}
            <div className={`w-full mb-8 md:hidden ${isFeatured ? 'h-64' : 'h-40'}`}>
              <ProjectVisual id={project.id} isHovered={isHovered} />
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="text-xs font-mono tracking-widest px-3 py-1.5 border border-[var(--border)] text-[var(--text-tertiary)] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-[0.65rem] font-mono tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-3 w-fit">
              VIEW PROJECT
              <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] group-hover:translate-x-1.5 transition-all duration-300">→</span>
            </div>
          </a>
        </div>

        {/* Visual (Desktop placement: right column) */}
        <div className={`hidden md:block shrink-0 z-10 transition-transform duration-700 ease-out ${isFeatured ? 'w-[45%] h-[400px]' : 'w-1/3 h-[250px]'}`}>
          <div className="w-full h-full group-hover:-translate-y-1 transition-transform duration-700 ease-out">
            <ProjectVisual id={project.id} isHovered={isHovered} />
          </div>
        </div>

      </div>
    </RevealText>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "BACKEND", "AI / ML", "CLOUD", "MEDIA", "OBSERVABILITY"];

  // Mapping strict exact project categories to broader filter terms
  const filteredProjects = PROJECTS_DATA.filter(project => {
    if (filter === "ALL") return true;
    if (filter === "BACKEND" && (project.category.includes("BACKEND") || project.category.includes("AUTOMATION") && !project.category.includes("CLOUD"))) return true;
    if (filter === "AI / ML" && (project.category.includes("AI") || project.category.includes("ML") || project.category.includes("PROCESS"))) return true;
    if (filter === "CLOUD" && project.category.includes("CLOUD")) return true;
    if (filter === "MEDIA" && project.category.includes("MEDIA")) return true;
    if (filter === "OBSERVABILITY" && project.category.includes("OBSERVABILITY")) return true;
    return false;
  });

  return (
    <section id="work" className="relative w-full py-20 md:py-32 lg:py-40 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                04 / SELECTED WORK
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
                SYSTEMS<br />
                I&apos;VE BUILT.
              </h2>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Selected engineering work across backend systems, AI/ML, cloud automation, media processing, and observability.
              </p>
            </RevealText>
          </div>

          {/* Optional Filter */}
          <RevealText delay={0.4}>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-[0.65rem] font-mono tracking-widest uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm px-1 py-0.5 ${
                    filter === f ? "text-[var(--text-primary)]" : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </RevealText>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="py-20 text-center border-t border-[var(--border)]">
              <p className="text-sm font-mono text-[var(--text-tertiary)] uppercase tracking-widest">
                No projects match this filter.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
