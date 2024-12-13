import { IProject, IProjectResponse } from "@/models/project.model";
import AXIOS_INSTANCE from "./axiosInstance";

export const getProjects = async (): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.get<IProjectResponse>("project");
  return response?.data?.data;
};

export const addProject = async (data: FormData): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.post<IProjectResponse>("project", data);
  return response?.data?.data;
};

export const updateProject = async (
  id: string,
  data: FormData
): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.patch<IProjectResponse>(
    `project/${id}`,
    data
  );

  return response?.data?.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await AXIOS_INSTANCE.delete(`projects/${id}`);
};
