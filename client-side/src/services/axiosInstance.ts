// services/apiService.ts
import Axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const AXIOS_INSTANCE = Axios.create({
  baseURL,
  withCredentials: true,
});

export default AXIOS_INSTANCE;
