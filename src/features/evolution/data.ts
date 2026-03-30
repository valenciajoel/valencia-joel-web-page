import { ExperienceItem } from "./types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'startup-ia',
    year: "2026 - Presente",
    role: "Founder & Lead Architect",
    company: "Startup de Soluciones Web & IA",
    description: "Liderazgo técnico en el diseño de arquitecturas de alto rendimiento (Next.js) y automatización de procesos mediante Agentes de IA bajo Spec-Driven Design.",
    technologies: ["Next.js", "AI Agents", "Spec-Driven"],
    type: 'work'
  },
  {
    id: 'erp-textil',
    year: "2023 - Presente",
    role: "Architect & Consultant",
    company: "ERP Ecosistema Textil",
    description: "Diseño de un Monolito Modular con DDD para una PyME textil, reemplazando procesos manuales por una plataforma digital centralizada y escalable.",
    technologies: ["NestJS", "DDD", "PostgreSQL"],
    type: 'work'
  },
  {
    id: 'digital-transformation',
    year: "2026 (Proyecto)",
    role: "Digital Consultant",
    company: "Sector Salud (Óptica)",
    description: "Migración estratégica de sistemas legacy a cloud (AppSheet), eliminando dependencias de infraestructura antigua y habilitando movilidad total.",
    type: 'project'
  },
  {
    id: 'education-ort',
    year: "Finalizado",
    role: "Analista de Sistemas",
    company: "ORT Argentina",
    description: "Sólida base técnica en algoritmos, estructuras de datos y metodologías de desarrollo de software modernas.",
    type: 'education'
  }
];
