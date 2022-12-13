import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../contexts/AuthContext";
import { userObj } from "../types/types";
import PopupModal from "./PopupModal";

function SignUpForm() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const [processing, setProcessing] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<string | null>(null);
  const [userSubType, setUserSubType] = useState<string | null>(null);
  const [signupResult, setSignupResult] = useState<string | null>();

  async function signup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userData: userObj = {
      email: email,
      password: password,
      userType: userType,
      userSubType: userSubType,
    };

    if (
      userData.email.length <= 0 ||
      userData.password.length <= 5 ||
      userType == "" ||
      userType == null
    ) {
      setSignupResult(
        "Need a valid email and a password longer than 5 characters."
      );
      setTimeout(() => {
        setSignupResult(null);
      }, 1500);
    } else {
      setProcessing(true);
      const result = await authContext.signup(userData);
      setProcessing(false);
      setSignupResult(result.msg);
      setTimeout(() => {
        setSignupResult(null);
        if (result.status == 0) {
          router.push("/");
        }
      }, 1500);
    }
  }

  function emailInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function passwordInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  function userTypeChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    setUserType(event.target.value);
  }

  function userSubTypeChangeHandler(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    event.preventDefault();
    setUserSubType(event.target.value);
  }

  if (!processing) {
    return (
      <div className="absolute z-20 top-0 -left-full w-full h-screen transition-translate translate-x-full flex flex-col items-center justify-center backdrop-blur-md">
        <form
          onSubmit={signup}
          className="w-fit h-fit flex flex-col items-start justify-start font-semibold text-base"
        >
          <h2 className="w-full font-bold text-2xl text-center">Sign Up</h2>
          <label htmlFor="email_input">Email:</label>
          <input
            type="email"
            name="email"
            id="email_input"
            onChange={emailInputHandler}
          />
          <label htmlFor="password_input">Password:</label>
          <input
            type="password"
            name="password"
            id="password_input"
            onChange={passwordInputHandler}
          />
          <label htmlFor="user_type_input">You Are A:</label>
          <select
            onChange={userTypeChangeHandler}
            name="user_type"
            id="user_type_input"
            className="w-full p-2"
            defaultValue={""}
          >
            <option>Choose A Type</option>
            <option value="scouter">Scouter</option>
            <option value="provider">Provider</option>
          </select>
          {userType == "provider" ? (
            <>
              <label htmlFor="user_subtype_input">You Are A:</label>
              <select
                onChange={userSubTypeChangeHandler}
                name="user_subtype"
                id="user_subtype_input"
                className="w-full p-2"
                defaultValue={""}
              >
                <option>Choose A Type</option>
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
              </select>
            </>
          ) : null}
          <input
            type="submit"
            value="Sign Up"
            className="w-full mt-4 transition-colors bg-white/70 hover:bg-blue-600/70 hover:text-white"
          />
        </form>
        {signupResult ? (
          <PopupModal title="Sign Up" msg={signupResult} />
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="font-bold text-4xl">Wait A Teeny Bit...</h2>
        <div className="w-fit h-fit flex flex-col items-center justify-center">
          <img src="/processing.gif" alt="" className="w-[150px] h-[150px]" />
          <a
            href="https://www.flaticon.com/free-animated-icons/gear"
            title="gear animated icons"
            className="font-thin text-sm"
          >
            Gear animated icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
