import { WeatherResponse } from '../models/weather.model';

export const mockWeathers: Partial<WeatherResponse>[] = [
  {
    zipCode: 12352,
    message: 'No weather information for',
    response:
      'Http failure response for http://api.openweathermap.org/data/2.5/weather?zip=12352&appid=5a4b2d457ecbef9eb2a71e480b947604&units=metric: 404 Not Found',
    weather: [],
  },
  {
    coord: {
      lon: -81.6326,
      lat: 38.3498,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
    base: 'stations',
    main: {
      temp: -4.81,
      feels_like: -7.31,
      temp_min: -7.12,
      temp_max: -3.59,
      pressure: 1023,
      humidity: 76,
    },
    visibility: 10000,
    wind: {
      speed: 1.54,
      deg: 320,
    },
    clouds: {
      all: 0,
    },
    dt: 1643171090,
    sys: {
      type: 1,
      id: 3707,
      country: 'US',
      sunrise: 1643114221,
      sunset: 1643150426,
    },
    timezone: -18000,
    id: 0,
    name: 'Charleston',
    cod: 200,
    zipCode: 25325,
  },
  {
    coord: {
      lon: -77.1129,
      lat: 38.8808,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    base: 'stations',
    main: {
      temp: -1.82,
      feels_like: -4.28,
      temp_min: -4.26,
      temp_max: -0.32,
      pressure: 1022,
      humidity: 54,
    },
    visibility: 10000,
    wind: {
      speed: 1.79,
      deg: 344,
      gust: 5.36,
    },
    clouds: {
      all: 100,
    },
    dt: 1643171090,
    sys: {
      type: 2,
      id: 2035377,
      country: 'US',
      sunrise: 1643113209,
      sunset: 1643149269,
    },
    timezone: -18000,
    id: 0,
    name: 'Arlington',
    cod: 200,
    zipCode: 22225,
  },
  {
    coord: {
      lon: -77.1,
      lat: 38.87,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    base: 'stations',
    main: {
      temp: -1.68,
      feels_like: -4.12,
      temp_min: -4.06,
      temp_max: -0.22,
      pressure: 1022,
      humidity: 53,
    },
    visibility: 10000,
    wind: {
      speed: 1.79,
      deg: 344,
      gust: 5.36,
    },
    clouds: {
      all: 100,
    },
    dt: 1643171090,
    sys: {
      type: 2,
      id: 2035377,
      country: 'US',
      sunrise: 1643113204,
      sunset: 1643149267,
    },
    timezone: -18000,
    id: 0,
    name: 'Arlington',
    cod: 200,
    zipCode: 22222,
  },
  {
    coord: {
      lon: -76.61,
      lat: 39.3626,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    base: 'stations',
    main: {
      temp: -2.38,
      feels_like: -2.38,
      temp_min: -4.77,
      temp_max: -0.47,
      pressure: 1025,
      humidity: 54,
    },
    visibility: 10000,
    wind: {
      speed: 0.45,
      deg: 323,
      gust: 4.47,
    },
    clouds: {
      all: 100,
    },
    dt: 1643171090,
    sys: {
      type: 2,
      id: 2007554,
      country: 'US',
      sunrise: 1643113154,
      sunset: 1643149082,
    },
    timezone: -18000,
    id: 0,
    name: 'Baltimore',
    cod: 200,
    zipCode: 21212,
  },
];
