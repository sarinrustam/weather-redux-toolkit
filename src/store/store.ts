import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliseReducer from './weather/currentWeatherSlice';
import currentCitySliceReducer from "./city/currentCitySlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
    currentWeatherSliseReducer,
    currentCitySliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
// export type AppDispatch = typeof store.dispatch;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();