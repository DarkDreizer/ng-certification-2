export interface WeatherResponse {
  coord: WeatherCoordinates;
  weather: Weather[];
  base: string;
  main: WeatherMain;
  wind: WeatherWind;
  visibility: number;
  clouds: WeatherClouds;
  rain: WeatherRain;
  snow: WeatherSnow;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  zipCode?: number;
  message?: string;
  response?: string;
}

export interface WeatherCoordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface WeatherWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherRain {
  '1h': number;
  '3h': number;
}

export interface WeatherSnow {
  '1h': number;
  '3h': number;
}

export interface WeatherSys {
  type: number;
  id: number;
  message: string;
  country: string;
  sunrise: number;
  sunset: number;
}
