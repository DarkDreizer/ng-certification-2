import { Weather, WeatherCoordinates } from './weather.model';

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
  city: ForecastCity;
}

export interface Forecast {
  clouds: number;
  deg: number;
  dt: number;
  feels_like: ForecastFeelsLike;
  gust: number;
  humidity: number;
  pop: number;
  pressure: number;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: ForecastTemp;
  weather: Weather[];
}

export interface ForecastCity {
  id: number;
  name: string;
  coord: WeatherCoordinates;
  country: string;
  timezone: number;
}

export interface ForecastFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface ForecastTemp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}
