import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
name:"movie",
initialState:{
    nowPlayingMov:[],
},
reducers:{
    addMovies(state,action){
        state.nowPlayingMov = action.payload;
    }
}



});
export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer;