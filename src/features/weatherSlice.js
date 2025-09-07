import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "a9e63173c7d614e7772bcd54911b23c0";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ city, unit }) => {
    const units = unit === "F" ? "imperial" : "metric";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    const data = await res.json();
    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
    unit: "C",
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        state.error = "City Not Found!";
      });
  },
});

export const { setUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
