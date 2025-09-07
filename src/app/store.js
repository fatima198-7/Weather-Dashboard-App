import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice";
import favouriteReducer from "../features/favouriteSlice";
import historyReducer from "../features/HistorySlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favourite: favouriteReducer,
    history: historyReducer,
  },
});
