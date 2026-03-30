import { HeroSection } from '@/features/hero/_components/hero-section';
import { PhilosophySection } from '@/features/philosophy/_components/philosophy-section';
import { SkillsGrid } from '@/features/expertise/_components/skills-grid';
import { ProjectCard } from '@/features/projects/_components/project-card';
import { ModularNavbar } from './_components/navigation/modular-navbar';
import { ConnectionPath } from './_components/canvas/connection-path';
import { EvolutionTimeline } from '@/features/evolution';
import { ContactCenter } from '@/features/contact/_components/contact-center';
import { PROJECT_DATA } from '@/features/projects/data';
import { Reveal } from '@/components/ui/reveal';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <ModularNavbar />
      <ConnectionPath />
      <HeroSection />
      <PhilosophySection />
      <SkillsGrid />
      
      <section id="projects" className="w-full max-w-7xl px-4 py-24 space-y-12 z-10">
        <Reveal mode="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-white tracking-tight">
            Proyectos <span className="text-primary italic">Estratégicos</span>
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              architecture={project.architecture}
              impactMetrics={project.impactMetrics}
              insights={project.insights}
            />
          ))}
        </div>
      </section>

      <EvolutionTimeline />

      <ContactCenter />
    </main>
  );
}
