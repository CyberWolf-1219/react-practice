import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import useFetch from "../hooks/useFetch";
import { IAuthContext } from "../interfaces/all";
import { AuthData, SignUpData } from "../types/types";

const AuthContext = React.createContext<IAuthContext>({
  data: null,
  status: "",
  signup: () => {},
  signin: () => {},
  signout: () => {},
});

function AuthContextProvider({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { data, status } = useSession();

  const [executeSignUp] = useFetch("/api/auth/signup", {
    "Content-Type": "application/json",
  });

  function signup(data: SignUpData) {
    return executeSignUp(data);
  }

  async function signin(data: AuthData) {
    const signInResult = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (signInResult?.error) {
      return { loggedIn: false };
    } else {
      return { loggedIn: true };
    }
  }

  async function signout(data: { authToken: string }) {
    const signOutResult = await signOut();
  }

  return (
    <AuthContext.Provider value={{ data, status, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthContextProvider;
