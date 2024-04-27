/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("token", JSON.stringify(token));
  }, [currentUser, token]);
  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, setToken, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
