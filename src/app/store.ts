import { configureStore } from "@reduxjs/toolkit";
import  filterData  from "../features/filterData";
import storeData from "../features/storeData";

export const store = configureStore({
    reducer:{
        filterData : filterData,
        storeData : storeData,
    },
})