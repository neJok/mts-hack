import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      if (config.headers) config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    // Can be modified response
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default AxiosInstance;