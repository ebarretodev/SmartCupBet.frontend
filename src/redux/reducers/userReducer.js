import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        address: '',
        value: '',
        posGrandPrize: '',
        points: '',
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
        setPosGrandPrize: (state,action) => {
            state.posGrandPrize = action.payload
        },
        setPoints: (state, action) =>{
            state.points = action.payload
        },
        setBlankData: (state) => {
            state.address = ''
            state.value = ""
            state.posGrandPrize = ""
            state.points = ""
        }
    }
})

export const {setAddress, setValue, setPosGrandPrize, setPoints, setBlankData} = slice.actions
export default slice.reducer
