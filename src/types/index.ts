// Types for the portfolio
export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
  description: string;
  source: string;
}

export interface Certification {
  title: string;
  issuer: string;
  skills: string[];
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  graduationYear: string;
  cgpa: string;
}

export interface ProjectHighlight {
  name: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ProjectHighlight[];
}

export interface Project {
  id: string;
  title: string;
  company: string;
  category: 'AI/ML' | 'Cloud' | 'Backend';
  shortDescription: string;
  technologies: string[];
  engineeringHighlights: string[];
  confidential?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type FieldMatchStatus = 'MATCH' | 'MISMATCH' | 'NOT_FOUND';
