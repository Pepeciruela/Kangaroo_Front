import axiosClient, { removeAuthorizationHeader, setAuthorizationHeader } from '../client';
import storage from '../../utils/storage';

const usersURL = process.env.REACT_APP_USERS_BASE_URL;
const loginURL = process.env.REACT_APP_LOGIN_BASE_URL;

export const login = ({ rememberMe, ...credentials }) => {
  const url = `${loginURL}/login`;
  return axiosClient
    .post(url, credentials)
    .then(({ token, results }) => {
      const { _id, name, email, imageAvatar } = results;
      setAuthorizationHeader(token);
      return { token, _id, name, email, imageAvatar };
    })
    .then(({ token, _id, name, email, imageAvatar }) => {
      if (rememberMe) {
        storage.remove('auth');
        storage.remove('user_data');
        storage.set('auth', token);
        storage.set('user_data', { _id, name, email, imageAvatar });
      } else {
        storage.session('auth', token);
        storage.session('user_data', { _id, name, email, imageAvatar });
      }
      return { _id, name, email, imageAvatar };
    });
};

export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
    storage.remove('user_data');
  });

export const forgottenPassword = (email) => {
  const url = `${usersURL}/forgot-password`;
  return axiosClient.put(url, {
    email: `${email.content}`
  });
};

export const resetForgottenPassword = (data, userToken) => {
  const url = `${usersURL}/new-password/${userToken}`;
  axiosClient.defaults.headers.common['reset'] = `${userToken}`;
  return axiosClient.put(url, {
    newPassword: `${data.password}`,
    newPasswordConfirmation: `${data.confirmPassword}`
  });
};

export const setNewPassword = (newPassword, userId) => {
  const url = `${usersURL}/change-password/${userId}`;
  return axiosClient.put(url, newPassword);
};

export const registerNewAccount = (newUser) => {
  // const registerNewUser = new FormData();
  // registerNewUser.append('username', newUser.username);
  // registerNewUser.append('email', newUser.email);
  // registerNewUser.append('password', newUser.password);
  // registerNewUser.append('confirmPassword', newUser.confirmPassword);
  // if (newUser.imageAvatar) newUser.append('avatar', newUser.imageAvatar);

  const url = `${usersURL}/register`;
  return axiosClient.post(url, newUser);
};

export const confirmRegister = (userToken) => {
  const url = `${usersURL}/confirm-signup/${userToken}`;
  return axiosClient.put(url);
};

export const deleteAccount = (userId) => {
  const url = `${usersURL}/${userId}`;
  return axiosClient.delete(url);
};

export const getAllUsers = async () => {
  const url = `${usersURL}`;
  return await axiosClient.get(url);
};

export const getOneUserForId = async (userId) => {
  const url = `${usersURL}/${userId}`;
  return await axiosClient.get(url).then(({ results }) => {
    const { _id, name, email, imageAvatar, location, followers, followings, personalDescription } =
      results;
    return { _id, name, email, imageAvatar, location, followers, followings, personalDescription };
  });
};

export const updateUser = async (userInfo, userId) => {
  const url = `${usersURL}/${userInfo._id}`;
  return await axiosClient.put(url, userInfo);
};

export const deleteUser = async (userId) => {
  const url = `${usersURL}/${userId}`;
  return await axiosClient.delete(url);
};
