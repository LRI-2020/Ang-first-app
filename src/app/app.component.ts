import { Component } from '@angular/core';
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'})
export class AppComponent {
  name = 'Max';
}
