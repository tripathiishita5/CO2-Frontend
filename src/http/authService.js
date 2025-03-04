import apiClient from "./apiClient";
import API_ENDPOINTS from "./apiEndpoints";

// Fetch all users
export const login = async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, data);
    return response.data;
};

export const logout = async() => {
    const response = await apiClient.get(API_ENDPOINTS.AUTH.LOGOUT);
    return response.data;
};