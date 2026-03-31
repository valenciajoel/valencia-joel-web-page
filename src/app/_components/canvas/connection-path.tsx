'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap-config';

export function ConnectionPath() {
  const pathRef = useRef<SVGElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    
    const svgEl = pathRef.current;
    
    // Sync the stroke animation end to the top boundary of the #contact section.
    // This ensures the path "stops" precisely when it reaches the CTA, not the page bottom.
    gsap.to(svgEl, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: () => {
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            return `top+=${contactSection.getBoundingClientRect().top + window.scrollY} top`;
          }
          return 'bottom bottom';
        },
        scrub: 1,
      }
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-30 mix-blend-screen flex items-center justify-center">
      <svg className="w-px h-full" viewBox="0 0 2 1000" preserveAspectRatio="none">
        <line
           ref={pathRef as any}
           x1="1" y1="0" x2="1" y2="1000"
           stroke="var(--color-primary)"
           strokeWidth="2"
           strokeDasharray="1000"
           strokeDashoffset="1000"
        />
      </svg>
    </div>
  );
}
