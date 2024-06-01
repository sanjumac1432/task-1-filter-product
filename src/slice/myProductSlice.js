import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myData: [],
  allData: [],
  isLoading: false,
  catagories: [],
  error: null,
};

const myProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getMyProductRequest: (state) => {
      state.isLoading = true;
    },
    getMyProductSuccess: (state, action) => {
      state.isLoading = false;
      state.myData = action.payload?.products;
      state.allData = action.payload?.products;
      console.log(action);
      state.catagories = action?.payload?.products
        ?.map((p) => {
          return p.category;
        })
        .reduce((pre, next) => {
          if (!pre.includes(next)) {
            pre.push(next);
          }
          return pre;
        }, []);
    },
    getMyError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getMyFilterData: (state, action) => {
      let d = JSON.parse(JSON.stringify(state.allData));
      if (action.payload === "All") {
        state.myData = state.allData;
      } else {
        state.myData = d.filter((p) => p.category === action.payload);
      }
      console.log(state.myData);
    },
  },
});

export const {
  getMyProductRequest,
  getMyProductSuccess,
  getMyError,
  getMyFilterData,
} = myProductSlice.actions;

export default myProductSlice.reducer;
