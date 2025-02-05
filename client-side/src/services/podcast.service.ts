import { IPodcast, IPodcastResponse } from "@/models/podcast.model";
import AXIOS_INSTANCE from "./axiosInstance";

export const getPodcasts = async (): Promise<IPodcast[]> => {
  const response = await AXIOS_INSTANCE.get<IPodcastResponse>("podcast");
  return response?.data?.data;
};

export const addPodcast = async (data: IPodcast): Promise<IPodcast[]> => {
  const response = await AXIOS_INSTANCE.post<IPodcastResponse>("podcast", data);
  return response?.data?.data;
};

export const deletePodcast = async (id: string): Promise<IPodcast[]> => {
  const response = await AXIOS_INSTANCE.delete<IPodcastResponse>(
    `/podcast/${id}`
  );
  return response?.data?.data;
};
