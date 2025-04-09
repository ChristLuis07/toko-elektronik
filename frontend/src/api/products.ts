import API from "../lib/axios";

export const getProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export const getProductBySlug = async (slug: string) => {
  const response = await API.get(`/products/${slug}`);
  return response.data;
};