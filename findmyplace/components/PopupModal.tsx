import React from "react";
import ReactDOM from "react-dom";
import { IPopupModal } from "../interfaces/all";

function Popup({ title, msg }: IPopupModal) {
  return (
    <div className="relative z-50 w-screen h-screen flex flex-col items-center justify-center backdrop-blur-sm">
      <div className="w-fit h-fit mx-auto p-4 flex flex-col gap-4 items-center justify-start bg-white shadow-md shadow-slate-400 rounded-md">
        <h2 className="w-full text-center font-bold text-2xl">{title}</h2>
        <p className="w-full text-center font-base text-base">{msg}</p>
      </div>
    </div>
  );
}

function PopupModal({ title, msg }: IPopupModal) {
  return (
    <>
      {ReactDOM.createPortal(
        <Popup title={title} msg={msg} />,
        document.getElementById("portal")!
      )}
    </>
  );
}

export default PopupModal;
