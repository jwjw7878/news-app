import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "news",
  initialState: { bookmark: [] },
  reducers: {
    setBookmark: (state, action) => {
      const exist = state.bookmark.find((b) => b.url === action.payload.url);
      if (exist) {
        state.bookmark = state.bookmark.filter(
          (b) => b.url !== action.payload.url
        );
      } else {
        state.bookmark.push(action.payload);
      }
    },
    removeAllbookmark: (state) => {
      state.bookmark = [];
    },
  },
});

export const { setBookmark, removeAllbookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
