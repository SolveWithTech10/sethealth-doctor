import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorProfileApi = createApi({
  reducerPath: "doctorProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    appDoctorProfile: builder.mutation({
      query: (data) => ({
        url: "/register",
        credentials:"include",
        method: "POST",
        body: data,
      }),
    }),
   
  }),
});

export const { useAppDoctorProfileMutation } = doctorProfileApi;
