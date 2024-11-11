
import { baseUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:`${baseUrl}/auth`, credentials:"include"}),
    endpoints:(builder)=>({
        signUpUser:builder.mutation({
            query:(data)=>({
                url:"/register",
                method:"POST",
                body:data
            })
        }),
        signInUser:builder.mutation({
            query:(data)=>({
                url:"/login",
                method:"POST",
                body:data
            })
        }),
    })
})

export const {useSignUpUserMutation, useSignInUserMutation} = authApi