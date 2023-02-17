import { Component, OnInit, Input, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-count-down-app',
  templateUrl: './count-down-app.component.html',
  styleUrls: ['./count-down-app.component.scss']
})
export class CountDownAppComponent implements OnInit, OnDestroy {
  now = Date.now()
  @Input() futureTime!: number

  // futureTime: number = Date.now() + 1000 * 60
  timeToShow: string = '01:00'
  diff: number = 0
  interval: any

  ngOnInit(): void {
    this.diff = this.futureTime - this.now
    this.interval = setInterval(() => {
      this.getTimer()
      this.diff = this.diff - 1000
    }, 1000)
  }

  getTimer() {
    if (Math.floor(this.diff / 1000) > 59000) this.timeToShow = '01:00'
    else if (this.diff < 10000) this.timeToShow = '00:0' + Math.floor(this.diff / 1000)
    else this.timeToShow = '00:' + Math.floor(this.diff / 1000)
    if (this.diff < 1000) {
      clearInterval(this.interval)
      new Audio("../../../assets/audio/ding.mp3").play();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

}
