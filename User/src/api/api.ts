import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.8:4000/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;