import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import { ImSearch } from "react-icons/im";
import { FiUpload } from "react-icons/fi";
import gsap from "gsap";
import PopupModal from "../Popup/Popup";

function Navigatin() {
  const navbar = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    gsap.fromTo(navbar.current!, { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);

  function onClickHandler(event: React.MouseEvent<any>) {
    event.preventDefault();
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  }

  return (
    <>
      {isVisible ? (
        <PopupModal
          heading="MY BAD"
          msg="Looks like this is not implemented yet."
        />
      ) : null}

      <nav className="w-full h-fit p-4 flex flex-row items-center justify-center backdrop-blur-md bg-white/10 transition-colors hover:bg-white hover:text-primary">
        <div
          ref={navbar}
          className="w-full max-w-screen-xl flex items-center justify-between  "
        >
          <div className={` relative overflow-hidden h-full aspect-[3/1.5]`}>
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </div>
          <ul className="w-fit h-fit flex flex-row items-center justify-center gap-4">
            <li
              onClick={onClickHandler}
              className="font-semibold transition-all hover:scale-110 hover:text-secondary"
            >
              <a href="">Discover</a>
            </li>
            <li
              onClick={onClickHandler}
              className="font-semibold transition-all hover:scale-110 hover:text-secondary"
            >
              <a href="">
                Marketplace{" "}
                <span className="w-fit h-fit text-white p-1 rounded-sm bg-sky-500 font-semibold text-xs">
                  PRO
                </span>
              </a>
            </li>
            <li
              onClick={onClickHandler}
              className="font-semibold transition-all hover:scale-110 hover:text-secondary"
            >
              <a href="">How It Works</a>
            </li>
          </ul>
          <div className="w-fit h-fit flex items-center justify-center gap-4">
            <button
              onClick={onClickHandler}
              className="w-fit h-fit p-2 bg-sky-400 rounded-full border-none transition-all border-2 hover:scale-110 hover:bg-primary"
            >
              <ImSearch size={"1.4rem"} color={"#ffffff"} />
            </button>
            <button
              onClick={onClickHandler}
              className="w-fit h-fit p-2 border-2 border-sky-400 rounded-full bg-transparent transition-all hover:scale-110 hover:bg-secondary/50 hover:text-white hover:font-semibold"
            >
              Connect Wallet
            </button>
            <button
              onClick={onClickHandler}
              className="w-fit h-fit p-2 bg-sky-400 rounded-full border-none transition-all border-2 hover:scale-110 hover:bg-primary"
            >
              <FiUpload size={"1.4rem"} color={"#ffffff"} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigatin;
