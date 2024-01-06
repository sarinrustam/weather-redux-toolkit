import { RootState } from "../store";

export const selectCurrentCity = (state: RootState) => {
    return state.currentCitySliceReducer.city;
};