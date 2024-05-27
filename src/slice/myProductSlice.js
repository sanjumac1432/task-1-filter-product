import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myData: [],
  myDataLoading: false,
  catagories: [],
  error: null,
};

const myProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getMyProductRequest: (state) => {
      state.myDataLoading = true;
    },
    getMyProductSuccess: (state, action) => {
      state.myDataLoading = false;
      state.myData = action.payload;
      console.log(action)
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
      state.myDataLoading = false;
      state.error = action.payload;
    },
    getMyFilterData: (state, action) => {
        console.log(action);
      
        var d = JSON.parse(JSON.stringify(state.myData));
        console.log(d);
        state.myData =  d?.products.filter((d)=>{
          return d.category === action.payload
        })
       
        console.log(state.myData);
  
      },
  },
});

export const { getMyProductRequest, getMyProductSuccess, getMyError,getMyFilterData } =
  myProductSlice.actions;

export default myProductSlice.reducer;
