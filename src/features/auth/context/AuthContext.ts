import { createContext } from "react";

type AuthContextConfig = {
  token: string | null;
  addToken: (token: string) => void;
  removeToken: () => void;
};

export default createContext<AuthContextConfig>({} as AuthContextConfig);
