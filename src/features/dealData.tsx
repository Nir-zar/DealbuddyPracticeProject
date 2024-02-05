import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderImagePaths : [] as object,
  dealAndStoreAllDetails : {},
  storeDescription : "",
  dealProductId : "",
};

const dealDataSlice = createSlice({
  name: "dealData",
  initialState,
  reducers: {
    sliderImage: (state, action) => {
      state.sliderImagePaths = action.payload;
    },

    dealAndStoreDetail : (state, action) => {
        state.dealAndStoreAllDetails = action.payload;
    },

    storeDescription : (state, action) => {
      state.storeDescription = action.payload;
    },

    dealProductId : (state, action) => {
      state.dealProductId = action.payload;
    }
   
  },
});

export const { sliderImage,dealAndStoreDetail,storeDescription, dealProductId  } =
  dealDataSlice.actions;

export default dealDataSlice.reducer;
