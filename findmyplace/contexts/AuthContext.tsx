import React, { useState } from "react";

type AuthData = { userName: string; password: string };

interface IAuthContext {
  isLoggedIn: Boolean;
  signup: Function;
  login: Function;
  logout: Function;
}

const AuthContext = React.createContext<IAuthContext>({
  isLoggedIn: false,
  signup: () => {},
  login: () => {},
  logout: () => {},
});

function AuthContextProvider({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  function signup(data: AuthData) {}
  function login(data: AuthData) {}
  function logout() {}

  return (
    <AuthContext.Provider value={{ isLoggedIn, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthContextProvider;
