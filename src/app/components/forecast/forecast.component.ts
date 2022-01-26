import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ForecastResponse } from '../../models/forecaset.model';
import { WeatherService } from '../../services/weather/weather.service';
import { weatherIcon } from '../../utils/weather-icon';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecast!: ForecastResponse;
  zipCode!: number;
  constructor(private route: ActivatedRoute, private weather: WeatherService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          this.zipCode = Number(paramMap.get('zipcode'));
          return this.weather.getForecast(this.zipCode);
        })
      )
      .subscribe((data) => (this.forecast = data));
  }

  retrieveIcon(icon: string): string {
    return weatherIcon(icon);
  }
}
