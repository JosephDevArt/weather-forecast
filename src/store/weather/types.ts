export const LOAD_WEATHER_SUCCESS = "LOAD_WEATHER_SECCESS";

export type TimeStamp = {
  temp: number;
  time: string;
  icon: string;
};

export type NextDay = {
  day: string;
  temp: number;
};

type City = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  coord: { lat: number; lon: number };
};

type Weather = {
  dt_txt: string;
  main: {
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    }
  ];
  wind: {
    speed: number;
  };
};

export type WeatherState = {
  readonly currentWeather: Weather;
  readonly timeLine: TimeStamp[];
  readonly nextDays: NextDay[];
  isFetching?: boolean;
};

export type WeatherPayload = {
  city: City;
  weather: Weather[];
};

type LoadWeatherSuccessAction = {
  type: typeof LOAD_WEATHER_SUCCESS;
  payload: WeatherPayload;
};

export type WeatherActionTypes = LoadWeatherSuccessAction;
