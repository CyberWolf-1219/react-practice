import { useRouter } from "next/router";
import React from "react";

function SignInBtn() {
  const router = useRouter();

  function btnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    router.push("/auth/signin");
  }

  return (
    <button
      onClick={btnClickHandler}
      className="flex flex-row items-center justify-center font-bold text-lg bg-none"
    >
      SignIn
    </button>
  );
}

export default SignInBtn;
