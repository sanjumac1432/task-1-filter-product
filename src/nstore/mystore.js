import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootsaga";
import { configureStore } from "@reduxjs/toolkit";
import myProductSlice from "../slice/myProductSlice";
import MyRootSaga from "../saga/myRootSaga";

const sagaMiddleware = createSagaMiddleware();

const storeMy = configureStore({
  reducer: {
    myProduct1: myProductSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),

 });

sagaMiddleware.run(MyRootSaga);

export default storeMy;