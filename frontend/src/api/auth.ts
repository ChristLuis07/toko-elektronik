import API from "../lib/axios";

export const register = async (formData: FormData) => {
  const response = await API.post("/register", formData);
  return response.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await API.post("/login", credentials);
  return response.data;
};

export const logout = async () => {
  const response = await API.post("/logout");
  return response.data;
};

export const getUser = async () => {
  const response = await API.get("/user");
  return response.data;
};