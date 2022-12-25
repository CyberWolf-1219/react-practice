import React from "react";
import Avatar from "../Avatar/Avatar";
import nft from "./../../assets/Monkey.png";
import Gallery from "./../Gallery/Gallery";
import classes from "./styles/index.module.css";

function SectionFiveCard() {
  return (
    <div
      className={`${classes.card} w-[400px] h-fit p-2 bg-white/20 backdrop-blur-md rounded-md border-0 border-secondary transition-all hover:border-2 `}
    >
      <div className="w-full h-fit p-2 rounded-md transition-all">
        <p className="font-light">Created by </p>
        <div className="w-fit h-fit flex items-center justify-start gap-3">
          <Avatar img={nft} classes="w-[2rem]" /> <b>James Watson</b>
        </div>
      </div>
      <div className="w-full h-fit my-4 transition-all">
        <Gallery />
      </div>
      <div className="w-full h-fit p-2 rounded-md transition-all">
        <b className="font-bold text-xl"> Punk Art Collection</b>
        <p className="font-light">
          Created by
          <span className="font-bold text-secondary"> James Watson</span>
        </p>
      </div>
    </div>
  );
}

export default SectionFiveCard;
