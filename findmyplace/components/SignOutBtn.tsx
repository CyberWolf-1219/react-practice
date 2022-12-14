import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";

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
      className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black"
    >
      <FiLogOut />
      <span className="md:hidden">SignOut</span>
    </button>
  );
}

export default SignOutBtn;
