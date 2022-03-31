import { all, takeLatest, call, put } from 'redux-saga/effects'

import {getMe} from './api'
import {Me} from './types'
import {requestMe, requestMeSuccess, requestMeFailed} from './features/me'

function* fetchMeSaga() {
    try {
        const me: Me = yield call(getMe);
        yield put(requestMeSuccess(me))
    } catch(e) {
        yield put(requestMeFailed("Failed"))

    }
}

function* rootSaga() {
    yield all([takeLatest(requestMe().type, fetchMeSaga)])
}

export default rootSaga
