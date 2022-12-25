import React from "react";
import img from "../../assets/Monkey.png";

function Gallery() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
      <div className="w-full aspect-square border-2 border-white/50 rounded-md overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full aspect-square border-2 border-white/50 rounded-md overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full aspect-square border-2 border-white/50 rounded-md overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full aspect-square border-2 border-white/50 rounded-md overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default Gallery;
