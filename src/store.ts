import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/counter'
import meReducer from './features/me'
import createSagaMiddleware from '@redux-saga/core'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        counter: counterReducer,
        me: meReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(saga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
