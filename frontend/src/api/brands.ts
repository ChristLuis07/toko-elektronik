import API from "../lib/axios";

export const getBrands = async () => {
  const response = await API.get("/brands");
  return response.data;
};

export const getBrandBySlug = async (slug: string) => {
  const response = await API.get(`/brands/${slug}`);
  return response.data;
};