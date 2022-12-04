import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import SearchPanel from "../components/SearchPanel";
import Map from "../components/Map";
import SearchResult from "../components/SearchResult";
import SearchResultPanel from "../components/SearchResultPanel";

function DashboardPage() {
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      <main className="relative w-screen h-screen">
        {/* <Navigation /> */}
        <SearchPanel />
        <Map
          settings={[0, 0, 0]}
          classList="absolute top-0 left-0 right-0 block h-[70vh] w-full overflow-hidden"
        />
        <SearchResultPanel classList="absolute bottom-0 left-0 right-0 w-screen h-[30vh] flex flex-row overflow-y-hidden overflow-x-scroll snap-x snap-mandatory" />
      </main>

      <footer></footer>
    </>
  );
}

export default DashboardPage;
