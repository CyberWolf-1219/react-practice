import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import classes from "./styles/index.module.css";

interface IFeatureCardProps {
  image: string;
  heading: string;
  text: string;
  link: string;
}

function FeatureCard(props: IFeatureCardProps) {
  return (
    <div
      className={`${classes.card} w-full h-auto aspect-[1/1.2] p-4 flex flex-col items-center justify-center gap-4 bg-shade-1 backdrop-blur-sm rounded-lg border-[1px] border-white/50 text-center`}>
      <div className={`${classes.image} w-[80px] h-[80px] aspect-square`}>
        <img
          src={props.image}
          alt=""
          className={`${classes.icon} w-full h-full object-contain`}
        />
      </div>
      <h4 className={`${classes.heading} text-primary`}>{props.heading}</h4>
      <p className={`${classes.text} text-primary`}>{props.text}</p>
      <LinkButton title={`Read More`} link={props.link} />
    </div>
  );
}

export default FeatureCard;
