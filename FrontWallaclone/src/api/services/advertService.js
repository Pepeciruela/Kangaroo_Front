import axios from 'axios';
import axiosClient from '../client';

const apiAdvertsURL = process.env.REACT_APP_ADVERTS_BASE_URL;

export const getLatestAdverts = async () => {
  const url = `${apiAdvertsURL}`;
  return await axiosClient.get(url);
};

export const getLatestPaginatedAdverts = async () => {
  const url = `${apiAdvertsURL}/p&1`;
  return await axiosClient.get(url);
};

export const getUserAdverts = async (authorId) => {
  const url = `${apiAdvertsURL}/author/${authorId}`;
  return await axiosClient.get(url);
};

export const getAdvertsByCategory = async (Id) => {
  const url = `${apiAdvertsURL}/categories/${Id}`;
  return await axiosClient.get(url);
};

export const getSingleAdvert = async (id) => {
  const url = `${apiAdvertsURL}/${id}`;
  return await axiosClient.get(url);
};

export const createAdvert = async (advert) => {
  const url = `${apiAdvertsURL}`;
  return await axiosClient.post(url, advert);
};

export const updateAdvert = async (advert, advertId) => {
  const url = `${apiAdvertsURL}/${advertId}`;
  return await axiosClient.put(url, advert);
};

export const deleteAdvert = async (advertId) => {
  const url = `${apiAdvertsURL}/${advertId}`;
  return await axiosClient.delete(url);
};

export const createAdvertReview = async (advertId, review) => {
  const url = `${apiAdvertsURL}/${advertId}/reviews`;
  return await axiosClient.post(url, review);
};

export const getTags = async () => {
  const url = `${apiAdvertsURL}/tags`;
  return await axiosClient.get(url);
};
