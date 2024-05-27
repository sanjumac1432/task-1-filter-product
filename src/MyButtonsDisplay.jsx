import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMyFilterData } from "./slice/myProductSlice";

export const MyButtonsDisplay = () => {
  const categories = useSelector((state) => state.myProduct1?.catagories);
  const dispatch = useDispatch();
  const filterData = (category) => {
    dispatch(getMyFilterData(category));
  };

  console.log(categories);
  return (
    <div>
      {categories?.map((category, index) => (
        <Button key={index} size="small" onClick={() => filterData(category)}>
          {category}
        </Button>
      ))}
    </div>
  );
};
