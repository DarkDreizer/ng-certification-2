import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WeatherResponse } from '../../models/weather.model';

@Injectable()
export class WeatherService {
  private apiKey = environment.weatherAPIKey;
  constructor(private http: HttpClient) {}

  getCodeWeather(code: number): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${environment.weatherAPI}?zip=${code}&appid=${this.apiKey}&units=metric`
    );
  }
}
