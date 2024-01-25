import { configureStore } from "@reduxjs/toolkit";
import  filterData  from "../features/filterData";

export const store = configureStore({
    reducer:{
        filterData : filterData,
    },
})