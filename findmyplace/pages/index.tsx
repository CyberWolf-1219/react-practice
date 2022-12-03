import Head from "next/head";
import React, { useRef, useState } from "react";
import ResultPanel from "../components/ResultPanel";
import SearchPanel from "../components/SearchPanel";
import HomePageSlider from "./../components/HomePageSlider";
import Navigation from "./../components/Navigation";

function index() {
  const [navCollasped, setNavCollasped] = useState<Boolean>(true);
  const searchPanel = useRef<HTMLDivElement | null>(null);

  function navBtnHandler() {
    setNavCollasped((prevState) => !prevState);
  }

  function searchPanelCollaspeBtnHandler(event: React.MouseEvent) {
    event.preventDefault();
    if (searchPanel.current) {
      searchPanel.current.classList.remove("translate-x-full");
    }
  }

  function searchTypeButtonHandler(event: React.MouseEvent) {
    event.preventDefault();
    if (searchPanel.current) {
      searchPanel.current.classList.add("translate-x-full");
    }
  }

  return (
    <>
      <Head>
        <title>Find My Place</title>
      </Head>

      <Navigation navState={navCollasped} />

      <i
        className="fixed lg:hidden z-50 top-4 right-4 hover:cursor-pointer"
        onClick={navBtnHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list w-[30px] h-[30px] fill-white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </i>

      <main className="relative max-w-screen-xl mx-auto lg:grid grid-cols-5 auto-rows-auto">
        <section className="relative z-30 lg:col-span-5 h-[90vh]">
          <div className="absolute z-10 max-w-screen-xl w-screen h-full transition-transform -translate-y-full text-center flex flex-col items-center justify-center bg-white">
            <h1 className="font-bold text-4xl text-black">
              Find the Exact Place Your Mind Have
            </h1>
            <h2 className="font-semibold text-lg text-black">
              We are here to help you for that
            </h2>
          </div>
          <HomePageSlider />
        </section>

        <section className="w-screen h-[50vh] flex flex-col items-center justify-center gap-8 bg-white lg:col-span-1 lg:w-full lg:gap-0 lg:col-start-1 lg:col-end-2">
          <button
            className={`w-36 lg:w-full lg:h-[50%] p-4 transition-colors text-white bg-emerald-600 rounded-md lg:rounded-none font-bold lg:text-xl  lg:hover:bg-emerald-300 lg:hover:text-white`}
            onClick={searchTypeButtonHandler}
          >
            Rent
          </button>

          <button
            className={`w-36 lg:w-full lg:h-[50%] p-4 transition-colors text-white bg-emerald-600 rounded-md lg:rounded-none font-bold lg:text-xl lg:hover:bg-emerald-300 lg:hover:text-white`}
            onClick={searchTypeButtonHandler}
          >
            Buy
          </button>
        </section>

        <section
          ref={searchPanel}
          className={`absolute top-0 -left-full h-screen w-screen z-20 flex flex-col items-center justify-start bg-white text-black transition-transform lg:relative lg:left-0 lg:col-start-2 lg:col-end-6 lg:w-full lg:h-auto lg:gap-0`}
        >
          <SearchPanel />
          <ResultPanel />
          <i
            onClick={searchPanelCollaspeBtnHandler}
            className="absolute lg:hidden bottom-4 right-4 flex items-center justify-center rounded-full bg-emerald-500 p-1 z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up-fill fill-white w-[40px] h-[40px] "
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </i>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default index;
