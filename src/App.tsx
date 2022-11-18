import React from "react";
import "./css/App.css";
import { Navbar, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
