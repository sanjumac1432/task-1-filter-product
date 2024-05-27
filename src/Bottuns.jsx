import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import { getFilterData } from "./slice/product";

export const ButtonsCom = () => {
  let ButtonDisplay = useSelector((state) => state.product1?.category);

 
  const dis = useDispatch();

  console.log(ButtonDisplay);

  

  const filterCategory = (category) => {
    console.log(category);
    dis(getFilterData(category));

  //  let ddd= ButtonDisplay?.filter((item) => {
  //     return item.category === category;
  //   });

  //   console.log(ddd)
  };

  return (
    <div>
      {ButtonDisplay?.map((value, index) => {
        return (
          <Button
            key={index}
            onClick={
              () => filterCategory(value)
            }
            size="small"
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
};
