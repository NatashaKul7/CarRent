import { createSlice } from "@reduxjs/toolkit";
import { requestAdverts } from "./operations";

const INITIAL_STATE = {
  adverts: [],
  filter: "",
  isLoading: false,
  isError: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adverts = action.payload;
    });
  },
});

export const advertsReducer = advertsSlice.reducer;
