import { createSlice } from '@reduxjs/toolkit'

type MeState = {
    name: string
    message: string
    loading: boolean
}

const initialState: MeState = {
    name: '',
    message: '',
    loading: false,
}

const meSlice = createSlice({
    name: 'me',
    initialState,
    reducers: {
        requestMe: (state) => {
            state.loading = true
        },
        requestMeSuccess: (state, action) => {
            const { name } = action.payload
            state.name = name
            state.loading = false
        },
        requestMeFailed: (state, action) => {
            state.message = action.payload
            state.loading = false
        },
    },
})

export const { requestMe, requestMeFailed, requestMeSuccess } = meSlice.actions

export default meSlice.reducer
