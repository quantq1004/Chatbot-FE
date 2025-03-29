import React, { createContext } from 'react';
import checkAdmin from './utils/checkAdmin';

export const AuthContext = createContext();

export const CheckAdminProvider = ({ children }) => {
  const isAdmin = checkAdmin();
  return (
    <AuthContext.Provider value={isAdmin}>{children}</AuthContext.Provider>
  );
};

export default CheckAdminProvider;
