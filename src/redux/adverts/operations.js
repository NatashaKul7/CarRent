import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatalog } from "../../services/api";

export const requestAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (page, thunkApi) => {
    try {
      const advertsData = await fetchCatalog(page);
      return advertsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
