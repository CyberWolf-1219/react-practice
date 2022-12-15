import React from "react";
import { useRouter } from "next/router";
import { FiUserPlus } from "react-icons/fi";

function SignUpBtn() {
  const router = useRouter();

  function signUpBtnHanlder(event: React.MouseEvent) {
    event.preventDefault();
    router.push("/auth/signup");
  }

  return (
    <>
      <button
        onClick={signUpBtnHanlder}
        className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black"
      >
        <FiUserPlus />

        <span className="lg:hidden">SignUp</span>
      </button>
    </>
  );
}

export default SignUpBtn;
