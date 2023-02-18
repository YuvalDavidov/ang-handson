import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-handson';
  route = 'who-watch'
  futureTime: number = Date.now() + 1000 * 60

  changeRoute(route: string) {
    this.route = route

  }
}
