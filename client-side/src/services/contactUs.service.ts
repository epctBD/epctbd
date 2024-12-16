import AXIOS_INSTANCE from "./axiosInstance";

export const sendMessage = async (data: any): Promise<any> => {
  const response = await AXIOS_INSTANCE.post<any>(
    `/contact-us/send-message`,
    data
  );
  return response;
};
