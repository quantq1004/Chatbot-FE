import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ConversationPage from '../pages/Conversation';
import ConversationDetailPage from '../pages/Chat';
import AccountPage from '../pages/Account';
// import UserManagementPage from '../pages/UserManagement';
import ProtectedRoute from './ProtectedRoute';
import { getToken } from '../utils/localStorage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <ConversationPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={getToken() ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={getToken() ? <Navigate to="/" /> : <RegisterPage />}
      />
      <Route
        path="/:conversationId"
        element={
          <ProtectedRoute>
            <ConversationDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRouter;
