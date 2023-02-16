import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit, OnDestroy {
  date = new Date()
  season = this.getSeason()
  intervalId: any
  isDark: boolean = false

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.date = new Date()
    }, 1000 * 60)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getMinites() {
    if (this.date.getMinutes() < 10) return '0' + this.date.getMinutes()
    else return this.date.getMinutes()
  }

  getSeason() {
    let month = this.date.getMonth() + 1;
    if (month === 12 || (month >= 1 && month <= 2)) return "winter.png";
    else if (month >= 5 && month <= 9) return "summer.png";
    else if (month >= 3 && month <= 4) return "spring.png"
    else return `autumn.png`
  }

  toggleDark() {
    this.isDark = !this.isDark
  }
}
