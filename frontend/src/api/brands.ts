import api from "./axios";

export const getBrands = async () => {
  const response = await api.get("/brands");
  return response.data;
};

export const getBrandBySlug = async (slug: string) => {
  const response = await api.get(`/brands/${slug}`);
  return response.data;
};