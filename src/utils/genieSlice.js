import { createSlice } from "@reduxjs/toolkit";
const genieSlice = createSlice({
    name: 'genie',
    initialState: { toggle: false,
                    movielist:null,
                    moviesByGenie:[]
     },
    reducers: {
        toggleGenie(state) {
            state.toggle = (!state.toggle);
        },
        addMoviesByGenie(state,action){
            const {movielist ,moviesByGenie}=action.payload;
            state.movielist=movielist;
            state.moviesByGenie=moviesByGenie;

        },
        removeMovies(state){
            state.movielist=null;
            state.moviesByGenie=[];
        }
    }
});
export const { toggleGenie,addMoviesByGenie,removeMovies } = genieSlice.actions;
export default genieSlice.reducer;