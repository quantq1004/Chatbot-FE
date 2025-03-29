import api from './api';
import { getToken } from '../utils/localStorage';

const getChats = async (conversationId) => {
  try {
    const response = await api({
      method: 'GET',
      url: `/chats?conversationId=${conversationId}`,
    });
    return response;
  } catch (error) {
    return null;
  }
};

const createChat = async ({ userPrompt, aiResponse, conversationId }) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'POST',
      url: '/chats',
      data: { userPrompt, aiResponse, conversationId },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

const updateChat = async ({ userPrompt, aiResponse, chatId }) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'PUT',
      url: `/chats/${chatId}`,
      data: { userPrompt, aiResponse },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

const deleteChat = async (chatId) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'DELETE',
      url: `/chats/${chatId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export { getChats, createChat, updateChat, deleteChat };
