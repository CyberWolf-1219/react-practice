import React from "react";
import { useRouter } from "next/router";

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
        className="flex flex-row items-center justify-center font-bold text-lg bg-none"
      >
        SignUp
      </button>
    </>
  );
}

export default SignUpBtn;
