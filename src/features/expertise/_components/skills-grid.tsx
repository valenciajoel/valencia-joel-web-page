import { ArchitecturalInsight } from '@/components/ui/architectural-insight';
import { Reveal } from '@/components/ui/reveal';

export function SkillsGrid() {
  const categories = [
    { 
      name: 'Backend & Systems', 
      skills: ['NestJS (Expert)', 'Go', 'PostgreSQL', 'DDD Patterns', 'Microservices', 'Event-Driven Core'] 
    },
    { 
      name: 'Frontend & Experience', 
      skills: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind 4', 'GSAP / Framer Motion', 'Zustand'] 
    },
    { 
      name: 'Architecture & AI', 
      skills: ['Screaming Architecture', 'Hexagonal Architecture', 'AI Agents Integration', 'Spec-Driven Design', 'Legacy Modernization'] 
    }
  ];

  return (
    <section id="expertise" className="w-full py-24 max-w-6xl mx-auto px-4 z-10 relative">
      <div className="flex justify-center mb-6">
        <Reveal delay={0.2}>
          <ArchitecturalInsight label="Stack: Industry-Standard" icon="cpu" />
        </Reveal>
      </div>
      
      <Reveal mode="fade-up" delay={0.4}>
        <h2 className="text-4xl text-center md:text-5xl font-heading font-bold mb-16 text-white tracking-tight">
          Ecosistema de <span className="text-primary italic">Alta Performance</span>
        </h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((cat, i) => (
          <Reveal key={i} delay={0.6 + i * 0.2} mode="fade-up">
            <div className="space-y-6 group">
              <h3 className="text-xl font-mono text-primary border-b border-[hsla(199,100%,50%,0.2)] pb-4 uppercase tracking-wider group-hover:border-[hsla(199,100%,50%,0.5)] transition-all">
                {cat.name}
              </h3>
              <ul className="space-y-4">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center text-[hsla(215,20%,65%,0.8)] font-sans hover:text-white transition-colors group/item">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-4 opacity-40 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
