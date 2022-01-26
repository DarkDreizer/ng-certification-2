import {
  Weather,
  WeatherClouds,
  WeatherCoordinates,
  WeatherMain,
  WeatherRain,
  WeatherSnow,
  WeatherWind,
} from './weather.model';

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
  city: ForecastCity;
}

export interface Forecast {
  dt: number;
  main: WeatherMain;
  weather: Weather[];
  clouds: WeatherClouds;
  wind: WeatherWind;
  visibility: number;
  pop: number;
  rain: WeatherRain;
  snow: WeatherSnow;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface ForecastCity {
  id: number;
  name: string;
  coord: WeatherCoordinates;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}
