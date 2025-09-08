import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkSlice";

export const store = configureStore({
  reducer: {
    news: bookmarkReducer,
  },
});
