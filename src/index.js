import "./assets/styles/vars.css";
import "./index.scss";

import React, { useState } from "react";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
