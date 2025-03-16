import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

function Context({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("isAdmin");
    setIsAdmin(savedAdmin === "true");
    setLoading(false);
  }, []);

  const login = (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };
  const value = { isAdmin, login, logout, setIsAdmin, loading, setLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default Context;

export const useAuth = () => {
  return useContext(AuthContext);
};