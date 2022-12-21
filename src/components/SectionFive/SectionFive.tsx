import React from "react";
import "./Styles/section_five.css";
import SectoinFiveCard from "./../SectionFiveCard/SectionFiveCard";

function SectionFive() {
  return (
    <section>
      <div className="section_five_content_wrapper">
        <h2>
          <span>BINABOX</span> PARTNERS
        </h2>
        <div className="section_five_card_wrapper">
          <div className="row">
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
          </div>
          <div className="row">
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
          </div>
          <div className="row">
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
            <SectoinFiveCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
