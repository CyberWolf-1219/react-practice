import React from "react";
import I1 from "./../../assets/Mask Group.png";
import I2 from "./../../assets/Mask Group-1.png";
import I3 from "./../../assets/Mask Group-2.png";
import I4 from "./../../assets/Mask Group-3.png";
import I5 from "./../../assets/Mask Group-4.png";
import I6 from "./../../assets/Mask Group-5.png";
import I7 from "./../../assets/Mask Group-6.png";

function Section_02() {
  return (
    <section className="mx-auto max-w-screen-xl w-full py-4 px-12 flex flex-col items-center justify-center gap-8 mt-32">
      <div>
        <h2 className="font-bold text-4xl text-gray-500 text-center">
          Select Your Location
        </h2>
        <small className="font-normal text-sm text-gray-400 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
          harum!
        </small>
      </div>

      <div className="w-full grid md:grid-cols-4 md:grid-rows-2 gap-4 ">
        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  relative">
          <div className="w-full h-fit">
            <img className="w-full object-cover" src={I1} alt="" />
          </div>
          <div className="w-full h-fit">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-4 bottom-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>

        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  md:row-span-3  relative">
          <div className="w-full">
            <img className="h-[455px] w-full object-cover" src={I7} alt="" />
          </div>
          <div className="w-full">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-0 bottom-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>

        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  relative">
          <div className="w-full h-fit">
            <img className="w-full object-cover" src={I3} alt="" />
          </div>
          <div className="w-full">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-4 bottom-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>

        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  relative">
          <div className="w-full h-fit">
            <img className="w-full object-cover" src={I4} alt="" />
          </div>
          <div className="w-full">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-4 bottom-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>

        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  relative">
          <div className="w-full h-fit">
            <img className="w-full object-cover" src={I5} alt="" />
          </div>
          <div className="w-full">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-4 bottom-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>

        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  relative">
          <div className="w-full h-fit">
            <img className="w-full object-cover" src={I6} alt="" />
          </div>
          <div className="w-full">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-4 bottom-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>

        <div className="w-full h-full shadow-lg p-4 rounded-md overflow-hidden  relative">
          <div className="w-full h-fit">
            <img className="w-full object-cover" src={I2} alt="" />
          </div>
          <div className="w-full">
            <span className="block w-full text-md font-medium text-gray-500">
              Location Name
            </span>
            <span className="w-full text-sm text-gray-500">5 Listings</span>
          </div>
          <button className="w-6 h-6 absolute right-4 bottom-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section_02;
