import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { getMyError, getMyProductRequest, getMyProductSuccess } from "../slice/myProductSlice";
import { getMyUserData } from "../services/myProductApi";

function* asyncMyProduct() {

  try {

    let response = yield call(getMyUserData)
    yield put(getMyProductSuccess(response))
    

  } catch (error) {
    yield put(getMyError(error))
  
  }
 
}

export function* watcherMyProduct() {
  yield takeLatest(getMyProductRequest().type, asyncMyProduct);
}