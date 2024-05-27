import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const buttonSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    getButtonsRequest: (state) => {
      state.isLoading = true;
    },
    getButtonsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getButtonsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const { getButtonsRequest, getButtonsSuccess, getButtonsFailure } = buttonSlice.actions;

export default buttonSlice.reducer;
