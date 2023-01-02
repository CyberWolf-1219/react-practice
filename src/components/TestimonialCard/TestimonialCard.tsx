import React from "react";
import classes from "./styles/index.module.css";

interface ITestimonialCardProps {
  image: string;
  name: string;
  corp: string;
  testimoni: string;
}

function TestimonialCard(props: ITestimonialCardProps) {
  return (
    <div className={`w-full h-auto aspect-[1] bg-white/40 rounded-lg`}>
      <div
        className={`${classes.card} relative w-full h-auto aspect-square p-4 flex flex-col items-center justify-center bg-shade-1 border-2 border-white`}>
        <div
          className={`${classes.avatar} w-[100px] h-[100px] rounded-full border-4 border-white overflow-hidden`}>
          <img
            className={`w-full h-auto object-contain`}
            src={props.image}
            alt=""
          />
        </div>
        <div
          className={`${classes.content_container} w-full h-fit overflow-hidden text-primary`}>
          <div className={`${classes.content} text-center`}>
            <h4 className={`my-4`}>{props.name}</h4>
            <h5 className={`my-4`}>{props.corp}</h5>
            <p>{props.testimoni}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
