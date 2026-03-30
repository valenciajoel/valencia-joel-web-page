import React from "react";
import type { ExperienceItem } from "../types";

interface EvolutionItemProps {
  item: ExperienceItem;
  index: number;
}

export function EvolutionItem({ item, index }: EvolutionItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`timeline-item relative flex flex-col md:flex-row items-start md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Timeline Dot */}
      <div className="absolute -left-8 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full top-6 md:top-8 -translate-x-[calc(50%-1px)] z-20 shadow-[0_0_15px_hsla(199,100%,50%,0.6)]"></div>
      
      {/* Content Panel */}
      <div className={`w-full md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <div className="flex flex-col gap-2 p-6 rounded-lg bg-card/50 border border-border-active/20 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 relative group">
          <div className={`absolute top-8 w-8 h-[2px] bg-border-active/30 hidden md:block ${isEven ? '-left-8' : '-right-8'}`}></div>
          <span className="font-mono text-primary text-sm font-bold border border-primary/20 px-3 py-1 bg-primary/10 rounded-full w-fit mb-2">{item.year}</span>
          <h3 className="text-2xl font-bold text-white font-heading group-hover:text-primary transition-colors">{item.role}</h3>
          <h4 className="text-lg font-medium text-gray-400 mb-2">{item.company}</h4>
          <p className="text-gray-400 leading-relaxed font-sans text-sm md:text-base">{item.description}</p>
          {item.technologies && (
            <div className={`flex flex-wrap gap-2 mt-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
              {item.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 text-[10px] font-mono border border-border-active/20 text-gray-500 rounded lowercase">
                  #{tech.replace(/\s+/g, '-')}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
