import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
}

export default App;
