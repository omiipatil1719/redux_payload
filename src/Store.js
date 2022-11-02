import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Component/Reducers";


export const store=configureStore({
    reducer:rootReducer
})