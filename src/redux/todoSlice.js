import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let todos;

export const fetchItems = createAsyncThunk("todos/get", async () => {
  const response = await axios.get("http://localhost:3030/items");
  return response.data;
});

export const addNewItem = createAsyncThunk("todos/add", async (item) => {
  const response = await axios.post("http://localhost:3030/items", item);
  return response.data;
});

export const removeItem = createAsyncThunk("todos/delete", async (id) => {
  const response = await axios.delete(`http://localhost:3030/items/${id}`);
  return response.data;
});

export const updateItem = createAsyncThunk(
  "todos/archive",
  async ({ id, data }) => {
    const response = await axios.patch(
      `http://localhost:3030/items/${id}`,
      data
    );
    console.log(id);
    console.log(data);
    return response.data;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos,
  },
  reducers: {
    // newItem: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    // deleteItem: (state, action) => {},
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.loading = true;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    },
    [fetchItems.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [addNewItem.pending]: (state) => {
      state.loading = true;
    },
    [addNewItem.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
      console.log(action.payload);
      state.loading = false;
    },
    [addNewItem.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [removeItem.pending]: (state) => {
      state.loading = true;
    },
    [removeItem.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
    [removeItem.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [updateItem.pending]: (state) => {
      state.loading = true;
    },
    [updateItem.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [updateItem.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// export const { newItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
