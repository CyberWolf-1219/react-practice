import React from "react";
import { useRouter } from "next/router";
import { FiCompass } from "react-icons/fi";

function HomeBtn() {
  const router = useRouter();

  function HomeBtnHanlder(event: React.MouseEvent) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <>
      <button
        onClick={HomeBtnHanlder}
        className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black"
      >
        <FiCompass />

        <span className="md:hidden">Profile</span>
      </button>
    </>
  );
}

export default HomeBtn;
