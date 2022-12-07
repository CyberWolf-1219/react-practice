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

      <main className="relative w-screen h-screen">
        <Navigation visible={navVisible} setVisibility={invertNavState} />

        <SearchPanel setNavVisibility={invertNavState} />

        <Map
          settings={[-77.032, 38.913, 15]}
          classList="absolute top-0 left-0 right-0 block h-[70vh] w-screen overflow-hidden"
        />

        <SearchResultPanel classList="absolute bottom-0 left-0 right-0 w-screen h-[30vh] p-1 flex flex-row items-center justify-start gap-1 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory bg-slate-200" />
      </main>

      <footer></footer>
    </>
  );
}

export default DashboardPage;
