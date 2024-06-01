import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMyFilterData } from "./slice/myProductSlice";

export const MyButtonsDisplay = () => {
  const categories = useSelector((state) => state.myProduct1?.catagories.concat("All"));

  const d = useDispatch();
  const filterData = (categories) => {
    d(getMyFilterData(categories));
  };

  // console.log(categories);
  
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: 'center', flexWrap:"wrap"}} >
      {categories?.map((category, index) => (
        <Button key={index} size="small" onClick={() => filterData(category)}>
          {category}
        </Button>
      ))}
    </div>
  );
};

