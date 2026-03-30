'use client';

import { 
  Layers, 
  Target, 
  Cpu, 
  Zap, 
  Database, 
  Shield, 
  Workflow, 
  Search 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ICON_MAP: Record<string, any> = {
  layers: Layers,
  target: Target,
  cpu: Cpu,
  zap: Zap,
  database: Database,
  shield: Shield,
  workflow: Workflow,
  search: Search,
};

interface ArchitecturalInsightProps {
  label: string;
  icon?: string;
  className?: string;
}

export function ArchitecturalInsight({ 
  label, 
  icon, 
  className 
}: ArchitecturalInsightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Icon = icon ? ICON_MAP[icon] : null;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: 'power3.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "group flex items-center gap-2 px-3 py-1.5",
        "bg-[hsla(215,20%,65%,0.05)] border border-[hsla(199,100%,50%,0.2)]",
        "rounded-sm backdrop-blur-sm transition-all duration-300",
        "hover:border-border-active hover:shadow-[0_0_15px_hsla(199,100%,50%,0.1)]",
        className
      )}
    >
      {Icon && (
        <Icon className="w-3 h-3 text-[hsl(199,100%,50%)]" />
      )}
      <span className="font-mono text-[10px] md:text-xs text-[hsla(215,20%,65%,0.8)] group-hover:text-white transition-colors">
        [ {label} ]
      </span>
    </div>
  );
}
