import React from "react";
import "./Styles/section_two_card.css";

function SectionTwoCard({
  icon,
  heading,
  desc,
}: {
  icon: string;
  heading: string;
  desc: string;
}) {
  return (
    <div className="section_two_card">
      <div className="card_behind"></div>
      <div className="card_front">
        <img src={icon} alt="" />
        <p>{heading}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SectionTwoCard;
