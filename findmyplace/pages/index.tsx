import React, { useState } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import SearchPanel from "../components/SearchPanel";
import Map from "../components/Map";
import SearchResultPanel from "../components/SearchResultPanel";

function DashboardPage() {
  const [navVisible, setNavVisible] = useState<Boolean>(false);

  function invertNavState() {
    setNavVisible((prevState) => !prevState);
  }

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      <main className="relative w-full h-screen mx-auto overflow-hidden lg:grid grid-cols-12 grid-rows-6 gap-4 p-2 bg-white shadow-md shadow-slate-400 rounded-lg">
        <Navigation
          visible={navVisible}
          setVisibility={invertNavState}
          classList="absolute top-[50%] -translate-y-[50%] w-[80vw] h-[80vh] flex flex-col items-center justify-center gap-8 z-10 bg-white border-[2px] rounded-md shadow-md shadow-slate-400 transition-transform ease-in-out lg:gap-2 lg:static lg:-translate-y-0 lg:w-full lg:h-full lg:translate-x-0 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-7 lg:w-fit lg:h-fit lg:mx-auto lg:p-2 lg:justify-start lg:rounded-full "
          linkClassList=""
        />

        <SearchPanel
          setNavVisibility={invertNavState}
          classList="lg:static lg:col-start-2 lg:col-end-7 lg:w-full lg:p-2 lg:shadow-md lg:shadow-slate-400 lg:rounded-md lg:bg-white"
        />

        <Map
          addPicker={false}
          settings={[-77.032, 38.913, 15]}
          classList="absolute top-0 left-0 right-0 flex h-[70vh] w-screen p-2 overflow-hidden rounded-md 
          lg:static lg:w-auto  lg:h-full lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-7 lg:p-2 lg:shadow-md lg:shadow-slate-400"
        />

        <SearchResultPanel
          classList="absolute bottom-0 left-0 right-0 w-full h-[30vh] p-1 flex flex-row items-center justify-start gap-1 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory bg-white shadow-md shadow-slate-400 rounded-md border-[2px]
         lg:static lg:w-full lg:h-full lg:p-2 lg:flex-col lg:col-start-2 lg:col-end-7 lg:row-start-2 lg:row-end-7 lg:overflow-y-auto lg:overflow-x-hidden"
        />
      </main>

      <footer></footer>
    </>
  );
}

export default DashboardPage;
