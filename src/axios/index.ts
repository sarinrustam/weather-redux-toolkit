import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    config.url = config.url + '&units=metric' + '&lang=ru' + '&appid=' + process.env.REACT_APP_OPEN_WEATHER_TOKEN;
    return config;
});

export default api;