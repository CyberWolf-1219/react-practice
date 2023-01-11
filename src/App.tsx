import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Footer from "./components/Footer/Footer";
import LoadScreen from "./components/LoadScreen/LoadScreen"

function App() {


  return (
    <>
      <LoadScreen />
      <main
        className={ `w-ful h-full mx-auto flex flex-col items-center justify-start overflow-hidden` }>
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </main>
      ;
    </>
  );
}

export default App;
