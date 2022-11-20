import { AppDispatch } from "../store";
import { currentWeatherSlise } from '../slices/currentWeatherSlice';
import { getCurrentWeather } from '../../services/WeatherService';

export const fetchCurrentWeather = 
    (lattitude: number, longitude: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(currentWeatherSlise.actions.fetchCurrentWeather());
            const res = await getCurrentWeather(lattitude,longitude);
            if (res.status === 200) {
                dispatch(currentWeatherSlise.actions.fetchCurrentWeatherSucces(res));
            } else {
                dispatch(currentWeatherSlise.actions.fetchCurrentWeatherError(res));
            }
        } catch(error) {
            console.log(error);
        }
    };