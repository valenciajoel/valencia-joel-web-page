export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'education' | 'project';
}
