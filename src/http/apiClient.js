import axios from "axios";
import API_ENDPOINTS from "./apiEndpoints";

const API_BASE_URL = "https://localhost:44310/api/"
// Create an Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor (e.g., for adding auth tokens)
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("CO2Auth"); // Get JWT token from storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor (e.g., for handling errors globally)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized! Redirecting to login...");
            // Handle token expiration (logout, redirect, etc.)
        }
        return Promise.reject(error);
    }
);

export default apiClient;
