import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatalog } from "../../services/api";

export const requestAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (request, thunkApi) => {
    try {
      const advertsData = await fetchCatalog(request);
      return advertsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
