import apiClient from "./apiClient";
import API_ENDPOINTS from "./apiEndpoints";

// Fetch user by ID
export const getUserById = async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.USERS.GET_BY_ID(id));
    return response.data;
};

// Create or Update user
export const createOrUpdateUser = async (userData) => {
    const response = await apiClient.post(API_ENDPOINTS.USERS.CREATE_UPDATE, userData);
    return response.data;
};

// Get user role
export const getUserRole = async () => {
    const response = await apiClient.get(API_ENDPOINTS.USERS.GET_ROLE);
    return response.data;
};

// // Delete user
// export const deleteUser = async (id) => {
//     const response = await apiClient.delete(API_ENDPOINTS.USERS.DELETE(id));
//     return response.data;
// };