import {Component, Output} from '@angular/core';
import {ServerComponent} from "./server/server.component";
import * as events from "events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Output('counter') counters: number[];
  evens: number[];
  odds:number[];

  constructor() {
    this.evens=[];
    this.odds=[];
  }


addNumber(value:number){
    if(value%2===0){
      this.evens.push(value);
    }
    else{
      this.odds.push(value);
    }
}



}
