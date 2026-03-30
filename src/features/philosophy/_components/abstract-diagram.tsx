'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AbstractDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const circles = svgRef.current.querySelectorAll('.node');
    const lines = svgRef.current.querySelectorAll('.connector');

    // Float animation for nodes
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        y: 'random(-10, 10)',
        x: 'random(-5, 5)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.5
      });
    });

    // Entrance animation with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(circles, 
      { scale: 0, opacity: 0 }, 
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "back.out(1.7)" 
      }
    )
    .fromTo(lines, 
      { strokeDashoffset: 400, opacity: 0 }, 
      { 
        strokeDashoffset: 0, 
        opacity: 1, 
        duration: 1.5, 
        stagger: 0.1, 
        ease: "power2.inOut" 
      }, 
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />
      
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="w-full h-full text-white/20 select-none overflow-visible"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.05))' }}
      >
        {/* Connectors (Back) */}
        <path className="connector" d="M200 80 L100 240" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="400" />
        <path className="connector" d="M200 80 L300 240" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="400" />
        <path className="connector" d="M100 240 L300 240" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="400" />
        <path className="connector" d="M200 80 L200 320" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="400" />
        <path className="connector" d="M100 240 L200 320" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="400" />
        <path className="connector" d="M300 240 L200 320" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="400" />

        {/* Nodes */}
        {/* Top - Orchestration */}
        <g className="node">
          <circle cx="200" cy="80" r="6" className="fill-blue-500/40" />
          <circle cx="200" cy="80" r="12" className="stroke-blue-500/20 fill-none" strokeWidth="1" />
          <circle cx="200" cy="80" r="2" className="fill-white" />
        </g>
        
        {/* Left - Application */}
        <g className="node">
          <circle cx="100" cy="240" r="5" className="fill-white/20" />
          <circle cx="100" cy="240" r="10" className="stroke-white/10 fill-none" strokeWidth="1" />
        </g>

        {/* Right - Infrastructure */}
        <g className="node">
          <circle cx="300" cy="240" r="5" className="fill-white/20" />
          <circle cx="300" cy="240" r="10" className="stroke-white/10 fill-none" strokeWidth="1" />
        </g>

        {/* Bottom - Domain Core */}
        <g className="node">
          <circle cx="200" cy="320" r="8" className="fill-blue-500/20" />
          <circle cx="200" cy="320" r="16" className="stroke-blue-500/10 fill-none" strokeWidth="1" />
          <circle cx="200" cy="320" r="3" className="fill-blue-400" />
        </g>

        {/* Decorative Grid Lines */}
        <line x1="180" y1="0" x2="180" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.1" />
        <line x1="220" y1="0" x2="220" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.1" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.1" />
      </svg>
    </div>
  );
}
