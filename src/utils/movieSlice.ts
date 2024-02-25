import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
    nowPlayingMovies : any;
    trailerVideo?: Object;
    likedMovieList: Array<String>;
}

const initialState: InitialState = {
    nowPlayingMovies: null,
    trailerVideo: undefined,
    likedMovieList: [],
};

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
        addNowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo(state, action){
            state.trailerVideo  = action.payload;
        },
        addToLikedMovies(state, action: { payload: string }){ 
            state.likedMovieList = state.likedMovieList.includes(action.payload) ? state.likedMovieList.filter(m => m!== action.payload) : [...state.likedMovieList, action.payload]
        }
    },
})

export const { addNowPlayingMovies, addTrailerVideo, addToLikedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;