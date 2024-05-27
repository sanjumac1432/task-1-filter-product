import { call, put, takeEvery } from "redux-saga/effects";

import { productFailure, productSuccess, startLoading } from "../slice/product";
import { getUserData } from "../services/p";

function* asynproduct() {

  try {

    let response = yield call(getUserData)
    yield put(productSuccess(response))
    

  } catch (error) {
    yield put(productFailure(error))
  
  }
 
}

export function* watcherProduct() {
  yield takeEvery(startLoading().type, asynproduct);
}