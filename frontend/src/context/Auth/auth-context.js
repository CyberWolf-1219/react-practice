import React, { useState } from "react";
import auth_user from "./auth-helpers";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  register: () => {},
});

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(userName, userPassword) {
    const jsonResultObj = await auth_user("login", userName, userPassword);
    console.log(jsonResultObj);

    if (jsonResultObj.status === "successful") {
      if (jsonResultObj.loggedIn === true) {
        sessionStorage.user_name = jsonResultObj.user_name;
      }

      setIsLoggedIn(jsonResultObj.loggedIn);
    }
  }

  async function register(userName, userPassword) {
    const jsonResultObj = await auth_user("register", userName, userPassword);
    console.log(jsonResultObj);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, register: register }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
