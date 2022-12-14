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

      <main className="relative w-full h-screen max-w-screen-lg mx-auto overflow-hidden md:grid grid-cols-12 grid-rows-6 gap-1 p-2 bg-white shadow-md shadow-slate-400 rounded-lg">
        <Navigation
          visible={navVisible}
          setVisibility={invertNavState}
          classList="md:static md:w-full md:h-full md:translate-x-0 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-7 md:w-fit md:h-fit md:mx-auto md:p-2 md:justify-start md:rounded-full md:shadow-md md:shadow-slate-400"
          linkClassList=""
        />

        <SearchPanel
          setNavVisibility={invertNavState}
          classList="md:static md:col-start-2 md:col-end-7 md:w-full md:p-2 md:shadow-md md:shadow-slate-400 md:rounded-md md:bg-white"
        />

        <Map
          addPicker={false}
          settings={[-77.032, 38.913, 15]}
          classList="absolute top-0 left-0 right-0 flex h-[70vh] w-screen overflow-hidden rounded-md md:static md:w-auto  md:h-full md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-7 md:p-2 md:shadow-md md:shadow-slate-400"
        />

        <SearchResultPanel classList="absolute bottom-0 left-0 right-0 w-full h-[30vh] p-1 flex flex-row items-center justify-start gap-1 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory bg-slate-200 md:static md:w-full md:h-full md:p-2 md:flex-col md:col-start-2 md:col-end-7 md:row-start-2 md:row-end-7 md:shadow-md md:shadow-slate-400 md:rounded-md md:overflow-y-auto md:overflow-x-hidden" />
      </main>

      <footer></footer>
    </>
  );
}

export default DashboardPage;
