import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

interface IFAQItemProps {
  q: string;
  a: string;
}

function FAQItem(props: IFAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onItemClick(event: React.MouseEvent) {
    event.preventDefault();
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={ `faq_item relative w-full h-fit text-lg overflow-hidden` }>
      <div onClick={ onItemClick } className={ `relative z-2 w-full h-fit p-2 flex flex-row items-center justify-between rounded-md cursor-pointer ${isOpen ? "bg-accent text-white" : "bg-accent/30 text-black"}` }>
        <span>
          <b>{ props.q }</b>
        </span>
        <span>
          { !isOpen ? (
            <BsPlusCircle size={ "1.5rem" } />
          ) : (
            <FiMinusCircle size={ "1.5rem" } />
          ) }
        </span>
      </div>
      <div className={ `relative z-1 w-full h-fit ${isOpen ? "h-[80px]" : "h-[0px]"} px-2 transition-all overflow-hidden origin-top` }>
        { props.a }
      </div>
    </div>
  );
}

export default FAQItem;
