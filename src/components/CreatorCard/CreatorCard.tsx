import React from "react";
import Avatar from "../Avatar/Avatar";
import nft from "../../assets/Monkey.png";
import { FaEthereum } from "react-icons/fa";

function CreatorCard() {
  return (
    <div className="w-full h-fit p-3 flex gap-4 items-center justify-start border-2 border-white/10 bg-white/10 backdrop-blur-md rounded-md transition-all group hover:bg-white hover:border-primary hover:text-primary">
      <div className="w-fit h-fit rounded-full border-2 border-transparent transition-all group-hover:scale-125 group-hover:-translate-y-[65%] group-hover:border-primary group-hover:border-4">
        <Avatar img={nft} classes="w-[4rem]" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="font-semibold">Napolean Hill</p>
        <span className="flex items-center justify-start gap-2 ">
          <FaEthereum color="#55aaff" />
          <span>3.8 ETH</span>
        </span>
      </div>
      <div className="ml-auto">
        <a
          href=""
          className="px-3 py-2 rounded-full text-secondary border-2 border-transparent underline underline-offset-8 transition-all group-hover:text-primary group-hover:bg-secondary/30 group-hover:border-secondary/50 hover:text-primary hover:bg-secondary"
        >
          Follow
        </a>
      </div>
    </div>
  );
}

export default CreatorCard;
