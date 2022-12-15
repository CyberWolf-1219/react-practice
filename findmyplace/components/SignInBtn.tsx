import { useRouter } from "next/router";
import React from "react";
import { FiLogIn } from "react-icons/fi";

function SignInBtn() {
  const router = useRouter();

  function btnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    router.push("/auth/signin");
  }

  return (
    <button
      onClick={btnClickHandler}
      className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black"
    >
      <FiLogIn />
      <span className="lg:hidden">SignIn</span>
    </button>
  );
}

export default SignInBtn;
