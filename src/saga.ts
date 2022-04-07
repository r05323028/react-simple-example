import { all, takeLatest, call, put } from 'redux-saga/effects'

import { getMe } from './api'
import { requestMe, requestMeSuccess, requestMeFailed } from './features/me'
import { AxiosResponse } from 'axios'

function* fetchMeSaga() {
    try {
        const res: AxiosResponse<string, string> = yield call(getMe)
        yield put(requestMeSuccess(res.data))
        return res.status
    } catch (e) {
        yield put(requestMeFailed('Could not fetch name!'))
        return -1
    }
}

function* rootSaga() {
    yield all([takeLatest(requestMe().type, fetchMeSaga)])
}

export { fetchMeSaga }

export default rootSaga
