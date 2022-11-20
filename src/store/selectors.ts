import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) => {
    return state.currentWeatherSliseReducer;
};