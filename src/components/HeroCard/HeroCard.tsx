import React from "react";
import Avatar from "../Avatar/Avatar";
import { FaEthereum } from "react-icons/fa";
import nft from "../../assets/Monkey.png";
import classes from "./Styles/index.module.css";

function HeroCard() {
  return (
    <div
      className={`${classes.card} w-[300px] aspect-[1/1.3] p-2 bg-transparent flex flex-col gap-3 items-start justify-between backdrop-blur-sm border-2 rounded-2xl`}
    >
      <div className="card_header w-full p-2 rounded-md">
        <b>210 Digital Artwork</b>
        <div className="w-full h-fit flex items-center justify-start gap-2 font-semibold">
          <FaEthereum color="#55aaff" />
          3.2 ETH
        </div>
      </div>
      <div className="card_img w-full aspect-square">
        <img
          src={nft}
          alt=""
          className="w-full h-full object-contain outline-none border-none"
        />
      </div>
      <div className="card_details w-full p-2 rounded-md">
        <b>Golden Hour</b>
        <div className="flex items-center jusitfy-start gap-2">
          <Avatar img={nft} classes="w-[2rem]" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
