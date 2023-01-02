import React from "react";

import { GrRadialSelected } from "react-icons/gr";
import SmallButton from "../SmallButton/SmallButton";

interface IPriceCardProps {
  title: string;
  price: string;
  packageItems: string[];
}

function PriceCard(props: IPriceCardProps) {
  return (
    <div
      className={`w-full h-fit p-4 flex flex-col items-center justify-start gap-4 bg-shade-1 backdrop-blur-md rounded-lg text-center text-primary shadow-md shadow-slate-800/30`}>
      <h3 className={`my-0 text-gray-500`}>{props.title}</h3>
      <h2 className={`my-0 text-gray-500`}>{props.price}</h2>
      <div
        className={`w-full h-fit p-4 flex flex-col items-center justify-start gap-4 rounded-lg bg-shade-2/50`}>
        {props.packageItems.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full h-fit flex flex-row items-center justify-start gap-4`}>
              <span>
                <GrRadialSelected color={"#ffffff"} />
              </span>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <div>
        <SmallButton action={() => {}} text={`Get Started`} />
      </div>
    </div>
  );
}

export default PriceCard;
