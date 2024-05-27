import { call, put, takeEvery } from "redux-saga/effects"
import { getButtonsRequest, getButtonsSuccess } from "../slice/buttonSlice"
import { getUserData } from "../services/p"

function* asyncButton()
{

    try {
        let buttonsres = yield call(getUserData)
        yield put(getButtonsSuccess(buttonsres))
    } catch (error) {
        
        yield put(getButtonsFailure(error))
    }

}

export function* watcherButtons ()
{
    yield takeEvery(getButtonsRequest().type, asyncButton);
}