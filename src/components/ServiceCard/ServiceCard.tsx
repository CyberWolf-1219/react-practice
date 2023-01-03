import React from "react";
import { BsArrowRight } from "react-icons/bs";

import classes from "./styles/index.module.css";

interface IServiceCardProps {
  title: string;
  price: string;
  image: string;
  link: string;
}

function ServiceCard(props: IServiceCardProps) {
  return (
    <div
      className={`${classes.card} service_card w-full h-auto aspect-[1/1.5] p-12 flex flex-col gap-6 bg-primary`}>
      <div className={`w-full h-fit border-b-2 border-white`}>
        <h3 className={`text-white`}>{props.title}</h3>
      </div>
      <div>
        <span className={`p-2 text-white bg-primary shadow-sm`}>
          Rp. {props.price}
        </span>
      </div>
      <div>
        <div className={` bg-primary/40`}>
          <div
            className={`w-full aspect-[3/2] h-auto -translate-y-[5%] translate-x-[5%] overflow-hidden`}>
            <img
              src={props.image}
              alt=""
              className={`w-full h-full object-contain`}
            />
          </div>
        </div>
      </div>
      <div>
        <a
          href={props.link}
          className={`w-fit h-fit flex flex-row items-center justify-start gap-4 text-white`}>
          <span>Order Now</span>
          <span>
            <BsArrowRight color={"#ffffff"} />
          </span>
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
