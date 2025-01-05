import { IProject, IProjectResponse } from "@/models/project.model";
import AXIOS_INSTANCE from "./axiosInstance";
import { processQuery } from "@/utils/ProcessQuery";

export const getProjects = async (category: string): Promise<IProject[]> => {
  const url = `project${processQuery({ category: category })}`;
  const response = await AXIOS_INSTANCE.get<IProjectResponse>(url);
  console.log(response, "responseresponse");
  return response?.data?.data;
};

export const getProject = async (slug: string): Promise<IProject[]> => {
  const url = `project${processQuery({ slug: slug })}`;
  const response = await AXIOS_INSTANCE.get<IProjectResponse>(url);
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

export const deleteProject = async (id: string): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.delete(`project/${id}`);

  return response?.data?.data;
};
