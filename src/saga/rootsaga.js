import { all } from "redux-saga/effects"
import { watcherProduct } from "./productSaga";

function* rootSaga()
{
    yield all([watcherProduct()]);
}

export default rootSaga;