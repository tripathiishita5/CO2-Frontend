import { api } from "./axios";

export const login = (data) => api.post("/User/login", data);
export const register = (data) => api.post("/User/register", data);