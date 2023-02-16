import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';
import { CountDownAppComponent } from './pages/count-down-app/count-down-app.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    CountDownAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
