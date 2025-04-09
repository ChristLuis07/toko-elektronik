import API from "../lib/axios";

export const getCategories = async () => {
  const response = await API.get("/categories");
  return response.data;
};

export const getCategoryBySlug = async (slug: string) => {
  const response = await API.get(`/categories/${slug}`);
  return response.data;
};