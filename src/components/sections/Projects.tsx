"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS_DATA, Project } from "@/data/projects";

function ProjectVisual({ project, index }: { project: Project, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Generate an abstract gradient based on index for the visual
  const gradients = [
    "from-[#007aff]/20 to-[#5856d6]/20",
    "from-[#111111]/10 to-[#555555]/10",
    "from-[#5856d6]/20 to-[#007aff]/20",
    "from-[#0a0a0c]/10 to-[#111114]/10",
  ];
  const bgGradient = gradients[index % gradients.length];

  return (
    <motion.div
      className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#f1f3f5] overflow-hidden"
      style={{ 
        rotateX, rotateY, 
        transformStyle: "preserve-3d", 
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Premium subtle background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} mix-blend-multiply`} />
      
      {/* Abstract structural grid for technical feel */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Center abstract object to represent the project */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-black/10 bg-white/50 backdrop-blur-md shadow-2xl flex items-center justify-center p-8 text-center"
        style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
      >
        <span className="text-sm font-mono tracking-widest text-black/50 uppercase">
          {project.category}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="work" className="theme-light relative w-full py-32 md:py-48">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-24 flex items-center gap-6">
          <p className="editorial-label">03 — SELECTED WORK</p>
          <div className="h-[1px] w-24 bg-black/10" />
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="flex flex-col gap-32 md:gap-48">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Visual */}
                <div className={`lg:col-span-7 ${!isEven && 'lg:order-2'}`}>
                  <ProjectVisual project={project} index={index} />
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${!isEven && 'lg:order-1'}`}>
                  <p className="text-[10px] font-mono tracking-widest text-[#007aff] uppercase mb-4">
                    {project.number} — {project.category}
                  </p>
                  
                  <h3 className="editorial-subheading text-[#111111] mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-[#555555] leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="editorial-label text-[#111111] mb-3">TECHNOLOGY</p>
                      <p className="text-sm text-[#888888] font-mono tracking-wide">
                        {project.technologies.join(", ")}
                      </p>
                    </div>

                    {project.link && (
                      <a 
                        href={project.link}
                        className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest text-[#111111] uppercase"
                      >
                        VIEW CASE STUDY
                        <span className="w-8 h-[1px] bg-[#111111] group-hover:w-16 transition-all duration-300" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
