import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios";

export const fetchCurrentCity = createAsyncThunk<any, any>(
    'city/fetchCurrentCity',
    async (params) => {
        const { latitude, longitude } = params;

        const { data, status, statusText } = await api.get(`geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1`);

        const cityData = data[0];

        return {
            data: {
                city: cityData.name,
                country: cityData.country,
                latitude: cityData.lat,
                longitude: cityData.lon,
            },
            status,
            statusText,
        };
    },
);