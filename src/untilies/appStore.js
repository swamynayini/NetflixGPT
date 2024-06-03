import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import  gtpReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer :{
        user:userReducer,
        movies: moviesReducer,
        gpt : gtpReducer,
        config: configReducer
    }
})
export default appStore;