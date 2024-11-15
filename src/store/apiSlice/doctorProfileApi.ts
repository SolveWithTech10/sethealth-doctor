import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const doctorProfileApi = createApi({
  reducerPath: "doctorProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/doctor`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addDoctorProfile: builder.mutation({
      query: (data) => ({
        url: "/profile/new",
        credentials: "include",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddDoctorProfileMutation } = doctorProfileApi;
