import React, { useLayoutEffect, useRef } from "react";
import classes from "./styles.module.css"


import Container from "./../Container/Container";
import HeroImage from "../../assets/2.png";

function SectionThree() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const elementWrapper = useRef<HTMLDivElement | null>(null);


  useLayoutEffect(() => {

    const width = rootElement.current!.getBoundingClientRect().width
    const height = rootElement.current!.getBoundingClientRect().height

    rootElement.current!.addEventListener('mouseenter', () => {
      elementWrapper.current!.style.transition = `none`
    })

    rootElement.current!.addEventListener('mouseleave', () => {
      elementWrapper.current!.style.transition = `all 1s ease`;
      elementWrapper.current!.style.transform = `rotateX(0deg) rotateY(0deg)`;

    })

    rootElement.current!.addEventListener('mousemove', (event: MouseEvent) => {
      let xRotation = ((event.x / width) - 0.5) * 5;
      let yRotation = ((event.y / height) - 0.5) * 5;

      elementWrapper.current!.style.transform = `rotateX(${yRotation}deg) rotateY(${xRotation}deg)`

    })

  }, [])

  return (
    <Container classes={ `aspect-[1/0.5] h-auto ` }>
      <div ref={ rootElement } className={ `${classes.wrapper}` }>
        <div ref={ elementWrapper } className={ `${classes.inner_wrapper}` }>
          <div className={ `` }></div>
          <div className={ `` }>
            <span className={ `w-fit h-fit p-3 bg-primary text-white` }>
              EXCLUSIVE PRODUCT
            </span>
            <h2 className={ `w-[10ch]` }>Moisturize Sugar Scrub</h2>
            <p className={ `w-[50ch]` }>
              Sugar scrubs brighten tired, dull-looking skin to promote healthy,
              smooth, and flawless skin. Sugar scrubs also fight skin aging in a
              natural way.
            </p>
            <p className={ `w-[50ch]` }>
              <span>Ingredients: </span>
              brown sugar, coconut, jojoba, olive, almond, or grapeseed.
            </p>
            <button className={ `w-fit h-fit p-3 border-2 border-primary` }>
              LEARN MORE
            </button>
          </div>
          <div className={ `` }>
            <img src={ HeroImage } alt="" className={ `h-full w-auto object-contain` }
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionThree;
