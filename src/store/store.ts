import { configureStore } from '@reduxjs/toolkit'
import loginUserSlice from './loginUserSlice'

export const store = configureStore({
    reducer: {
        loginUserSlice
    },
})