"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap-config";

export function EmbracePath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathLRef = useRef<SVGPathElement>(null);
  const pathRRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    let ctx: gsap.Context;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const pathL = pathLRef.current;
        const pathR = pathRRef.current;
        const contactSection = document.getElementById("contact");

        if (pathL && pathR && contactSection) {
          const lengthL = pathL.getTotalLength();
          const lengthR = pathR.getTotalLength();
          
          const dashL = Math.ceil(lengthL) + 5;
          const dashR = Math.ceil(lengthR) + 5;

          gsap.set(pathL, { strokeDasharray: dashL, strokeDashoffset: dashL });
          gsap.set(pathR, { strokeDasharray: dashR, strokeDashoffset: dashR });

          gsap.to([pathL, pathR], {
            strokeDashoffset: 0,
            scrollTrigger: {
              trigger: contactSection,
              start: "top 75%",
              end: "top 45%",
              scrub: 1,
            },
          });
        }
      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full pointer-events-none z-0">
      <svg
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[100px]"
        preserveAspectRatio="none"
      >
        <path
          ref={pathLRef}
          d="M600 0 C600 50, 400 50, 0 50"
          stroke="var(--color-primary)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          filter="drop-shadow(0 0 12px var(--color-primary))"
        />
        <path
          ref={pathRRef}
          d="M600 0 C600 50, 800 50, 1200 50"
          stroke="var(--color-primary)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          filter="drop-shadow(0 0 12px var(--color-primary))"
        />
      </svg>
    </div>
  );
}
