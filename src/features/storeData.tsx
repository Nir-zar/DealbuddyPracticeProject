import { createSlice } from "@reduxjs/toolkit";
import PhysicalStore from "../pages/PhysicalStore";

const initialState = {
  pageNumber: 1,
  searchBarValue: "",
  storeDiscountType: "",
  storeCategoryType: "",
  physicalStoreData : {},
};

const storeDataSlice = createSlice({
  name: "storeData",
  initialState,
  reducers: {
    storePageNumber: (state, action) => {
      state.pageNumber = action.payload.pageNumber;
    },

    storeSearchBarValue: (state, action) => {
      state.searchBarValue = action.payload.searchBarValue;
    },

    storeDiscountType: (state, action) => {
      state.storeDiscountType = action.payload;
    },

    storeCategoryType : (state, action)=>{
        state.storeCategoryType = action.payload;
    },
    PhysicalStoreType : (state, action)=>{
      state.physicalStoreData = action.payload;
    }
  },
});

export const { storePageNumber, storeSearchBarValue, storeDiscountType, storeCategoryType, PhysicalStoreType  } =
  storeDataSlice.actions;

export default storeDataSlice.reducer;
