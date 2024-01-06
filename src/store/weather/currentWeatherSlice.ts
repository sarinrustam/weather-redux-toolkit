import { createSlice } from "@reduxjs/toolkit";
import { CurrentWeatherState } from "./types";
import { fetchCurrentWeather } from "./asyncActions";

const initialWeather = {
    main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
    },
};

const initialState: CurrentWeatherState = {
    weather: initialWeather,
    isLoading: false,
    response: {
        status: null,
        message: null,
    }
};

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.weather = action.payload.data;

            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            };
        });
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.weather = initialWeather;
            // state.response = {
            //     status: action.payload?.status,
            //     message: action.payload?.statusText,
            // };
        });
    }
});

export default currentWeatherSlice.reducer;