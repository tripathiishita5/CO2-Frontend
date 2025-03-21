const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/Auth/login",
        LOGOUT: "/Auth/logout"
    },
    USERS: {
        GET_BY_ID: (id) => `/User/getUserDetailById?userId=${id}`,
        CREATE_UPDATE: "/User/register",
        GET_ROLE: "/User/getUserRole"
    },
    REF: {
        GET_REF_DATA: (type) => `/Ref/getRefData?type=${type}`,
        GET_EMISSION_FACTORS: "/EF/getEmissionFactors"
    },
    BUSINESSTRAVEL: {
        BUSINESS_TRAVEL: "/BusinessTravel/upsert-business-travel"
    }
};

export default API_ENDPOINTS;
