import {Component, Output} from '@angular/core';
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Output('counter') counters: number[];
  intervalID: number;

  constructor() {
    this.counters=[];
  }

  StartInterval(counter: number) {
    this.intervalID = setInterval(() => {
      counter++;
      this.counters.push(counter);
      console.log("counter : " + counter);
    }, 1000);
    console.log("Interval ID started: " + this.intervalID);

  }

  StopInterval() {
    clearInterval(this.intervalID);
    console.log("Interval ID cleared: " + this.intervalID);

  }

}
