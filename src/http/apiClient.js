import axios from "axios";

const API_BASE_URL = "https://localhost:44310/api/";
// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Handle request interception
export const setupInterceptors = (setLoading) => {
  apiClient.interceptors.request.use(
    (config) => {
      setLoading(true); // Start loading before request
      return config;
    },
    (error) => {
      setLoading(false); // Stop loading on error
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response) => {
      setLoading(false); // Stop loading after response
      return response;
    },
    (error) => {
      setLoading(false); // Stop loading on error
      return Promise.reject(error);
    }
  );
};

export default apiClient;
