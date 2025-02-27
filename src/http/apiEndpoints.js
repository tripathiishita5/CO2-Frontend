const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/Auth/login"
    },
    USERS: {
        GET_BY_ID: (id) => `/users/${id}`,
        REGISTER: "/User/register",
        GET_ROLE: "/User/getUserRole"
    },
};

export default API_ENDPOINTS;
