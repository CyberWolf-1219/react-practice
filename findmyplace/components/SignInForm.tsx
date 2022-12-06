import React from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";

function SignInForm({
  setSignInFormState,
}: {
  setSignInFormState: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  function closeBtnHandler(event: React.MouseEvent) {
    event.preventDefault();
    setSignInFormState((prevState: Boolean) => !prevState);
  }

  function signup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="absolute z-20 top-0 -left-full w-full h-screen transition-translate translate-x-full flex flex-col items-center justify-center backdrop-blur-md">
      <GrClose
        onClick={closeBtnHandler}
        className="absolute top-4 right-4 hover:cursor-pointer"
      />
      <form
        onSubmit={signup}
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
    </div>
  );
}

function SignInFormModal({
  setSignInFormState,
}: {
  setSignInFormState: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  return (
    <>
      {ReactDOM.createPortal(
        <SignInForm setSignInFormState={setSignInFormState} />,
        document.getElementById("portal")!
      )}
    </>
  );
}

export default SignInFormModal;
