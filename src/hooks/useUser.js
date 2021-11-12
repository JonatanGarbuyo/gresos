import { useCallback, useContext } from "react";
import UserContext from "../context/UserContext";
import { loginUser } from "../services/users";

export default function useUser() {
  const { jwt, setJWT } = useContext(UserContext);

  const login = useCallback(
    ({ email, password }) => {
      loginUser({ email, password })
        .then(({ token, username }) => {
          window.sessionStorage.setItem("jwt", token);
          window.sessionStorage.setItem("username", username);
          setJWT(token);
        })
        .catch((error) => {
          console.error(error);
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("username");
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    setJWT(null);
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("username");
  }, [setJWT]);

  return {
    jwt,
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
