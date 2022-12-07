import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";

function SignOutBtn() {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  function btnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    authContext.signout();
  }

  return (
    <button
      onClick={btnClickHandler}
      className="flex flex-row items-center justify-center font-bold text-lg bg-none"
    >
      SignOut
    </button>
  );
}

export default SignOutBtn;
