// services/apiService.ts
import Axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://epct-production.up.railway.app/api/" // Production URL
    : "http://localhost:5000/api/"; // Local URL

const AXIOS_INSTANCE = Axios.create({
  baseURL,
  withCredentials: true,
});

export default AXIOS_INSTANCE;
