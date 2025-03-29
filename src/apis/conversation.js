import api from './api';
import { getToken, getUserId } from '../utils/localStorage';

const getConversations = async () => {
  try {
    const userId = getUserId();
    const response = await api({
      method: 'GET',
      url: `/conversations?userId=${userId}`,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const getConversation = async (conversationId) => {
  try {
    const response = await api({
      method: 'GET',
      url: `/conversation/${conversationId}`,
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const createConversation = async (title) => {
  try {
    const token = getToken();
    const userId = getUserId();
    const response = await api({
      method: 'POST',
      url: '/conversations',
      data: { title, userId },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const updateConversation = async (conversationId, title) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'PUT',
      url: `/conversation/${conversationId}`,
      data: { title },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

const deleteConversation = async (conversationId) => {
  try {
    const token = getToken();
    const response = await api({
      method: 'DELETE',
      url: `/conversation/${conversationId}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response?.data;
  }
};

export {
  getConversations,
  getConversation,
  createConversation,
  updateConversation,
  deleteConversation,
};
