import createSagaMiddleware from "redux-saga";

import product from "../slice/product";
import rootSaga from "../saga/rootsaga";
import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../slice/buttonSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    product1: product,
    buttons :buttonSlice,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

 });

sagaMiddleware.run(rootSaga);

export default store;