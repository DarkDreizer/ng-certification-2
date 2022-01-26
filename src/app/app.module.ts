import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ZipCodeComponent } from './components/main/zip-code/zip-code.component';
import { ZipCodeWeatherComponent } from './components/main/zip-code-weather/zip-code-weather.component';
import { CodesService } from './services/codes/codes.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { WeatherService } from './services/weather/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    ForecastComponent,
    NotFoundComponent,
    ZipCodeComponent,
    ZipCodeWeatherComponent,
  ],
  providers: [CodesService, LocalStorageService, WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
