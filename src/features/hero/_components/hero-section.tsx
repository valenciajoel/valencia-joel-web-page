'use client';

import { ButtonTech } from '@/components/ui/button-tech';
import { ArchitecturalInsight } from '@/components/ui/architectural-insight';
import { Reveal } from '@/components/ui/reveal';
import { useLenis } from '@/lib/motion/lenis-provider';

export function HeroSection() {
  const lenis = useLenis();

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target && lenis) {
      lenis.scrollTo(target as HTMLElement, {
        offset: -80,
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-24 md:pt-0">
      <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="flex justify-center mb-6">
          <Reveal delay={0.2}>
            <ArchitecturalInsight label="Pattern: Domain-Centric" icon="layers" />
          </Reveal>
        </div>
        
        <Reveal mode="fade-up" delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white mb-4">
            Arquitectura escalable antes que código. <br />
            <span className="text-primary italic">Priorizando el dominio estratégico.</span>
          </h1>
        </Reveal>
        
        <Reveal mode="fade-up" delay={0.6}>
          <p className="text-lg md:text-xl text-[hsla(215,20%,65%,0.8)] font-sans max-w-3xl mx-auto leading-relaxed">
            Software Architect & Fullstack Developer enfocado en construir sistemas resilientes de alto rendimiento, modernización de legados y orquestación de Agentes de IA para el impacto real en el negocio.
          </p>
        </Reveal>

        <Reveal mode="fade-up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <ButtonTech variant="default" onClick={() => handleScrollTo('#projects')}>
              Ver Proyectos
            </ButtonTech>
            <ButtonTech variant="outline" onClick={() => handleScrollTo('#contact')}>
              Consultar Estrategia
            </ButtonTech>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
