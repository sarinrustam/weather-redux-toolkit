type Response = {
    status: number | null;
    message: string | null;
}

export type CurrentCityState = {
    city: {
        latitude: number | null;
        longitude: number | null;
        city: string | null;
        county: string | null;
    };
    isLoading: boolean;
    response: Response;
}