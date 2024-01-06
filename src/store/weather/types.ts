export type Weather = {
    base: string;
    clouds: {
        all: number;
    };
    cod: 200;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Array<{
        description: string;
        icon: string;
        id: number;
        main: string;
    }>;
    wind: {
        deg: number;
        speed: number;
    };
}

export type fetchWeatherParams = {
    latitude: number;
    longitude: number;
}

type Response = {
    status: number | null;
    message: string | null;
}

export type CurrentWeatherState = {
    weather: Partial<Weather>;
    isLoading: boolean;
    response: Response;
}
