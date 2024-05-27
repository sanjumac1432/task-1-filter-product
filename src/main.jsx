import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Product } from "./product.jsx";
import { Provider } from "react-redux";

import store1 from "./nstore/nstore.js";



ReactDOM.createRoot(document.getElementById("root")).render( 
  // <React.StrictMode>
  <Provider store={store1}>
    <Product/>
  </Provider>

  // </React.StrictMode>,
);
