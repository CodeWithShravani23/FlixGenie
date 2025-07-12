import { createSlice } from "@reduxjs/toolkit";
const genieSlice =createSlice({
    name:'genie',
    initialState:{toggle:false,},
    reducers:{
        toggleGenie(state){
            state.toggle=(!state.toggle);
        }
    }
});
export const{toggleGenie}=genieSlice.actions;
export default genieSlice.reducer;