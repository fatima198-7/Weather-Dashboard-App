import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    list: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      const exists = state.list.find((city) => city.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.list = state.list.filter((city) => city.id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
