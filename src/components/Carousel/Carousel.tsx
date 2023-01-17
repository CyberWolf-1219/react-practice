import { useRef, useState } from "react";
import { ProjectCard } from "../index";
import "./carousel.css";

interface Props {
  items: { img: string; link: string }[];
}

const Carousel: React.FC<Props> = ({ items }) => {
  const [xpos, setXpos] = useState(0);

  const maxLengthPerSide = useRef((items.length * 220) / 2);

  function scroll_next() {
    setXpos((prevVal) => {
      let amountToSub = xpos <= -maxLengthPerSide.current ? 0 : 240;
      return prevVal - amountToSub;
    });
  }
  function scroll_prev() {
    setXpos((prevVal) => {
      let amountToAdd = xpos >= +maxLengthPerSide.current ? 0 : 240;
      return prevVal + amountToAdd;
    });
  }

  return (
    <div className="carousel_container">
      <div className="slider" style={{ transform: `translateX(${xpos}px)` }}>
        {items.map((item: { img: string; link: string }, index: number) => {
          return (
            <ProjectCard
              key={index}
              id={index}
              image={item.img}
              projectLink={item.link}
            />
          );
        })}
      </div>
      <div className="button_container">
        <button onClick={scroll_prev}>Previous</button>
        <button onClick={scroll_next}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
