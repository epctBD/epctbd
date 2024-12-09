export interface IProject {
  _id: string;
  slug: string;
  projectSlug?: string;
  name: string;
  details: string;
  serviceType: string;
  category: string;
  area?: string;
  projectYear?: string;
  designer?: string;
  location?: string;
  projectOverview?: string;
  keyFeatures?: string;
  outcome?: string;
  projectImages?: string[];
}

export interface IProjectResponse {
  message: string;
  data: IProject[];
  success: boolean;
}
