import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSearchSlice";


const combinedReducer = combineReducers({
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptReducer
})

const appStore =  configureStore({
    reducer: combinedReducer
})


export type RootState = ReturnType<typeof combinedReducer>;

export default appStore;