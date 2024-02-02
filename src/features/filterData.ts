import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shortBy: "date",
  pageNumber: 1,
  productType: "all",
  dealModes: [] as string[],
  discountTypes: [] as string[],
  currentCardItemValue: 0,
};

const filterDataSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    filterData: (state, action) => {
      state.shortBy = action.payload.shortBy;
      state.pageNumber = action.payload.pageNumber;
      console.log(action.payload);
    },

    filterDataByCategory: (state, action) => {
      state.productType = action.payload;
    },

    filterDataByDealModes: (state, action) => {
      //

      const currentValue: string = action.payload.currentValue;
      if (state.dealModes.includes(currentValue)) {
        const index = state.dealModes.indexOf(currentValue);
        state.dealModes.splice(index, 1);
      } else {
        state.dealModes.push(currentValue);
      }

      state.pageNumber = action.payload.pageNumber;
    },

    filterDataByDiscountTypes: (state, action) => {
      const currentDiscountTypeValue = action.payload.currentDiscountTypeValue;
      state.pageNumber = action.payload.pageNumber;

      if (state.discountTypes.includes(currentDiscountTypeValue)) {
        const index = state.discountTypes.indexOf(currentDiscountTypeValue);
        state.discountTypes.splice(index, 1);
      } else {
        state.discountTypes.push(currentDiscountTypeValue);
      }
      // state.discountTypes = action.payload.currentValue;
      // state.pageNumber = action.payload.pageNumber;
    },

    setPageNumber : (state, action) =>{
      state.pageNumber = action.payload;
    }
  },
});

export const {
  filterData,
  filterDataByCategory,
  filterDataByDealModes,
  filterDataByDiscountTypes,
  setPageNumber,
} = filterDataSlice.actions;

export default filterDataSlice.reducer;
