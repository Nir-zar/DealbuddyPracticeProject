import { configureStore } from "@reduxjs/toolkit";
import  filterData  from "../features/filterData";
import storeData from "../features/storeData";
import dealData from "../features/dealData";

export const store = configureStore({
    reducer:{
        filterData : filterData,
        storeData : storeData,
        dealData : dealData,
    },
})