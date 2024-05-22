import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { watcherProduct } from "./saga/productSaga";

export const Product = () => {
  const p = useSelector((state) => state.product1.data);
  console.log(p);
  const p1 = useDispatch();
  useEffect(() => {
    p1(watcherProduct()); 
    // Corrected the dispatch call
    
  }, []); // dispatch

  return (
    <>
      {p.map((value, index) => {
        return <li key={index}>{value.status}</li>;
      })}
      Hello
    </>
  );
};
