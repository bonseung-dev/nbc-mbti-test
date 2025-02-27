import React, { createContext, useEffect, useState } from "react";
import { authGetUserProfile } from "../api/auth";
// Token을 localStorage에 저장하고 전역으로 관리
export const AuthContext = createContext();
// Token context 생성
// const token = localStorage.getItem("accessToken");

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (token && !currentUser) {
      authGetUserProfile(token)
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((error) => {
          console.error("프로필 정보를 불러오는데 실패했습니다.", error);
        });
    }
  }, [token, currentUser]);

  const login = (newToken, userData) => {
    localStorage.setItem("accessToken", newToken);
    setToken(newToken);
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, isAuthenticated, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
