import { useRouter } from "next/router";
import React from "react";

const AUTH_URL = "/api/auth";

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  register: () => {},
});

function AuthContextProvider({ children }) {
  const router = useRouter();

  async function login(userName, userPassword) {
    const data = {
      action: "login",
      user_name: userName,
      user_password: userPassword,
    };

    const reqInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(AUTH_URL, reqInit);
    const jsonResData = await response.json();

    if (jsonResData.loggedIn) {
      sessionStorage.loggedIn = true;
      sessionStorage.userID = jsonResData.user_details.user_id;
      sessionStorage.userName = jsonResData.user_details.user_name;
      sessionStorage.userEmail = jsonResData.user_details.user_email;
      sessionStorage.userGender = jsonResData.user_details.user_gender;

      router.replace("/");
    }
  }

  function logout() {
    console.log(`LOGGING OUT`);
    sessionStorage.clear();
    router.replace("/auth");
  }

  async function register(
    userName,
    userPassword,
    userEmail,
    userGender,
    userPersonality
  ) {
    const data = {
      action: "register",
      user_name: userName,
      user_password: userPassword,
      user_email: userEmail,
      user_gender: userGender,
      user_personality: userPersonality,
    };

    const reqInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(AUTH_URL, reqInit);
    const jsonResData = await response.json();
    alert("😀: You Are Registered! Now login.");
  }

  return (
    <AuthContext.Provider value={{ login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
