import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PopupModal from "./PopupModal";

function SignInForm() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const [processing, setProcessing] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function signinHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    setProcessing(true);
    const signInResult = await authContext.signin({
      email: email,
      password: password,
    });
    setProcessing(false);
    if (signInResult.loggedIn) {
      setMsg("Logged In!");
      setTimeout(() => {
        setMsg(null);
        router.push("/");
      }, 2000);
    } else {
      setMsg("Logging In Failed!");
      setTimeout(() => {
        setMsg(null);
      }, 2000);
    }
  }

  if (!processing) {
    return (
      <div className="absolute z-20 top-0 -left-full w-full h-screen transition-transform translate-x-full flex flex-col items-center justify-center backdrop-blur-md">
        <form
          onSubmit={signinHandler}
          className="w-fit h-fit flex flex-col items-start justify-start font-semibold text-base"
        >
          <h2 className="w-full font-bold text-2xl text-center">Sign In</h2>
          <label htmlFor="email_input">Email:</label>
          <input type="email" name="email" id="email_input" />
          <label htmlFor="password_input">Password:</label>
          <input type="password" name="password" id="password_input" />
          <input
            type="submit"
            value="Sign In"
            className="w-full mt-4 transition-colors bg-white/70 hover:bg-blue-600/70 hover:text-white"
          />
        </form>
        {msg ? <PopupModal title="Sign In" msg={msg} /> : null}
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

export default SignInForm;
