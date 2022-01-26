import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  catchError,
  forkJoin,
  map,
  of,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { WeatherResponse } from '../../../models/weather.model';
import { CodesService } from '../../../services/codes/codes.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { WeatherService } from '../../../services/weather/weather.service';
import { weatherIcon } from '../../../utils/weather-icon';

@Component({
  selector: 'app-zip-code-weather',
  templateUrl: './zip-code-weather.component.html',
  styleUrls: ['./zip-code-weather.component.css'],
})
export class ZipCodeWeatherComponent implements OnInit, OnDestroy {
  private _ngUnsubscribe$ = new Subject();

  weathers: Partial<WeatherResponse>[] = [];
  constructor(
    private codes: CodesService,
    private weather: WeatherService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.codes.currentCodes
      .pipe(
        takeUntil(this._ngUnsubscribe$),
        switchMap((codesArray) => {
          return forkJoin(
            codesArray.map((code) =>
              this.weather.getCodeWeather(code).pipe(
                catchError((error) =>
                  of({
                    zipCode: code,
                    message: 'No weather information for',
                    response: error.message,
                    weather: [],
                  })
                ),
                map((response) => ({ ...response, zipCode: code }))
              )
            )
          );
        })
      )
      .subscribe((newWeathers) => {
        this.weathers = newWeathers;
        this.storage.weathers = JSON.stringify(this.weathers);
      });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next(true);
    this._ngUnsubscribe$.complete();
  }

  retrieveIcon(icon: string): string {
    return weatherIcon(icon);
  }

  removeWeather(code: number): void {
    this.codes.removeCode(code);
  }
}
