import "./index.css";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { LandingPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={Router} /> */}
  </React.StrictMode>
);
