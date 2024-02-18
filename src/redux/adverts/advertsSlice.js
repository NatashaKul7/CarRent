import { createSlice } from "@reduxjs/toolkit";
import { requestAdverts } from "./operations";

const INITIAL_STATE = {
  adverts: [],
  // filter: [],
  isLoading: false,
  isError: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE,
  reducers: {
    // filterAdverts(state, action) {
    //   state.filter = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      .addCase(requestAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestAdverts.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = action.error;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { filterAdverts } = advertsSlice.actions;
