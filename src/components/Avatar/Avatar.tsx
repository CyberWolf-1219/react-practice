import React from "react";

function Avatar({ img, classes }: { img: string; classes: string }) {
  return (
    <div
      className={`aspect-square rounded-full border-2 border-white overflow-hidden bg-white ${classes}`}
    >
      <img src={img} alt="" className="w-full h-full object-contain " />
    </div>
  );
}

export default Avatar;
