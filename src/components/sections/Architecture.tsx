"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, AnimatePresence } from "framer-motion";
import { RevealText } from "@/components/animations/RevealText";
import { IMPACT_METRICS, ARCHITECTURE_NODES, TECHNICAL_PILLARS, ArchNode } from "@/data/architecture";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? value : 0);

  const spring = useSpring(0, {
    stiffness: 40,
    damping: 15,
    mass: 1
  });

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    return spring.onChange((latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [spring, prefersReducedMotion]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-light tracking-tighter text-[var(--text-primary)] transition-colors duration-300 group-hover:text-white font-mono inline-block">
      {displayValue}
      <span className="text-3xl md:text-5xl ml-1">{suffix}</span>
    </span>
  );
}

// A simple helper to find connected nodes
function getConnectedNodes(nodeId: string, nodes: ArchNode[]): string[] {
  const connected = new Set<string>();
  
  // Downstream
  const node = nodes.find(n => n.id === nodeId);
  if (node) {
    node.connections.forEach(c => connected.add(c));
  }
  
  // Upstream
  nodes.forEach(n => {
    if (n.connections.includes(nodeId)) {
      connected.add(n.id);
    }
  });
  
  return Array.from(connected);
}

export function Architecture() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const connectedNodes = hoveredNode ? getConnectedNodes(hoveredNode, ARCHITECTURE_NODES) : [];

  return (
    <div className="w-full bg-[var(--background)]">
      
      {/* 05 / ENGINEERING IMPACT */}
      <section id="impact" className="relative w-full py-20 md:py-32 lg:py-40 border-t border-[var(--border)]">
        <div className="section-container">
          
          <div className="mb-24 md:mb-32">
            <RevealText delay={0.1}>
              <p className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-6 md:mb-8">
                05 / ENGINEERING IMPACT
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-8">
                ENGINEERING<br />
                THAT CREATES<br />
                MEASURABLE IMPACT.
              </h2>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Focused on improving reliability, performance, automation, and engineering efficiency across production systems.
              </p>
            </RevealText>
          </div>

          <div className="flex flex-col">
            {IMPACT_METRICS.map((metric, index) => (
              <RevealText key={metric.label} delay={0.1 + (index * 0.1)} direction="up">
                <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-16 border-t border-[var(--border)] relative cursor-default">
                  
                  <Counter value={metric.value} suffix={metric.suffix} />
                  
                  <div className="mt-6 md:mt-0 md:w-1/2 md:flex md:justify-end">
                    <p className="text-sm md:text-base tracking-widest text-[var(--text-secondary)] uppercase leading-relaxed md:text-right max-w-[200px] group-hover:translate-x-1 group-hover:text-[var(--text-primary)] transition-all duration-300">
                      {metric.label}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className="absolute left-0 bottom-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </RevealText>
            ))}
          </div>

        </div>
      </section>

      {/* 05.5 / SYSTEM ARCHITECTURE */}
      <section id="architecture" className="relative w-full py-20 md:py-32 lg:py-40 border-t border-[var(--border)] overflow-hidden">
        <div className="section-container">
          
          <div className="mb-24 text-center flex flex-col items-center">
            <RevealText delay={0.1}>
              <h3 className="text-[0.65rem] font-mono tracking-widest text-[var(--text-tertiary)] uppercase mb-8">
                CONCEPTUAL ENGINEERING STACK
              </h3>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-8">
                HOW I<br />ENGINEER<br />SYSTEMS.
              </h2>
            </RevealText>
            <RevealText delay={0.3}>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
                From APIs and data layers to AI workflows and cloud infrastructure, I focus on building maintainable systems that work reliably in production.
              </p>
            </RevealText>
          </div>

          {/* Architecture Visualization */}
          <RevealText delay={0.4} direction="up" className="w-full">
            <div 
              className="w-full relative mx-auto max-w-4xl py-12 px-4 rounded-sm border border-[var(--border)] bg-[var(--surface)] mb-32 flex flex-col items-center"
              style={{ perspective: "1000px" }}
            >
              <div 
                className="w-full max-w-2xl flex flex-col items-center relative transition-transform duration-500 hover:rotate-x-[2deg] hover:rotate-y-[-1deg]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 
                  Instead of SVG which requires rigid coordinates, we use a CSS flex layout 
                  to create a conceptual flow. Mobile falls back to a simple vertical stack.
                */}
                <div className="flex flex-col items-center gap-10 w-full relative z-10">
                  
                  {/* Layer 1: Client */}
                  <ArchNodeUI node={ARCHITECTURE_NODES[0]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                  <DownArrow active={hoveredNode === "client" || hoveredNode === "rest_api"} reducedMotion={prefersReducedMotion} />

                  {/* Layer 2: API */}
                  <ArchNodeUI node={ARCHITECTURE_NODES[1]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                  <DownArrow active={hoveredNode === "rest_api" || hoveredNode === "backend"} reducedMotion={prefersReducedMotion} />

                  {/* Layer 3: Backend */}
                  <ArchNodeUI node={ARCHITECTURE_NODES[2]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                  <DownArrow active={hoveredNode === "backend" || hoveredNode === "db" || hoveredNode === "ai" || hoveredNode === "ocr"} reducedMotion={prefersReducedMotion} />

                  {/* Layer 4: DB & AI Stack */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
                    <div className="flex flex-col items-center gap-6">
                      <ArchNodeUI node={ARCHITECTURE_NODES[3]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                      <ArchNodeUI node={ARCHITECTURE_NODES[4]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                      <DownArrow active={hoveredNode === "ai" || hoveredNode === "llm"} short reducedMotion={prefersReducedMotion} />
                      <ArchNodeUI node={ARCHITECTURE_NODES[6]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                      <ArchNodeUI node={ARCHITECTURE_NODES[5]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                    </div>
                  </div>
                  
                  <DownArrow active={hoveredNode === "db" || hoveredNode === "llm" || hoveredNode === "ocr" || hoveredNode === "services"} reducedMotion={prefersReducedMotion} />

                  {/* Layer 5: Services */}
                  <ArchNodeUI node={ARCHITECTURE_NODES[7]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                  <DownArrow active={hoveredNode === "services" || hoveredNode === "aws" || hoveredNode === "gcp"} reducedMotion={prefersReducedMotion} />

                  {/* Layer 6: Cloud */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full">
                    <ArchNodeUI node={ARCHITECTURE_NODES[8]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                    <ArchNodeUI node={ARCHITECTURE_NODES[9]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                  </div>
                  <DownArrow active={hoveredNode === "aws" || hoveredNode === "gcp" || hoveredNode === "datadog"} reducedMotion={prefersReducedMotion} />

                  {/* Layer 7: Observability */}
                  <ArchNodeUI node={ARCHITECTURE_NODES[10]} isHovered={hoveredNode} connected={connectedNodes} setHover={setHoveredNode} />
                </div>
              </div>
            </div>
          </RevealText>

          {/* Technical Pillars */}
          <div className="border-t border-[var(--border)] pt-16 md:pt-24 flex flex-col md:flex-row md:items-start justify-between gap-12">
            {TECHNICAL_PILLARS.map((pillar, i) => (
              <RevealText key={pillar.id} delay={0.1 + (i * 0.1)}>
                <div className="flex flex-col">
                  <button 
                    onClick={() => setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)}
                    className="text-left font-mono tracking-widest text-[var(--text-primary)] uppercase text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm group mb-6 flex items-center justify-between"
                  >
                    {pillar.label}
                    <span className="md:hidden text-[var(--text-tertiary)]">{expandedPillar === pillar.id ? '−' : '+'}</span>
                  </button>
                  
                  <AnimatePresence>
                    {(expandedPillar === pillar.id || !prefersReducedMotion) && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        className="overflow-hidden md:!h-auto md:!opacity-100"
                      >
                        <div className="flex flex-col gap-3 pt-2 md:pt-0 pb-6 md:pb-0">
                          {pillar.technologies.map(tech => (
                            <span key={tech} className="text-xs text-[var(--text-secondary)]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealText>
            ))}
          </div>

        </div>
      </section>
      
    </div>
  );
}

// Helper components for the Architecture Visualization

function ArchNodeUI({ 
  node, 
  isHovered, 
  connected, 
  setHover 
}: { 
  node: ArchNode, 
  isHovered: string | null, 
  connected: string[], 
  setHover: (id: string | null) => void 
}) {
  const isTarget = isHovered === node.id;
  const isConnected = connected.includes(node.id);
  const isDimmed = isHovered !== null && !isTarget && !isConnected;

  return (
    <button
      onMouseEnter={() => setHover(node.id)}
      onMouseLeave={() => setHover(null)}
      onFocus={() => setHover(node.id)}
      onBlur={() => setHover(null)}
      className={`
        relative px-6 py-4 w-48 flex flex-col items-center justify-center text-center
        border border-[var(--border)] rounded-sm bg-[var(--background)] z-10
        transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]
        ${isTarget ? 'border-[var(--accent)] bg-[var(--bg-secondary)] scale-105 shadow-[0_4px_20px_rgba(59,130,246,0.1)]' : ''}
        ${isConnected ? 'border-[var(--text-secondary)]' : ''}
        ${isDimmed ? 'opacity-30' : 'opacity-100'}
      `}
      style={{
        transform: isTarget ? "translateZ(20px)" : "translateZ(0px)",
      }}
    >
      <span className={`text-xs font-mono tracking-widest uppercase mb-1 transition-colors ${isTarget ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
        {node.label}
      </span>
      <span className={`text-[0.6rem] transition-colors ${isTarget ? 'text-[var(--text-secondary)]' : 'text-[var(--text-tertiary)]'}`}>
        {node.description}
      </span>
    </button>
  );
}

function DownArrow({ active, short = false, reducedMotion = false }: { active: boolean, short?: boolean, reducedMotion?: boolean }) {
  return (
    <div className={`relative flex flex-col items-center ${short ? 'h-6' : 'h-10'} w-px bg-[var(--border)] my-1 overflow-hidden transition-colors duration-300 ${active ? 'bg-[var(--text-secondary)]' : ''}`}>
      {/* Animated Light Pulse */}
      {!reducedMotion && (
        <div 
          className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-0 animate-[pulse-down_2.5s_ease-in-out_infinite] ${active ? 'opacity-100' : 'opacity-20'}`}
        />
      )}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent transition-colors duration-300 ${active ? 'border-t-[var(--text-secondary)]' : 'border-t-[var(--border)]'}`} />
    </div>
  );
}
