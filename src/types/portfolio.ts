export type ThemeMode = 'dark' | 'light';

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'languages' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'tools';
  level: string;
  description: string;
}

export interface ProjectBullet {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  primaryBadge: string;
  secondaryBadge: string;
  secondaryBadgeType: 'success' | 'info' | 'warning' | 'secondary';
  summary: string;
  features: ProjectBullet[];
  tags: string[];
  githubUrl: string;
  hasArchitecture: boolean;
  modalId?: string;
  isHighlight?: boolean;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  access: string;
  description: string;
}

export interface ArchitectureStep {
  step: string;
  description: string;
}

export interface ProjectArchitecture {
  id: string;
  title: string;
  badgeText: string;
  badgeType: 'primary' | 'info';
  overview: string;
  steps: ArchitectureStep[];
  endpoints?: ApiEndpoint[];
  schemaSnippet?: {
    title: string;
    code: string;
  };
  githubUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  startDate: string;
  startDateTime: string;
  endDate: string;
  endDateTime: string;
  location: string;
  points: string[];
  techs: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  startDate: string;
  startDateTime: string;
  endDate: string;
  endDateTime: string;
  location: string;
  cgpa?: string;
  description: string;
  techs: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  badgeText: string;
  badgeVariant?: 'neutral' | 'primary';
  isHighlight?: boolean;
  type: 'cert' | 'workshop';
  description: string;
  tags: string[];
}

export interface ContactInfo {
  iconType: 'email' | 'phone' | 'linkedin' | 'github';
  label: string;
  value: string;
  href: string;
  hint?: string;
  copyText?: string;
  isExternal?: boolean;
}
