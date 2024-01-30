import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const combinedReducer = combineReducers({
    user: userReducer,
})

const appStore =  configureStore({
    reducer: combineReducers
})


export type RootState = ReturnType<typeof combinedReducer>;

export default appStore;