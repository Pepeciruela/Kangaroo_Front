import axiosClient from '../client';

const apiUploadsURL = process.env.REACT_APP_UPLOADS_BASE_URL;

export const uploadFileProfile = async (file) => {
  const url = `${apiUploadsURL}/file-profile`;
  const data = await axiosClient.post(url, file);

  return data;
};

export const uploadFile = async (file) => {
  const url = `${apiUploadsURL}/file`;
  const data = await axiosClient.post(url, file);

  return data;
};
