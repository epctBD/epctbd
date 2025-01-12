// services/apiService.ts
import Axios from "axios";

// const baseURL = "https://epct-production.up.railway.app/api/";
const baseURL = "http://localhost:5000/api/";

const AXIOS_INSTANCE = Axios.create({
  baseURL,
  withCredentials: true,
});

export default AXIOS_INSTANCE;
