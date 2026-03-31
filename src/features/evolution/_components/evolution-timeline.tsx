"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap-config";
import { EXPERIENCE_DATA } from "../data";
import { EvolutionItem } from "./evolution-item";
import { Reveal } from "@/components/ui/reveal";

export function EvolutionTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx: gsap.Context;
    
    // Defer GSAP initialization briefly to let sibling components (like #contact) finish mounting to DOM
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
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

        // ── Timeline line: terminate at last dot center ──
        const line = containerRef.current?.querySelector<HTMLElement>(".timeline-line");
        const contactSection = document.getElementById("contact");

        if (line && contactSection) {
          gsap.fromTo(
            line,
            { height: "0%" },
            {
              height: "100%",
              duration: 1.5,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                endTrigger: contactSection,
                end: "top 75%",
                scrub: 1,
              },
            }
          );
        } else if (line) {
           // Fallback if #contact is not found: just animate relative to self
           gsap.fromTo(
            line,
            { height: "0%" },
            {
              height: "100%",
              duration: 1.5,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                end: "bottom bottom",
                scrub: 1,
              },
            }
          );
        }
      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <section id="evolution" className="w-full max-w-4xl mx-auto px-4 py-32 z-10 relative text-left md:text-center">
      <Reveal mode="fade-up" delay={0.2}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">Evolución</h2>
          <p className="font-mono uppercase tracking-widest text-sm text-primary mt-4">Trajectory &amp; Experience</p>
        </div>
      </Reveal>

      {/* timeline-track allows line to go all the way down. Section has pb-32 so we use -bottom-32 */}
      <div ref={containerRef} className="relative pl-8 md:pl-0">
        <div className="timeline-track absolute left-[39px] md:left-1/2 top-4 -bottom-32 w-[2px] bg-border-active/30 -ml-px z-0 overflow-hidden">
          <div className="timeline-line absolute top-0 left-0 w-full bg-primary origin-top h-0" />
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
