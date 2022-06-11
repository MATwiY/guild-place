import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const getWeather = async (city: string) => {
    const response = await axios.get<Weather>(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`
    );

    return response.data;
};

export const useGetWeather = (cityName: string) =>
    useQuery(["weather", cityName], () => getWeather(cityName));
