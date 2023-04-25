import "./index.scss";

import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* {App({ a: 21, b: "34", c: false, d: { qwe: [] } })} */}
  </React.StrictMode>
);
