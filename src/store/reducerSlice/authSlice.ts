import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"authSlice",
    initialState:{isAuthenticated:true},
    reducers:{
        handleIsAuthendicated:(state, action)=>{
            state.isAuthenticated = action.payload;
        }
    }
})

export const {handleIsAuthendicated} = authSlice.actions;