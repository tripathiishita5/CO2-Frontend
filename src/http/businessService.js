import apiClient from "./apiClient";
import API_ENDPOINTS from "./apiEndpoints";

// Business travel data
export const businessTravel = async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.BUSINESSTRAVEL.BUSINESS_TRAVEL, data);
    return response.data;
}