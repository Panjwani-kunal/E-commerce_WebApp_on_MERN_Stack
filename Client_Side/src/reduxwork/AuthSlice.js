import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : {},
    
};

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: {
        login:(state, action)=>{
            state.userData.email=action.payload.userEmail;
            state.userData.password=action.payload.userPassword;
        },
        register:(state, action)=>{
            state.userData.name=action.payload.userName;
            state.userData.email=action.payload.userEmail;
            state.userData.mobno=action.payload.userMobNo;
            state.userData.password=action.payload.userPassword;
        },
        logout:(state)=>{
            state.userData = null;
        },

    },
});

export const {login,logout,register}=authSlice.actions;
export const currUserData=(state)=> state.auth.userData;
export default authSlice.reducer;
