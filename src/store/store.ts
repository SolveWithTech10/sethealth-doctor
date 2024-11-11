
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice/authApi";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType< typeof store.getState>;