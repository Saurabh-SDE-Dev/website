"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { PROJECTS_DATA } from "@/data/projects";
import { useWebGL } from "@/hooks/useWebGL";

const SceneLighting = dynamic(
  () => import("@/components/3d/SceneLighting").then(mod => mod.SceneLighting),
  { ssr: false }
);

const ProjectSystemVisual = dynamic(
  () => import("@/components/3d/ProjectVisualizations").then(mod => mod.ProjectSystemVisual),
  { ssr: false }
);

const ProjectOCRVisual = dynamic(
  () => import("@/components/3d/ProjectVisualizations").then(mod => mod.ProjectOCRVisual),
  { ssr: false }
);

const ProjectDataVisual = dynamic(
  () => import("@/components/3d/ProjectVisualizations").then(mod => mod.ProjectDataVisual),
  { ssr: false }
);

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWebGLSupported = useWebGL();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      const segment = 1 / PROJECTS_DATA.length;
      let newIndex = Math.floor(latest / segment);
      if (newIndex >= PROJECTS_DATA.length) newIndex = PROJECTS_DATA.length - 1;
      if (newIndex !== activeIndex) setActiveIndex(newIndex);
    });
  }, [smoothProgress, activeIndex]);

  // Select appropriate visual based on index
  const renderVisual = (index: number) => {
    if (index === 0) return <ProjectSystemVisual />;
    if (index === 1) return <ProjectOCRVisual />;
    return <ProjectDataVisual />;
  };

  return (
    <section 
      id="work" 
      ref={containerRef}
      className="bg-surface relative w-full"
      style={{ height: `${PROJECTS_DATA.length * 100}vh` }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <div className="section-container w-full h-full flex flex-col justify-center">
          
          <div className="absolute top-24 left-0 w-full px-6 md:px-12 lg:px-20 z-20">
            <div className="flex items-center gap-6">
              <p className="editorial-label">03 — SELECTED WORK</p>
              <div className="h-[1px] w-24 bg-[#F5F7FA]/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-[70vh]">
            
            {/* Left: Project Details */}
            <div className="relative h-full flex flex-col justify-center z-10 pr-8">
              {PROJECTS_DATA.map((project, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      x: isActive ? 0 : -30,
                      pointerEvents: isActive ? 'auto' : 'none',
                      position: isActive ? 'relative' : 'absolute'
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <p className="text-[10px] font-mono tracking-widest text-[#22D3EE] uppercase mb-6">
                      {project.number} — {project.category}
                    </p>
                    
                    <h3 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] mb-8 leading-none">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-[#9CA3AF] leading-relaxed mb-10 max-w-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-8">
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-[#6B7280] uppercase mb-4">TECHNOLOGY</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <span key={tech} className="text-xs font-mono text-[#F5F7FA] bg-[#0B0D10] px-3 py-1.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.link && (
                        <a 
                          href={project.link}
                          className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest text-[#F5F7FA] uppercase w-fit"
                        >
                          VIEW CASE STUDY
                          <span className="w-8 h-[1px] bg-[#3B82F6] group-hover:w-16 transition-all duration-300" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: 3D Visualization */}
            <div className="relative h-full w-full">
              {isWebGLSupported && (
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 45 }}
                  dpr={[1, 2]}
                  gl={{ antialias: true, alpha: true }}
                  className="w-full h-full cursor-move"
                >
                  <SceneLighting />
                  {/* Render the currently active visual */}
                  {renderVisual(activeIndex)}
                </Canvas>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
