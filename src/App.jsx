import "./App.css";
import { Navigation, Footer } from "./components"
import { LandingPage } from "./pages";
import { Route, BrowserRouter, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
