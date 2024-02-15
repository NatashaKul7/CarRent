import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatalog } from "../../services/api";

export const requestAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (_, thunkApi) => {
    try {
      const advertsData = await fetchCatalog();
      return advertsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
