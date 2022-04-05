import axiosClient from '../client';

const apiCategoryURL = process.env.REACT_APP_CATEGORY_BASE_URL;

export const getAllCategories = async () => {
  const url = `${apiCategoryURL}`;
  return await axiosClient.get(url);
};

export const getCategoryForId = async (categoryId) => {
  const url = `${apiCategoryURL}/${categoryId}`;
  return await axiosClient.get(url);
};

export const createCategory = async (category) => {
  const url = `${apiCategoryURL}`;
  return await axiosClient.post(url, category);
};

export const updateCategory = async (category) => {
  const url = `${apiCategoryURL}`;
  return await axiosClient.put(url, category);
};

export const deleteCategory = async (categoryId) => {
  const url = `${apiCategoryURL}/${categoryId}`;
  return await axiosClient.delete(url);
};
