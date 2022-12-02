import React from "react";
import icon_1 from "./../../assets/footer_logo_1.svg";
import icon_2 from "./../../assets/footer_logo_2.svg";

function Footer() {
  return (
    <footer className="w-full max-w-screen-xl mx-auto p-8 flex flex-row items-start justify-between">
      <div className="w-[30%] h-full flex flex-col gap-4 text-left">
        <img src={icon_1} alt="" className="w-16 h-16 " />
        <p className="font-normal text-small text-gray-500">
          FREE CONSULTATION
        </p>
        <p className="font-nomal text-base text-emerald-600">
          Schedule a free consultation with our Agent.
        </p>
        <button className="px-5 py-3 text-gray-500 shadow-md rounded-full bg-white flex flex-row items-center justify-center gap-8">
          Schedule Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
      <div className="w-[30%] h-full flex flex-col gap-4 text-left">
        <img src={icon_2} alt="" className="w-16 h-16 " />
        <p className="font-normal text-small text-gray-500">HELP DESK</p>
        <p className="font-nomal text-base text-emerald-600">
          Do you have questions or want more infomation? Call now.
        </p>
        <p className="text-emerald-700">+(844) 180-355-268</p>
        <p className="text-emerald-700">+(844) 180-355-268</p>
      </div>
      <div className="w-[30%] h-full flex flex-col gap-4">
        <h2 className="font-bold text-3xl text-gray-500">Newsletter</h2>
        <form action="" className="w-[100%] flex flex-col gap-4">
          <input
            type="text"
            className="w-full p-4 text-gray-500 bg-gray-200 rounded-full placeholder:text-gray-500"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className="w-full p-4 text-gray-500 bg-gray-200 rounded-full placeholder:text-gray-500"
            placeholder="Enter your name"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="w-fit px-12 py-4 text-white bg-teal-500 rounded-full tracking-widest"
          />
        </form>
      </div>
    </footer>
  );
}

export default Footer;
