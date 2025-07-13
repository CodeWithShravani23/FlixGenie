import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMov: [],
        movieTrailer: null,
        popularMov: [],
        upcomingMov: [],
        topRatedMov: [],
    },
    reducers: {
        addMovies(state, action) {
            state.nowPlayingMov = action.payload;
        },
        addTrailer(state, action) {
            state.movieTrailer = action.payload;
        },
        addPopular(state, action) {
            state.popularMov = action.payload;
        },
        addUpcoming(state, action) {
            state.upcomingMov = action.payload;
        },
        addToprated(state, action) {
            state.topRatedMov = action.payload;
        }
    }



});
export const { addMovies, addTrailer, addPopular, addToprated, addUpcoming } = movieSlice.actions;
export default movieSlice.reducer;