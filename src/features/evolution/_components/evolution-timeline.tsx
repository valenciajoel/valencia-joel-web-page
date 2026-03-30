"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE_DATA } from "../data";
import { EvolutionItem } from "./evolution-item";
import { Reveal } from "@/components/ui/reveal";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function EvolutionTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      
      items.forEach((item: HTMLElement) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
      
      const line = document.querySelector('.timeline-line');
      if (line) {
        gsap.fromTo(
          line,
          { height: 0 },
          {
            height: "100%",
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "bottom 75%",
              scrub: 1,
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="evolution" className="w-full max-w-4xl mx-auto px-4 py-32 z-10 relative overflow-hidden text-left md:text-center">
      <Reveal mode="fade-up" delay={0.2}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">Evolución</h2>
          <p className="font-mono uppercase tracking-widest text-sm text-primary mt-4">Trajectory & Experience</p>
        </div>
      </Reveal>
      
      <div ref={containerRef} className="relative pl-8 md:pl-0">
        {/* Timeline Line Main */}
        <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-[2px] bg-border-active/30 -translate-x-1/2 overflow-hidden z-0">
          <div className="timeline-line absolute top-0 left-0 w-full bg-primary origin-top h-0"></div>
        </div>
        
        <div className="space-y-16 relative z-10">
          {EXPERIENCE_DATA.map((item, index) => (
            <EvolutionItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
