import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: {
    mhistory: [],
  },
  reducers: {
    addHistory: (state, action) => {
      state.mhistory = [action.payload, ...state.mhistory.slice(0, 9)];
    },
    clearHistory: (state) => {
      state.mhistory = [];
    },
  },
});

export const { addHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;
