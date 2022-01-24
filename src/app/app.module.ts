import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './components/main/main.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MainComponent, ForecastComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
