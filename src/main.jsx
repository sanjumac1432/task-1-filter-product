import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import storeMy from "./nstore/mystore.js";
import { DisplayMyProduct } from "./DisplayMyProduct.jsx";
import { Provider } from "react-redux";




ReactDOM.createRoot(document.getElementById("root")).render( 
  // <React.StrictMode>
  <Provider store={storeMy}>
    <DisplayMyProduct/>
  </Provider>

  // </React.StrictMode>,
);
