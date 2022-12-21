import React from "react";
import "./Styles/section_three_card.css";

function SectionThreeCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="section_three_card">
      <div className="animater">
        <div className="image_wrapper">
          <img src={image} alt="" />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SectionThreeCard;
