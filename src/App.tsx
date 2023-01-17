import { useLayoutEffect, useRef } from "react";
import Container from "./components/Container/Container";

import SectionOne from "./components/PageSections/SectionOne/SectionOne";
import SectionThree from "./components/PageSections/SectionThree/SectionThree";
import SectionTwo from "./components/PageSections/SectionTwo/SectionTwo";
import SectionFour from "./components/PageSections/SectionFour/SectionFour";
import SectionFive from "./components/PageSections/SectionFive/SectionFive";
import SectionSix from "./components/PageSections/SectionSix/SectionSix";
import SectionSeven from "./components/PageSections/SectionSeven/SectionSeven";
import Cursor from "./components/Cursor/Cursor";
import Navigation from "./components/Navigation/Navigation";
import LoadingScreen from "./components/LoadingModal/LoadingModal";

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="App">
        <Cursor />
        <header>
          <Container>
            <Navigation />
          </Container>
        </header>
        <main className={`w-full h-fit min-h-screen`}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
        </main>
      </div>
    </>
  );
}

export default App;
