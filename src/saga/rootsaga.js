import { all } from "redux-saga/effects"
import { watcherProduct } from "./productSaga";
import { watcherButtons } from "./buttonsaga";

function* rootSaga()
{
    yield all([watcherProduct(),watcherButtons()]);
}

export default rootSaga;