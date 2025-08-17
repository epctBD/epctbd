import Axios from "axios";

const AXIOS_INSTANCE = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL as string,
  withCredentials: true,
});

export default AXIOS_INSTANCE;
