import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let archiveData;

export const fetchArchive = createAsyncThunk("archive/get", async () => {
  const response = await axios.get("http://localhost:3030/archive");
  return response.data;
});

export const archiveSlice = createSlice({
  name: "todo",
  initialState: {
    archiveData,
  },

  extraReducers: {
    [fetchArchive.pending]: (state) => {
      state.loading = true;
    },
    [fetchArchive.fulfilled]: (state, action) => {
      state.archiveData = action.payload;
      state.loading = false;
    },
    [fetchArchive.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// export const { newItem, deleteItem } = todoSlice.actions;

export default archiveSlice.reducer;
