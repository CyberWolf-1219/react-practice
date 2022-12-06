import React from "react";

function SignInBtn({
  setSignInFormState,
}: {
  setSignInFormState: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  function btnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    setSignInFormState((prevState: Boolean) => !prevState);
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
