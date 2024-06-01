import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { getMyProductRequest } from "./slice/myProductSlice";
import { MyButtonsDisplay } from "./MyButtonsDisplay";

export const DisplayMyProduct = () => {
  const d = useDispatch();
  const products = useSelector((state) => state.myProduct1?.myData);

  useEffect(() => {
    d(getMyProductRequest());
  }, [d]);

  return (
    <>
      <MyButtonsDisplay />

      {products?.map((product, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Card key={index} sx={{ maxWidth: 345, m: 4 }}>
            <CardMedia
              component="img"
              alt="Product Image"
              height="345"
              width="345"
              image={product.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Title: {product.title}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Category: {product.category}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Price: {product.price}</Button>
              <Button size="small">Add To Cart</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};
