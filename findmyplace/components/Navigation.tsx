import React, { useRef, useEffect } from "react";

function Navigation({ navState }: { navState: Boolean }) {
  const navigation = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navState && navigation.current) {
      navigation.current.classList.add("translate-x-full");
    } else {
      navigation.current?.classList.remove("translate-x-full");
    }
  });

  return (
    <nav
      ref={navigation}
      className={`fixed z-40 w-screen h-screen flex flex-col items-center justify-center transition-transform bg-emerald-500 text-gray-700 font-bold text-2xl lg:relative lg:h-fit lg:max-w-screen-xl lg:mx-auto lg:p-2 lg:-translate-x-0 lg:justify-between lg:flex-row`}
    >
      <img src="" alt="" />
      <ul className="w-full lg:w-auto flex flex-col lg:flex-row items-center justify-start gap-4 lg:text-base">
        <li className="p-3 hover:bg-emerald-500/75 hover:text-white rounded-lg transition-colors">
          {" "}
          NavLink{" "}
        </li>
        <li className="p-3 hover:bg-emerald-500/75 hover:text-white rounded-lg transition-colors">
          {" "}
          NavLink{" "}
        </li>
        <li className="p-3 hover:bg-emerald-500/75 hover:text-white rounded-lg transition-colors">
          {" "}
          NavLink{" "}
        </li>
        <li className="p-3 hover:bg-emerald-500/75 hover:text-white rounded-lg transition-colors">
          {" "}
          NavLink{" "}
        </li>
        <li className="p-3 hover:bg-emerald-500/75 hover:text-white rounded-lg transition-colors">
          {" "}
          NavLink{" "}
        </li>
        <li className="">
          <button
            type="submit"
            className="p-3 rounded-lg text-emerald-500 bg-white"
          >
            Add One
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
