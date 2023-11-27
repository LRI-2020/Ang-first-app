import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.scss'
})
export class Assignment3Component {
  displayDetails=false;
  logs:Date[]=[];

  onDisplayDetails(){
    this.displayDetails = true;
    this.logs.push(new Date(Date.now()));

    setTimeout(()=>{
      this.displayDetails = false;
    },2000);
  }

  protected readonly NgIf = NgIf;
}
