import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainComponent } from './components/main/main.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, MainComponent, ForecastComponent, NotFoundComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
