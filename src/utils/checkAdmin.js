import jwtDecode from 'jwt-decode';
import { getToken } from './localStorage';

const checkAdmin = () => {
  const token = getToken();
  const decodedToken = token ? jwtDecode(token) : null;
  const isAdmin = decodedToken && decodedToken.isAdmin;
  return isAdmin;
};

export default checkAdmin;
