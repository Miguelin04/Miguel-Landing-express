
export type ScreenType = 'HOME' | 'OVERVIEW' | 'SERVICES' | 'PROCESS' | 'SCOPE' | 'ABOUT' | 'INVESTMENT';

export interface ProblemItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ScopeItem {
  id: number;
  title: string;
  description: string;
  isTop?: boolean;
  isCheck?: boolean;
}
