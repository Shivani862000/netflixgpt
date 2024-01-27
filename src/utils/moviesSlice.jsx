import { createSlice } from "@reduxjs/toolkit";


const moiveSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
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
        }

    }
});
export const {addNowPlayingMovies ,addPopularMovies, addTrailerVideo} = moiveSlice.actions
export default moiveSlice.reducer