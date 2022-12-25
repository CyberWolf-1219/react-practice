import React from "react";
import ReactDOM from "react-dom";

function Popup(msg: { heading: string; msg: string }) {
  return (
    <div className="absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full bg-primary/90">
      <div className="absolute z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50%] h-[50%] p-8 flex flex-col items-center justify-start bg-white text-primary text-center rounded-lg">
        <h1>{msg.heading}</h1>
        <p>{msg.msg}</p>
      </div>
    </div>
  );
}

function PopupModal(msg: { heading: string; msg: string }) {
  return ReactDOM.createPortal(
    <Popup heading={msg.heading} msg={msg.msg} />,
    document.getElementById("modal_root") as Element
  );
}

export default PopupModal;
