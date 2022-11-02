import { combineReducers } from "@reduxjs/toolkit";
import { TodoSlices } from "./Slices/TodoSlices";


export const rootReducer=combineReducers({
    counter:TodoSlices.reducer
})