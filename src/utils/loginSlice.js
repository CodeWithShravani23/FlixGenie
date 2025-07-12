import { createSlice } from "@reduxjs/toolkit";
const loginSlice =createSlice({
    name:'login',
    initialState:{toggle:false,},
    reducers:{
        toggleLogin(state){
            state.toggle=(!state.toggle);
        }
    }
});
export const{toggleLogin}=loginSlice.actions;
export default loginSlice.reducer;