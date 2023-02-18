import { Component } from '@angular/core';
import { Watcher } from 'src/app/models/watcher';

@Component({
  selector: 'app-who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss']
})
export class WhoWatchComponent {

  path: string = 'home'
  watcherClicked: number = 0

  watchers: Watcher[] = [
    { id: 'w01', name: 'yuval', movies: ['hi1', 'hi2'] },
    { id: 'w02', name: 'dani', movies: ['hi3', 'hi4'] },
    { id: 'w03', name: 'noa', movies: ['hi5', 'hi6'] },
  ]



  changeRoute(watcherClicked: number) {
    if (this.watcherClicked === watcherClicked) {
      this.path = 'home'
      this.watcherClicked = watcherClicked + 200
    }
    else {
      this.path = ''
      this.watcherClicked = watcherClicked
    }
  }

}
