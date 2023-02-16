import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-count-down-app',
  templateUrl: './count-down-app.component.html',
  styleUrls: ['./count-down-app.component.scss']
})
export class CountDownAppComponent implements OnInit {
  now = Date.now()
  @Input() futureTime!: number

  // futureTime: number = Date.now() + 1000 * 60
  timeToShow: string = ''
  diff: number = 0
  interval: any

  ngOnInit(): void {
    this.diff = this.futureTime - this.now
    this.getTimer()
    this.interval = setInterval(() => {
      this.getTimer()
      this.diff = this.diff - 1000
    }, 1000)
  }

  getTimer() {
    if (this.diff > 59000) this.timeToShow = '01:00'
    else if (this.diff < 10000) this.timeToShow = '00:0' + Math.floor(this.diff / 1000)
    else this.timeToShow = '00:' + Math.floor(this.diff / 1000)
    if (this.diff < 1000) clearInterval(this.interval)
  }

}
