import React from "react";
import "./Sponsorbar.css";
import Sponsors from "../../data/Sponsors";

const Sponsorbar: React.FC = () => {
  return (
    <>
      <div className="sponsorbar">
        {Sponsors.map((item: { img: string; link: string }, index) => {
          return (
            <a key={index} href={item.link}>
              <span>
                <img src={item.img} alt="" />
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Sponsorbar;
