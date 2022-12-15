import React from "react";
import { useRouter } from "next/router";
import { FiUser } from "react-icons/fi";

function ProfileBtn() {
  const router = useRouter();

  function ProfileBtnHanlder(event: React.MouseEvent) {
    event.preventDefault();
    router.push("/user");
  }

  return (
    <>
      <button
        onClick={ProfileBtnHanlder}
        className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black"
      >
        <FiUser />

        <span className="lg:hidden">Profile</span>
      </button>
    </>
  );
}

export default ProfileBtn;
