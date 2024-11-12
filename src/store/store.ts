
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice/authApi";
import { handleAuthVerification } from "./middlewares";
import { authSlice } from "./reducerSlice/authSlice";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        [authSlice.name]: authSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(handleAuthVerification, authApi.middleware),
})

export type RootState = ReturnType< typeof store.getState>;