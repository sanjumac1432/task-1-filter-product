import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { startLoading } from "./slice/product";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ButtonsCom } from "./Bottuns";

export const Product = () => {
  const p = useSelector((state) => state.product1?.data?.products);

  const p1 = useDispatch();
  useEffect(() => {
    p1(startLoading());
  }, [p1]);

  return (
    <>
      <ButtonsCom />
      {p?.map((value, index) => {
        return (
     
            <Card
              className="flex"
              key={index}
              sx={{ width: 500, m: 4, display: "flex", flexWrap: "wrap" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="345"
                  width="345"
                  image={value.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Title: {value.title}
                  </Typography>

                  <Typography variant="h5" color="text.secondary">
                    Category :{value.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Price: {value.price}</Button>
                  <Button size="small">Add To Cart</Button>
                </CardActions>
              </Card>
            </Card>
        
        );
      })}
    </>
  );
};
