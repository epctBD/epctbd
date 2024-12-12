import { IProject, IProjectResponse } from "@/models/project.model";
import AXIOS_INSTANCE from "./axiosInstance";

export const getProjects = async (): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.get<IProjectResponse>("projects");
  return response?.data?.data;
};

export const createProject = async (data: FormData): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.post<IProjectResponse>(
    "projects",
    data
  );
  return response?.data?.data;
};

export const updateProject = async (
  id: string,
  data: FormData
): Promise<IProject> => {
  const response = await AXIOS_INSTANCE.put<IProject>(`projects/${id}`, data);
  return response.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await AXIOS_INSTANCE.delete(`projects/${id}`);
};
