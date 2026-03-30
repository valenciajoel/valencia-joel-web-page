import { Project } from '@/types/portfolio';

export const PROJECT_DATA: Project[] = [
  {
    id: 'erp-industrial',
    title: 'ERP Industrial Textil',
    description: 'Rediseño completo del núcleo de negocio para manufactura a gran escala, eliminando silos de información y cuellos de botella operativos.',
    tech: ['NestJS', 'PostgreSQL', 'DDD'],
    architecture: 'Modular Monolith',
    impactMetrics: [
      'Digitalización del 100% del ciclo productivo',
      'Optimización de inventarios en tiempo real'
    ],
    insights: [
      { label: 'Modular Monolith', icon: 'layers' },
      { label: 'Event-Driven Core', icon: 'zap' }
    ]
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Modernization: VBA to Web',
    description: 'Ingeniería de transición para sistemas críticos de alta precisión, garantizando la continuidad operativa mientras se eleva el estándar tecnológico.',
    tech: ['Next.js 15', 'TypeScript', 'Node.js'],
    architecture: 'Legacy Bridge Pattern',
    impactMetrics: [
      'Reducción del 80% en error humano operativo',
      'Modernización de flujos legacy críticos'
    ],
    insights: [
      { label: 'Precision Engineering', icon: 'target' },
      { label: 'Legacy Bridge', icon: 'workflow' }
    ]
  },
  {
    id: 'ai-startup',
    title: 'AI Startup Ecosystem',
    description: 'Arquitectura de agentes autónomos y orquestación de LLMs para validación rápida de mercado y automatización cognitiva.',
    tech: ['Next.js 15', 'LangChain', 'OpenAI'],
    architecture: 'AI Orchestration',
    impactMetrics: [
      'Spec-Driven MVP Development',
      'Integración nativa de agentes de IA'
    ],
    insights: [
      { label: 'AI Orchestration', icon: 'cpu' },
      { label: 'Rapid Validation', icon: 'search' }
    ]
  }
];
