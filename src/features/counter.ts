import { createSlice } from '@reduxjs/toolkit'
import { defaultMaxListeners } from 'events'

type CounterState = {
    count: number
}

const initialState: CounterState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            state.count -= action.payload
        },
    },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer