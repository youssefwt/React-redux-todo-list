import { configureStore } from "@reduxjs/toolkit";
import archiveSlice from "./archiveSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    archive: archiveSlice,
  },
});

export default store;
