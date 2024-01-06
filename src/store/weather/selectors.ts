import { RootState } from "../store";

export const selectCurrentWeatherData = (state: RootState) => {
    return state.currentWeatherSliseReducer;
};

export const selectCurrentWeather = (state: RootState) => state.currentWeatherSliseReducer.weather;