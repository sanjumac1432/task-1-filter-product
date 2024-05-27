import React, { useEffect } from 'react';
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { getMyProductRequest } from './slice/myProductSlice';
import { MyButtonsDisplay } from './MyButtonsDisplay';

export const DisplayMyProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.myProduct1?.myData?.products);

  useEffect(() => {
    dispatch(getMyProductRequest()); // Fetch products on component mount
  }, [dispatch]);

  return (
    <>
    <MyButtonsDisplay/>
      {
        products?.map((product, index) => (
          <Card key={index} sx={{ width: 500, m: 4, display: "flex", flexWrap: "wrap" }}>
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
        ))
     }
    </>
  );
};
