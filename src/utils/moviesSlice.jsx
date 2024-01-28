import { createSlice } from "@reduxjs/toolkit";


const moiveSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        movieTeaser:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload
        },
        addPopularMovies:(state ,action)=>{
            state.popularMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        },
        addMovieTeaser:(state,action)=>{
            state.movieTeaser=action.payload
        }

    }
});
export const {addNowPlayingMovies , addMovieTeaser,addPopularMovies, addTrailerVideo} = moiveSlice.actions
export default moiveSlice.reducer