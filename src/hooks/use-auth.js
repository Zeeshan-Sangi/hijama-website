
    import React, { createContext, useContext, useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
      );
      const navigate = useNavigate();

      useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
      }, [isAuthenticated]);

      const login = (email, password) => {
        if (email === 'admin@hijama.com' && password === 'password123') {
          setIsAuthenticated(true);
          return true;
        }
        return false;
      };

      const logout = () => {
        setIsAuthenticated(false);
        navigate('/admin/login');
      };

      const value = { isAuthenticated, login, logout };

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    };

    export const useAuth = () => {
      return useContext(AuthContext);
    };
  