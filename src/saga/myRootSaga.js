import { all } from "redux-saga/effects"
import { watcherMyProduct } from "./myProductSaga";


function* MyRootSaga()
{
    yield all([watcherMyProduct()]);
}

export default MyRootSaga;