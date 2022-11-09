import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'page',
    initialState: {
        //TODO correct form to false
        launched: false
    },
    reducers: {
        setLaunched: (state, action) => {
            state.launched = action.payload
        },
    }
})

export const {setLaunched} = slice.actions
export default slice.reducer
