import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-wire-up',
  templateUrl: './wire-up.component.html',
  styleUrls: ['./wire-up.component.scss']
})
export class WireUpComponent implements OnInit {
  constructor(private renderer2: Renderer2) { }

  posX: number = 0
  posY: number = 0
  button: string = 'Stop'
  isStop: boolean = false
  eventListener: (() => void) | undefined

  ngOnInit(): void {
    this.eventListener = this.renderer2.listen('document', 'mousemove', event => {
      this.posY = event.y
      this.posX = event.x
    })
  }

  onMouseMove(ev: MouseEvent): void {
    this.posX = ev.x
    this.posY = ev.y
  }

  onStop() {
    if (!this.isStop) {
      this.eventListener!()
      this.button = 'Start'
    } else {
      this.eventListener = this.renderer2.listen('document', 'mousemove', event => {
        this.posY = event.y
        this.posX = event.x
      })
      this.button = 'Stop'
    }
    this.isStop = !this.isStop
  }

}
