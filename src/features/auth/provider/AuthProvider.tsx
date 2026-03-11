import AuthContext from "@/features/auth/context/AuthContext";
import { useState, type ReactNode } from "react";

type Props = { children: ReactNode };

export default function AuthProvider({ children }: Props) {
  const [token, setToken] = useState(() => localStorage.getItem("key"));

  const addToken = (token: string) => {
    localStorage.setItem("key", token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem("key");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, addToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}
