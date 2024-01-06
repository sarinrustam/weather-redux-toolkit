import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherParams, Weather } from "./types";
import api from "../../axios";

interface WeatherData {
    data: Weather;
    status: number;
    statusText: string;
}

export const fetchCurrentWeather = createAsyncThunk<WeatherData, fetchWeatherParams>(
    'weather/fetchWeatherData',
    async (params) => {
        const { latitude, longitude } = params;
        const { data, status, statusText } = await api.get<Weather>(`/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ru`);

        return {
            data,
            status,
            statusText,
        };
    }
);