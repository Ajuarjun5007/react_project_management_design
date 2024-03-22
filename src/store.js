import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Slices/tasksSlices"
const store  = configureStore({
    reducer:{
        tasks:tasksReducer
    }
})
export {store};