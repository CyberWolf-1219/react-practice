import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
import { AuthContext } from "../contexts/AuthContext";

function SignUpForm({
  setSignUpState,
}: {
  setSignUpState: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  const authContext = useContext(AuthContext);

  function closeBtnHandler(event: React.MouseEvent) {
    event.preventDefault();
    setSignUpState((prevState: Boolean) => !prevState);
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
        <h2 className="w-full font-bold text-2xl text-center">Sign Up</h2>
        <label htmlFor="email_input">Email:</label>
        <input type="email" name="email" id="email_input" />
        <label htmlFor="password_input">Password:</label>
        <input type="password" name="password" id="password_input" />
        <input
          type="submit"
          value="Sign Up"
          className="w-full mt-4 transition-colors bg-white/70 hover:bg-blue-600/70 hover:text-white"
        />
      </form>
    </div>
  );
}

function SignUpModal({
  setSignUpFormState,
}: {
  setSignUpFormState: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  return (
    <>
      {ReactDOM.createPortal(
        <SignUpForm setSignUpState={setSignUpFormState} />,
        document.getElementById("portal")!
      )}
    </>
  );
}

export default SignUpModal;
