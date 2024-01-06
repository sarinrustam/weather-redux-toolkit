import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/weather/types";

// export const getCurrentWeather = (lattitue: number, longitude: number): Promise<AxiosResponse<Weather>> => {
//     return api.get<Weather>(`/weather?lat=${lattitue}&lon=${longitude}`)
// }