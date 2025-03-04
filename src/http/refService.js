import apiClient from "./apiClient";
import API_ENDPOINTS from "./apiEndpoints";

//Get distinct locations with names and codes
export const getRefData = async (type) => {
    const response = await apiClient.get(API_ENDPOINTS.REF.GET_REF_DATA(type));
    return response.data;
};

// Get emission factor data
export const getEmissionFactors = async () => {
    const response = await apiClient.get(API_ENDPOINTS.REF.GET_EMISSION_FACTORS);
    return response.data;
}