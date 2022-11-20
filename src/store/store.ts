import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliseReducer from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
    currentWeatherSliseReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;