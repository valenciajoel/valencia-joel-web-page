"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { ContactForm } from "./contact-form";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(panelRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" });
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(panelRef.current, { scale: 0.9, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: onClose });
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 opacity-0"
      onClick={handleClose}
    >
      <div 
        ref={panelRef}
        className="relative w-full max-w-lg bg-secondary/80 backdrop-blur-xl border border-border/30 rounded-2xl p-6 md:p-8 shadow-2xl modal-panel opacity-0 scale-90 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="w-5 h-5 text-ghost hover:text-foreground" />
          <span className="sr-only">Cerrar</span>
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 pt-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Iniciar Proyecto</h2>
            <p className="text-sm text-muted-foreground">Cuéntame sobre tu visión y te responderé en breve.</p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
