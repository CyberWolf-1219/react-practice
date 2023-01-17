import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";

import { Card } from "./../index";

import { prev_icon, next_icon } from "../../assets";

import ResortsList from "../../data/Resorts";

const Slider: React.FC = () => {
  const [xpos, setXpos] = useState(0);
  let resortCount = useRef(0);
  let maxScrollWdith = useRef(0);

  useEffect(() => {
    resortCount.current = ResortsList.length;
    maxScrollWdith.current = 282 * (resortCount.current - 1);
    console.log(resortCount);
    console.log(maxScrollWdith);
  }, []);

  function prevButtonClick() {
    setXpos((prevVal) => {
      let scrollAmount = prevVal + 250;
      if (scrollAmount >= 0) {
        return 0;
      } else {
        return scrollAmount;
      }
    });
    console.log(xpos);
  }

  function nextButtonClick() {
    setXpos((prevVal) => {
      let scrollAmount = prevVal - 250;

      if (scrollAmount <= -maxScrollWdith.current) {
        return -maxScrollWdith.current;
      } else {
        return scrollAmount;
      }
    });
    console.log(xpos);
  }

  let slider_transform_style = {
    transform: `translate(${xpos}px)`,
  };

  return (
    <>
      <div className="carousel_container">
        <button className="slide_prev_btn" onClick={prevButtonClick}>
          <img src={prev_icon} alt="" />
        </button>

        <div className="slider_container">
          <div className="slider" style={slider_transform_style}>
            {ResortsList.map((item, index) => {
              return (
                <Card
                  card_image={item.img}
                  date={item.date}
                  location={item.location}
                  rating={item.rating}
                  stars={item.stars}
                  type={item.type}
                  key={index}
                />
              );
            })}
          </div>
        </div>

        <button className="slide_next_btn" onClick={nextButtonClick}>
          <img src={next_icon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Slider;
