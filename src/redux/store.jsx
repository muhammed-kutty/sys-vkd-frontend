import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/UserSlice'
import categoryReducer from './slices/CategorySlice'
import authReducer from './slices/AuthSlice'


export const store =  configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer,
        category:categoryReducer
    }
})