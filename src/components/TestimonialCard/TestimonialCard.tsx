import React from "react";
import "./TestimonialCard.css";

interface Props {
  userImage: any;
  userName: string;
  userRole: string;
  userComment: string;
}

const TestimonialCard: React.FC<Props> = ({
  userImage,
  userName,
  userRole,
  userComment,
}) => {
  return (
    <span className="testimonial_card">
      <div className="top">
        <span className="user_image_container">
          <img src={userImage} alt="" />
        </span>
        <span className="user_detail_container">
          <b>{userName}</b>
          <small>{userRole}</small>
        </span>
      </div>
      <div className="bottom">
        <p>{userComment}</p>
      </div>
    </span>
  );
};

export default TestimonialCard;
