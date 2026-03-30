export interface ArchitecturalInsightData {
  label: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  architecture: string;
  impactMetrics?: string[];
  insights?: ArchitecturalInsightData[];
  link?: string;
  repo?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
