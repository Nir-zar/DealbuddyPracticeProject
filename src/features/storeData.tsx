import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
  searchBarValue: "",
  storeDiscountType: "",
  storeCategoryType: "",
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
    }
  },
});

export const { storePageNumber, storeSearchBarValue, storeDiscountType, storeCategoryType  } =
  storeDataSlice.actions;

export default storeDataSlice.reducer;
