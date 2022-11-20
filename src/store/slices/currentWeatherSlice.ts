import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from 'axios';

type Response = {
    status: number;
    message: string;
}

type CurrentWeatherState = {
    weather: Weather;
    isLoading: boolean;
    response: Response;
}

const initialState: CurrentWeatherState = {
    weather: {
        main: {
            temp: 0,
        }
    },
    isLoading: false,
    response: {
        status: 0,
        message: 's',
    }
};

export const currentWeatherSlise = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSucces(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(
            state,
            action: PayloadAction<AxiosResponse<Weather>>
        ) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        }
    },
});

export default currentWeatherSlise.reducer;