import React from "react";
import SignUpForm from "./SignUpForm";

function SignUpBtn({
  setSignup,
}: {
  setSignup: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  function signUpBtnHanlder(event: React.MouseEvent) {
    event.preventDefault();
    setSignup((prevState: Boolean) => !prevState);
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
