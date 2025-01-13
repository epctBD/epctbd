import AXIOS_INSTANCE from "./axiosInstance";
import { IBook, IBookResponse } from "@/models/book.model";

export const getBooks = async (): Promise<IBook[]> => {
  const response = await AXIOS_INSTANCE.get<IBookResponse>("book");
  return response?.data?.data;
};

export const addBook = async (data: FormData): Promise<IBook[]> => {
  const response = await AXIOS_INSTANCE.post<IBookResponse>("book", data);
  return response?.data?.data;
};

// export const updateBook = async (
//   id: string,
//   data: FormData
// ): Promise<IBook[]> => {
//   const response = await AXIOS_INSTANCE.patch<IBookResponse>(
//     `/book/${id}`,
//     data
//   );
//   return response?.data?.data;
// };

export const deleteBook = async (id: string): Promise<IBook[]> => {
  const response = await AXIOS_INSTANCE.delete<IBookResponse>(`/book/${id}`);

  return response?.data?.data;
};
