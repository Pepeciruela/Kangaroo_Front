import axiosClient from '../client';

const apiConversationsURL = process.env.REACT_APP_CHAT_CONVERSATIONS_BASE_URL;
const apiMessagesURL = process.env.REACT_APP_CHAT_MESSAGES_BASE_URL;

export const getAllUserConversations = async (userId) => {
  const url = `${apiConversationsURL}/${userId}`;
  return await axiosClient.get(url);
};

export const getTwoUsersConversation = async (firstUserId, secondUserId) => {
  const url = `${apiConversationsURL}/${firstUserId}/${secondUserId}`;
  return await axiosClient.get(url);
};

export const createConversation = async (conversation) => {
  const url = `${apiConversationsURL}`;
  return await axiosClient.post(url, conversation);
};

export const getAllMessagesConversation = async (conversationId) => {
  const url = `${apiMessagesURL}/${conversationId}`;
  return await axiosClient.get(url);
};

export const createMessage = async (message) => {
  const url = `${apiMessagesURL}`;
  return await axiosClient.post(url, message);
};
