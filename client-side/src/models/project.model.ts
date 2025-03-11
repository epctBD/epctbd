export interface IPhoto {
  file?: File;
  url?: string;
}
export interface IProject {
  _id: string;
  projectSlug?: string;
  name: string;
  details: string;
  serviceType: string;
  category: string;
  area?: string;
  projectYear?: string;
  designer?: string;
  architect?: string;
  structuralEngineer?: string;
  location?: string;
  projectOverview?: string;
  keyFeatures?: string;
  outcome?: string;
  projectImages?: string[];
  isFeature: boolean;
  projectVideo?: string;
}

export interface IProjectResponse {
  message: string;
  data: IProject[];
  success: boolean;
}
