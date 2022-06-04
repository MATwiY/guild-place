import axios from "axios";
import { useQuery } from "react-query";

const getWeather = async () => {
    const response = await axios.get<Weather>(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Szczecin&aqi=no`
    );

    return response.data;
}

export const useGetWeather = () => useQuery('weather', getWeather);