import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));

  return (
    <UserContext.Provider value={{ jwt, setJWT }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
