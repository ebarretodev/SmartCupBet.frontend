import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'page',
    initialState: {
        launched: false
    },
    reducers: {
        setLaunched: (state, action) => {
            state.address = action.payload
        },
    }
})

export const {setLaunched} = slice.actions
export default slice.reducer
