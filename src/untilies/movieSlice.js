import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies: null,
        trailerVideo : null
    },
    reducers:{
        addPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies :(state,action)=>{
            state.PopularMovies = action.payload
        },
        addTrailerVideo :(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addPlayingMovies,addTrailerVideo,addPopularMovies} = movieSlice.actions
export default movieSlice.reducer