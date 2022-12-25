import React from "react";
import { FaEthereum } from "react-icons/fa";
import nft from "../../assets/Monkey.png";
import classes from "./Styles/index.module.css";
import Avatar from "../Avatar/Avatar";

function SectionThreeCard() {
  return (
    <div
      className={`w-[350px] aspect-[1/1.3] p-2 bg-white/20 flex flex-col gap-3 items-start justify-between backdrop-blur-sm border-2 transition-all duration-1000 group hover:-translate-y-[20%] hover:shadow-xl hover:shadow-secondary`}
    >
      <div className="w-full h-fit p-2 rounded-md flex items-center justify-between transition-all group-hover:bg-white/50">
        <div className="w-50% h-fit">
          <b>210 Digital Artwork</b>
          <div className="w-full h-fit flex items-center justify-start gap-2 font-semibold">
            <FaEthereum color="#55aaff" />
            3.2 ETH
          </div>
        </div>
        <div className="w-50% h-fit">
          <button className="w-fit h-fit px-3 py-2 bg-sky-500/80 text-white font-semibold rounded-full">
            Place a bid
          </button>
        </div>
      </div>
      <div className="w-full aspect-square transition-all group-hover:border-2">
        <img
          src={nft}
          alt=""
          className="w-full h-full object-contain outline-none border-none bg-white/30 transition-all duration-1000 group-hover:scale-110 group-hover:-translate-y-[5%] hover:bg-transparent"
        />
      </div>
      <div
        className={` w-full h-fit p-2 rounded-md flex items-center justify-between transition-all group-hover:bg-white/50`}
      >
        <div className="w-[50%]">
          <b>Golden Hour</b>
          <div className="flex items-center jusitfy-start gap-2">
            <Avatar img={nft} classes="w-[2rem]" />
            <span>John Doe</span>
          </div>
        </div>
        <div
          className={`${classes.bidders_container} w-[50%] h-fit flex items-center justify-start`}
        >
          <Avatar img={nft} classes="w-[2.5rem]" />
          <Avatar img={nft} classes="w-[2.5rem]" />
          <Avatar img={nft} classes="w-[2.5rem]" />
          <Avatar img={nft} classes="w-[2.5rem]" />
        </div>
      </div>
    </div>
  );
}

export default SectionThreeCard;
