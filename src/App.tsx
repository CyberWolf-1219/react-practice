import React from "react";
import { ReactDOM } from "react";
import "./App.css";

import { Navbar, Footer } from "./components";
import { LandingPage } from "./pages";

import { menu_icon } from "./assets";

function App() {
  function menuBtnOnClick() {
    const nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("open");
  }

  return (
    <div className="App">
      <img
        src={menu_icon}
        alt=""
        className="menu_btn"
        onClick={menuBtnOnClick}
      />
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
