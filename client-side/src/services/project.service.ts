import { IPortfolio, IPortfolioResponse } from "@/models/portfolio.model";
import AXIOS_INSTANCE from "./axiosInstance";
import { IProject, IProjectResponse } from "@/models/project.model";

export const getProjects = async (): Promise<IProject[]> => {
  const response = await AXIOS_INSTANCE.get<IProjectResponse>("project");
  return response?.data?.data;
};

export const createPortfolio = async (
  data: FormData
): Promise<IPortfolio[]> => {
  const response = await AXIOS_INSTANCE.post<IPortfolioResponse>(
    "portfolio",
    data
  );
  return response?.data?.data;
};

export const updatePortfolio = async (
  id: string,
  data: Partial<IPortfolio>
): Promise<IPortfolio> => {
  const response = await AXIOS_INSTANCE.put(`/portfolio/${id}`, data);
  return response.data;
};

export const deletePortfolio = async (id: string): Promise<void> => {
  await AXIOS_INSTANCE.delete(`/portfolio/${id}`);
};
