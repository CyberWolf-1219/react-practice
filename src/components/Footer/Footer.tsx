import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="w-full px-[6rem] py-[7rem] font-bold text-3xl text-primary">
        <div className="w-full h-fit flex flex-row items-start justify-between gap-36">
          <span className="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 307 100"
              className="w-[60px] aspect-[3/1.5] fill-primary"
            >
              <path d="M0,86.8h41.9c19.6,0,31.3-8.3,31.3-24.5c0-10.2-6-16.2-15.1-19.2c7.2-3.4,12.1-9.4,12.1-19.2c0-12.5-7.9-21.5-27.2-21.5H0 V86.8z M47.2,28.3c0,5.7-3.8,8.7-11.7,8.7H23V19.6h12.5C43.8,19.6,47.2,22.6,47.2,28.3z M49.8,60.8c0,6-3.8,8.7-12.1,8.7H22.6V51.7 h15.1C46,52.1,49.8,54.7,49.8,60.8z M128.3,0h-18.9L73.6,100h18.5L128.3,0z M216.6,44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5 C203.4,86.8,216.6,68.3,216.6,44.5z M192.5,44.5c0,16.6-9.4,22.6-22.3,22.6h-12.1V21.9h12.1C183,21.9,192.5,27.9,192.5,44.5z"></path>
              <path d="M224.2,46.4c0,22.6,18.5,41.1,41.1,41.1c22.6,0,41.1-18.5,41.1-41.1S287.9,5.3,265.3,5.3C242.6,5.3,224.2,23.8,224.2,46.4z M232.1,46.4c0-18.9,14.7-34,33.2-34c18.5,0,33.2,15.1,33.2,34s-15.1,34-33.2,34C246.8,80,232.1,64.9,232.1,46.4z M246,66.8h12.8 v-14h7.5l7.5,14h14l-9.4-16.6c4.2-1.9,7.5-6.8,7.5-12.1c0-9.4-6-14-16.6-14h-23.8v42.6H246z M272.8,38.1c0,3.4-2.3,4.9-6.4,4.9h-7.9 V34h7.9C270.9,34.3,272.8,35.1,272.8,38.1z"></path>
            </svg>
          </span>
          <span className="flex-1">
            We collaborate with ambitious brands and people. Let's build.
            <br />
            <a href="" className="underline">
              biz@basicagency.com
            </a>
          </span>
        </div>
        <div className="w-full h-fit mt-24 flex flex-row items-start justify-between gap-36">
          <span className="flex-1">
            <div>
              <p className="relative w-full h-fit font-semibold text-lg before:relative before:top-1 before:pr-2 before:content-['●'] before:text-4xl">
                STAY IN THE KNOW
              </p>
            </div>
            <div className="w-full py-4 mt-8 border-b-2 flex flex-row items-center justify-between">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email Address"
                className="font-normal text-base bg-transparent"
              />
              <span className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 17"
                  className="w-full h-full fill-primary"
                >
                  <rect x="0.1" y="7.5" width="14" height="2"></rect>
                  <path d="M8.4,0l8.5,8.5l-1.4,1.4L7,1.4L8.4,0z"></path>
                  <path d="M7,15.6l8.5-8.5l1.4,1.4L8.4,17L7,15.6z"></path>
                </svg>
              </span>
            </div>
          </span>
          <span className="flex-1 font-normal text-base flex flex-row items-start justify-between">
            <span>
              <p className="relative font-semibold text-lg before:relative before:top-1 before:pr-2 before:content-['●'] before:text-4xl ">
                SOCIAL
              </p>
              <ul className="mt-4">
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
              </ul>
            </span>
            <span>
              <p className="relative font-semibold text-lg before:relative before:top-1 before:pr-2 before:content-['●'] before:text-4xl ">
                INITIATIVES
              </p>
              <ul className="mt-4">
                <li>
                  <a href="">Crafted </a>
                </li>
                <li>
                  <a href="">Applied </a>
                </li>
                <li>
                  <a href="">Brandbeats </a>
                </li>
                <li>
                  <a href="">Moves </a>
                </li>
                <li>
                  <a href="">B®/Good</a>
                </li>
              </ul>
            </span>
            <span>
              <p className="relative font-semibold text-lg before:relative before:top-1 before:pr-2 before:content-['●'] before:text-4xl ">
                OFFICES
              </p>
              <ul className="mt-4">
                <li>
                  <a href="">San Diego – CA </a>
                </li>
                <li>
                  <a href="">New York – NY </a>
                </li>
                <li>
                  <a href="">Bay Area – CA </a>
                </li>
                <li>
                  <a href="">St. Louis – MO</a>
                </li>
                <li>
                  <a href="">Amsterdam – NL </a>
                </li>
                <li>
                  <a href="">London – EN </a>
                </li>
                <li>
                  <a href="">Berlin – GE </a>
                </li>
                <li>
                  <a href="">Argentina – AR</a>
                </li>
              </ul>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full px-12 py-4 flex flex-row items-center justify-between font-light text-sm bg-neutral-900 text-neutral-600">
        <small>BASIC/DEPT®, INC 10 - 22©</small>
        <small>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</small>
        <small>
          <a href="">TERMS, PRIVACY POLICY</a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
