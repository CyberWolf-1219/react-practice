import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
}

export default App;
