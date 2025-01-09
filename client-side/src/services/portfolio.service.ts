import { IPortfolio, IPortfolioResponse } from "@/models/portfolio.model";
import AXIOS_INSTANCE from "./axiosInstance";

export const getPortfolio = async (): Promise<IPortfolio[]> => {
  const response = await AXIOS_INSTANCE.get<IPortfolioResponse>("portfolio");
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
  data: FormData
): Promise<IPortfolio[]> => {
  const response = await AXIOS_INSTANCE.patch(`/portfolio/${id}`, data);
  return response.data;
};

export const deletePortfolio = async (id: string): Promise<IPortfolio[]> => {
  const response = await AXIOS_INSTANCE.delete(`/portfolio/${id}`);

  return response?.data?.data;
};
