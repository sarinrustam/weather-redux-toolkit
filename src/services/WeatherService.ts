import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";

export const getCurrentWeather = (lattitue: number, longitude: number): Promise<AxiosResponse<Weather>> => {
    // return api.get<Weather>(
    //     `/onecall?lat=${lattitue}&lon=${longitude}&exclude=part`, {
    //         params: {
    //             lat: lattitue,
    //             lon: longitude,
    //             exclude: 'part',
    //         }
    //     }
    // )
    return api.get<Weather>(`/weather?lat=${lattitue}&lon=${longitude}`)
}