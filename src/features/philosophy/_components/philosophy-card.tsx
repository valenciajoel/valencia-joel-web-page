'use client';

import { Target, Layers, Workflow } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  target: Target,
  layers: Layers,
  workflow: Workflow,
};

interface PhilosophyCardProps {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  index: number;
}

export function PhilosophyCard({ id, title, description, icon, index }: PhilosophyCardProps) {
  const Icon = iconMap[icon];

  return (
    <div 
      className={cn(
        "philosophy-card group relative p-8 border-l border-white/10 hover:border-white/30 transition-colors bg-white/2 backdrop-blur-sm",
        "flex flex-col gap-4"
      )}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-white/30">{id}</span>
        <Icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
      </div>
      
      <h3 className="text-xl font-medium tracking-tight text-white/90">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
        {description}
      </p>

      {/* Detail line decoration */}
      <div className="absolute left-0 top-0 h-0 w-px bg-linear-to-b from-blue-500/50 to-transparent group-hover:h-full transition-all duration-700" />
    </div>
  );
}
