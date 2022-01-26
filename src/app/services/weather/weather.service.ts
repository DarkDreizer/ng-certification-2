import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ForecastResponse } from '../../models/forecaset.model';
import { WeatherResponse } from '../../models/weather.model';

@Injectable()
export class WeatherService {
  private apiKey = environment.weatherAPIKey;
  constructor(private http: HttpClient) {}

  getCodeWeather(code: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${environment.weatherAPI}weather?zip=${code}&appid=${this.apiKey}&units=metric`
    );
  }

  getForecast(code: number): Observable<ForecastResponse> {
    return this.http.get<ForecastResponse>(
      `${environment.weatherAPI}forecast?zip=${code}&appid=${this.apiKey}&units=metric`
    );
  }
}
