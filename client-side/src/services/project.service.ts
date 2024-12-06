import { IPortfolio, IPortfolioResponse } from "@/models/portfolio.model";
import AXIOS_INSTANCE from "./axiosInstance";
import { IProject, IProjectResponse } from "@/models/project.model";
import { processQuery } from "@/utils/ProcessQuery";

export const getProjects = async (category: string): Promise<IProject[]> => {
  const url = `project${processQuery({ category: category })}`;
  const response = await AXIOS_INSTANCE.get<IProjectResponse>(url);
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
