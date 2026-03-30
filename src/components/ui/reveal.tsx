'use client';

import { useLayoutEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface RevealProps {
  children: ReactNode;
  mode?: 'fade-up' | 'words' | 'lines';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function Reveal({ 
  children, 
  mode = 'fade-up', 
  delay = 0, 
  duration = 0.8,
  stagger = 0.1
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const element = containerRef.current;
      if (!element) return;

      // Basic fade-up with stagger for direct children
      gsap.from(element.children, {
        opacity: 0,
        y: 30,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: 'power3.out',
        clearProps: 'all'
      });
    });
    
    return () => ctx.revert();
  }, [mode, delay, duration, stagger]);

  return (
    <div 
      ref={containerRef} 
      className="reveal-wrapper-outer overflow-hidden"
    >
      {children}
    </div>
  );
}
