import React, { useLayoutEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

import classes from "./styles/index.module.css";

interface IServiceCardProps {
  title: string;
  price: string;
  image: string;
  link: string;
}

function ServiceCard(props: IServiceCardProps) {
  const card = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    card.current!.addEventListener('mouseenter', () => {
      card.current!.style.zIndex = `100`;
      const childElements = card.current!.querySelectorAll(".card_element");

      childElements.forEach((element, index) => {
        let ele = element as HTMLElement;
        ele.style.transform = `rotateX(10deg) translateZ(${(index + 1) * 20}px)`

      })
    })

    card.current!.addEventListener('mouseleave', () => {
      card.current!.style.zIndex = `1`;
      const childElements = card.current!.querySelectorAll(".card_element");

      childElements.forEach((element, index) => {
        let ele = element as HTMLElement;
        ele.style.transform = `rotateX(0deg) translateZ(0px)`
      })

    })

  }, [])

  return (
    <div ref={ card } className={ `${classes.card} service_card w-full h-auto aspect-[1/1.5] p-12 flex flex-col gap-6 bg-primary` }>
      <div className={ `w-full h-fit border-b-2 border-white` }>
        <h3 className={ `card_element text-white` }>{ props.title }</h3>
      </div>
      <div>
        <div className={ `card_element p-2 text-white bg-primary shadow-sm` }>
          Rp. { props.price }
        </div>
      </div>
      <div>
        <div className={ `card_element w-full h-full bg-primary/50` }>
          <div className={ `card_element w-full aspect-[3/2] h-auto -translate-y-[5%] translate-x-[5%] overflow-hidden` }>
            <img src={ props.image } alt="" className={ `w-full h-full object-contain` } />
          </div>
        </div>
      </div>
      <div>
        <a href={ props.link } className={ `card_element w-fit h-fit flex flex-row items-center justify-start gap-4 text-white` }>
          <span>Order Now</span>
          <span>
            <BsArrowRight color={ "#ffffff" } />
          </span>
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
