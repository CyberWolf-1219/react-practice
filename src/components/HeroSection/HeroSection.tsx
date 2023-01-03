import React from "react";
import Container from "./../Container/Container";
import HeroImg from "../../assets/1.png";
import Logo from "../../assets/logo.svg";
import { BsArrowRight } from "react-icons/bs";
import CountDown from "../CountDown/CountDown";

function HeroSection() {
  return (
    <Container
      classes={`aspect-[16/9] h-auto flex flex-row items-center justify-center`}>
      <div
        className={` w-[50%] h-full pl-20 pt-8 flex flex-col items-start justify-center gap-8`}>
        <div>
          <h1 className={`w-[12ch] pb-12`}>
            Never Forget How <span className={`text-primary`}>Beautiful</span>{" "}
            You Are
          </h1>
          <div
            className={`w-fit h-fit flex flex-row items-center justify-center gap-20 border-t-2 border-black`}>
            <div className={`w-fit h-fit `}>
              <a
                href=""
                className={`flex flex-row items-center justify-start gap-4`}>
                <span>REGISTER</span>
                <span>
                  <BsArrowRight />
                </span>
              </a>
            </div>

            <div className={`w-fit h-fit`}>
              <a
                href=""
                className={`flex flex-row items-center justify-start gap-4`}>
                <span>PRICING</span>
                <span>
                  <BsArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative w-[50%] h-full`}>
        <CountDown
          classes={`absolute z-30 bottom-[15%] -left-[20%]`}
          hours={10}
          mins={18}
          secs={57}
        />
        <div className={`relative  w-full h-full overflow-hidden`}>
          <img
            src={HeroImg}
            alt=""
            className={`w-full h-full object-cover pointer-events-none`}
          />
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;
