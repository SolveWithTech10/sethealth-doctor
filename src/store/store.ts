import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice/authApi";
import { handleAuthVerification } from "./middlewares";
import { authSlice } from "./reducerSlice/authSlice";
import { doctorProfileApi } from "./apiSlice/doctorProfileApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [doctorProfileApi.reducerPath]: doctorProfileApi.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      handleAuthVerification,
      authApi.middleware,
      doctorProfileApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
