import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
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
      state.isLoading = false;
      state.data = action.payload;
    },
    productFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, productSuccess, productFailure } = product.actions;

export default product.reducer;
