import { Button } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  category: [],
  filteredData: [],
  error: null,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    productSuccess: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.data = action.payload;
      state.category = action?.payload?.products
        ?.map((b) => {
          return b.category;
        })
        .reduce((pre, next) => {
          if (!pre.includes(next)) {
            pre.push(next);
          }
          return pre;
        }, []);
    },
    productFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    getFilterData: (state, action) => {
      // console.log(action);
    
      var d = JSON.parse(JSON.stringify(state.data));
      // console.log(d);
      state.data =  d.products.filter((d)=>{
        return d.category === action.payload
      })
     
      console.log(state.data);

    },

   
  },
});

export const { startLoading, productSuccess, productFailure, getFilterData } =
  product.actions;

export default product.reducer;
