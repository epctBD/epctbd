// services/apiService.ts
import Axios from "axios";

const AXIOS_INSTANCE = Axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

export default AXIOS_INSTANCE;
