import { GlowFrame } from '@/components/ui/glow-frame';
import { Project } from '@/types/portfolio';
import { ArchitecturalInsight } from '@/components/ui/architectural-insight';
import { CheckCircle2 } from 'lucide-react';

export function ProjectCard({ 
  title, 
  description, 
  tech, 
  architecture,
  impactMetrics = [],
  insights = []
}: Omit<Project, 'id'>) {
  return (
    <GlowFrame className="flex flex-col h-full bg-[hsla(230,15%,8%,0.5)] border-[hsla(199,100%,50%,0.2)] hover:border-border-active transition-all group p-6">
      <div className="flex-1 space-y-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {insights?.map((insight, i) => (
            <ArchitecturalInsight 
              key={i} 
              label={insight.label} 
              icon={insight.icon} 
              className="px-2 py-0.5" 
            />
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-heading font-bold mb-1 text-white group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-xs font-mono text-primary/80 uppercase tracking-widest">{architecture}</p>
        </div>

        <p className="text-[hsla(215,20%,65%,0.8)] font-sans leading-relaxed text-sm">
          {description}
        </p>

        {impactMetrics && impactMetrics.length > 0 && (
          <div className="space-y-2 py-4 border-y border-[hsla(215,20%,65%,0.1)]">
            <p className="text-[10px] font-mono text-[hsla(215,20%,65%,0.5)] uppercase">Resultados & Impacto</p>
            <ul className="space-y-2">
              {impactMetrics.map((metric, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[hsla(215,20%,65%,0.9)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {tech.map((t, i) => (
          <span key={i} className="text-[10px] px-2 py-1 bg-[hsla(215,20%,65%,0.05)] rounded-sm border border-[hsla(215,20%,65%,0.1)] font-mono text-[hsla(215,20%,65%,0.7)]">
            {t}
          </span>
        ))}
      </div>
    </GlowFrame>
  );
}
