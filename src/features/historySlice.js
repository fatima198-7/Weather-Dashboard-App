import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    list: [], 
  },
  reducers: {
    addHistory: (state, action) => {
      state.list.unshift(action.payload); // will add new history on top
    },
    clearHistory: (state) => {
      state.list = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;