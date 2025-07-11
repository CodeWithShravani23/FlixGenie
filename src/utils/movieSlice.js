import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
name:"movie",
initialState:{
    nowPlayingMov:[],
    movieTrailer:null,
},
reducers:{
    addMovies(state,action){
        state.nowPlayingMov = action.payload;
    },
    addTrailer(state,action){
        state.movieTrailer=action.payload;
    }
}



});
export const {addMovies,addTrailer} = movieSlice.actions;
export default movieSlice.reducer;