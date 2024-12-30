import { IBlog, IBlogResponse } from "@/models/blog.model";
import AXIOS_INSTANCE from "./axiosInstance";

export const getBlogs = async (): Promise<IBlog[]> => {
  const response = await AXIOS_INSTANCE.get<IBlogResponse>("blog");
  return response?.data?.data;
};

export const getBlogBySlug = async (slug: string): Promise<IBlog[]> => {
  const response = await AXIOS_INSTANCE.get<IBlogResponse>(`blog/${slug}`);
  return response?.data?.data;
};

export const addBlog = async (data: FormData): Promise<IBlog[]> => {
  const response = await AXIOS_INSTANCE.post<IBlogResponse>("blog", data);
  return response?.data?.data;
};

export const updateBlog = async (
  slug: string,
  data: FormData
): Promise<IBlog[]> => {
  const response = await AXIOS_INSTANCE.patch<IBlogResponse>(
    `blog/${slug}`,
    data
  );
  return response?.data?.data;
};

export const deleteBlog = async (slug: string): Promise<IBlog[]> => {
  const response = await AXIOS_INSTANCE.delete<IBlogResponse>(`blog/${slug}`);
  return response?.data?.data;
};
