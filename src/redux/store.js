import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './reducers/pageReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
    }
})


