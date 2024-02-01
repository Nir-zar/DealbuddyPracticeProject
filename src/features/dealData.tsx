import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderImagePaths : [] as object,
  dealAndStoreAllDetails : {},
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


   
  },
});

export const { sliderImage,dealAndStoreDetail  } =
  dealDataSlice.actions;

export default dealDataSlice.reducer;
