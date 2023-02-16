import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component'
import { CountDownAppComponent } from './pages/count-down-app/count-down-app.component'

const routes: Routes = [
  { path: '', component: WeatherAppComponent },
  { path: 'count-down-app', component: CountDownAppComponent, data: { inisialTime: Date.now() + 1000 * 60 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
