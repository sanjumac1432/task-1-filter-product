import React from "react";
import ReactDOM from "react-dom/client";


import { Provider } from "react-redux";
import storeMy from "./nstore/mystore.js";
import { DisplayMyProduct } from "./DisplayMyProduct.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={storeMy}>
    <DisplayMyProduct/>
  </Provider>


  // </React.StrictMode>,
);
