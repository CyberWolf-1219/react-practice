import { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Footer from "./components/Footer/Footer";
import CountDown from "./components/CountDown/CountDown";

function App() {
  return (
    <>
      <main
        className={`w-ful h-full max-w-screen-xl mx-auto flex flex-col items-center justify-start gap-12 overflow-hidden`}>
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
