import React from "react";
import "./App.css";

import { Navigation, Footer } from "./components";
import { HomePage } from "./pages";
function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
