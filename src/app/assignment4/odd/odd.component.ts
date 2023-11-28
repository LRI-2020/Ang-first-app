import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.scss'
})
export class OddComponent {
@Input() CounterReceived:number;
}
