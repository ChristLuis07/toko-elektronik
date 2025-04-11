import api from "./axios";

export const register = async (formData: FormData) => {
  const response = await api.post("/register", formData);
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export const logout = async () => {
  const response = await api.post("/logout");
  return response.data;
};

export const getUser = async () => {
  const response = await api.get("/user");
  return response.data;
};