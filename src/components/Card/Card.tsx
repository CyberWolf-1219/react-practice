import React from "react";
import "./Card.css";

import { calendar_icon } from "./../../assets";

interface Props {
  card_image: any;
  location: string;
  type: string;
  rating: number;
  stars: string;
  date: string;
}

const Card: React.FC<Props> = ({
  card_image,
  location,
  type,
  rating,
  stars,
  date,
}) => {
  return (
    <>
      <div className="card">
        <img src={card_image} alt="" />
        <div className="detail_container">
          <div>
            <h5>{location}</h5>
            <h3>{type}</h3>
          </div>
          <div>
            <span className="rating">{rating}</span>
            <span className="rating_stars">{stars}</span>
          </div>
          <div>
            <span>
              <img src={calendar_icon} alt="" />
              <p>{date}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
