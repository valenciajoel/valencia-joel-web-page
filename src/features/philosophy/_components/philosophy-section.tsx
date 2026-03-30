import { PHILOSOPHY_DATA } from '../data';
import { PhilosophyCard } from './philosophy-card';
import { AbstractDiagram } from './abstract-diagram';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative w-full border-t border-white/5 py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[25%] w-px bg-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-[75%] w-px bg-white/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Content & Philosophy Cards */}
        <div className="flex flex-col gap-12 order-2 lg:order-1">
          <header className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-mono font-bold">
              Architectural Ethos
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white/95">
              Filosofía de <br />
              <span className="text-white/40">Software de Clase Mundial</span>
            </h2>
            <p className="text-white/50 max-w-lg leading-relaxed mt-4">
              Mi enfoque se basa en la creación de sistemas resilientes, escalables y 
              profundamente alineados con los objetivos de negocio del cliente. No solo 
              escribo código; diseño soluciones estratégicas.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-1">
            {PHILOSOPHY_DATA.map((pilar, index) => (
              <PhilosophyCard 
                key={pilar.id}
                {...pilar}
                index={index}
                icon={pilar.icon as any}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Abstract Visualization */}
        <div className="flex items-center justify-center order-1 lg:order-2">
          <AbstractDiagram />
        </div>
      </div>

      {/* Detail lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
