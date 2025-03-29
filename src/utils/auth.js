import jwtDecode from 'jwt-decode';

export const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    return true;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};
