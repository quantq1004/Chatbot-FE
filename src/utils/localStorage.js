const setToken = (token) => localStorage.setItem('token', token);

const getToken = () => localStorage.getItem('token');

const removeToken = () => localStorage.removeItem('token');

const setUserId = (userId) => localStorage.setItem('userId', userId);

const getUserId = () => localStorage.getItem('userId');

const removeUserId = () => localStorage.removeItem('userId');

export { setToken, getToken, removeToken, setUserId, getUserId, removeUserId };
