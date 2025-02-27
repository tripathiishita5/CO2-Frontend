import apiClient from "./apiClient";
import API_ENDPOINTS from "./apiEndpoints";

// // Fetch user by ID
// export const getUserById = async (id) => {
//     const response = await apiClient.get(API_ENDPOINTS.USERS.GET_BY_ID(id));
//     return response.data;
// };

// // Create new user
// export const createUser = async (userData) => {
//     const response = await apiClient.post(API_ENDPOINTS.USERS.CREATE, userData);
//     return response.data;
// };

// // Update user
// export const updateUser = async (id, userData) => {
//     const response = await apiClient.put(API_ENDPOINTS.USERS.UPDATE(id), userData);
//     return response.data;
// };

// // Delete user
// export const deleteUser = async (id) => {
//     const response = await apiClient.delete(API_ENDPOINTS.USERS.DELETE(id));
//     return response.data;
// };