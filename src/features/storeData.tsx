import { createSlice } from "@reduxjs/toolkit";

const initialState = {

pageNumber : 1,
searchBarValue : "",

};

const storeDataSlice = createSlice({

    name: "storeData",
    initialState,
    reducers : {

        storePageNumber:(state, action)=>{

            state.pageNumber =  action.payload.pageNumber;
        },

        storeSearchBarValue : (state, action)=>{
            state.searchBarValue = action.payload.searchBarValue;
        }

    }
});

export const {
  storePageNumber,storeSearchBarValue
  } = storeDataSlice.actions;

  export default storeDataSlice.reducer;