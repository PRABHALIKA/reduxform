import { takeLatest, all, call,put } from 'redux-saga/effects';
import ServerCall from './serverCall'
function* register(data) {

    const res = yield call(ServerCall.fnPostRes,'http://localhost:2021/school/insert', data.payload)
    if (res.data.n == 1 && res.data.ok == 1) {
        data.reset();
        yield put({
            'type':'REG_SUCCESS'
        })
    } else {
        yield put({
            'type':'REG_FAIL'
        })
    }
}

function* reduxFormSaga() {
    yield takeLatest('REG', register)
}

function* rootSaga() {
    yield all([
        reduxFormSaga()
    ])
}

export default rootSaga;