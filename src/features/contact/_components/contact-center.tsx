"use client";

import { useState } from "react";
import { Zap, MessageCircle, Download } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactModal } from "./contact-modal";
import { SocialProofBar } from "./social-proof-bar";
import { AuroraBackground } from "./aurora-background";
import { EmbracePath } from "./embrace-path";

export function ContactCenter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="w-full h-screen min-h-[800px] flex flex-col justify-center items-center py-40 z-50 relative bg-[hsl(230,15%,4%)]">
      {/* 
        Solid opaque background (bg-[#0a0b10] matches the site's dark palette)
        Ensures global ConnectionPath and Grid are hidden within this section.
      */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundColor: "var(--color-secondary)", opacity: 0.1, zIndex: -1 }} 
      />
      
      <EmbracePath />
      <AuroraBackground />
      
      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full max-w-5xl">
        <Reveal mode="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white tracking-widest uppercase mb-4">
            Lanzamiento de Misión
          </h2>
        </Reveal>
        
        <Reveal mode="fade-up" delay={0.2}>
          <p className="text-ghost max-w-2xl text-center font-sans text-lg md:text-xl">
            Sistemas robustos que escalan con tu negocio. Hablemos sobre el próximo paso técnico.
          </p>
        </Reveal>

        <Reveal mode="fade-up" delay={0.3}>
          <div className="w-full relative">
            <SocialProofBar />
          </div>
        </Reveal>

        <Reveal mode="fade-up" delay={0.4} clip={false}>
          <div className="w-full py-4 relative z-20">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="cta-glow group flex w-full md:w-auto items-center justify-center gap-2 px-10 py-5 bg-primary text-black font-mono font-bold uppercase rounded-sm hover:-translate-y-1 transition-all animate-pulse-glow"
              >
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" /> Iniciar Proyecto
              </button>
              <a 
                href="https://wa.me/5491131447823?text=Hola%20Joel%2C%20vi%20tu%20portfolio%20y%20quiero%20hablar%20sobre%20un%20proyecto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex w-full md:w-auto items-center justify-center gap-2 px-8 py-5 border border-[#25D366]/40 text-white font-mono uppercase rounded-sm hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> WhatsApp
              </a>
              <a 
                href="/cv-joel-valencia.pdf" 
                download 
                className="group flex w-full md:w-auto items-center justify-center gap-2 px-8 py-5 border border-border-active text-ghost font-mono uppercase rounded-sm hover:bg-border-active/10 hover:text-white transition-colors"
              >
                <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" /> Descargar CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
