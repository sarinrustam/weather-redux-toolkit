import { createSlice } from "@reduxjs/toolkit";
import { CurrentCityState } from "./types";
import { fetchCurrentCity } from './asyncActions';

const initialCity = {
    city: null,
    county: null,
    latitude: null,
    longitude: null,
};

const initialState: CurrentCityState = {
    city: initialCity,
    isLoading: false,
    response: {
        status: null,
        message: null,
    }
};

export const currentCitySlice = createSlice({
    name: 'currentCity',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentCity.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCurrentCity.fulfilled, (state, action) => {
            state.isLoading = false;
            state.city = action.payload.data;

            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        });
        builder.addCase(fetchCurrentCity.rejected, (state, action) => {
            state.isLoading = false;
            // state.city = action.payload;
        })
    },
});

export default currentCitySlice.reducer;