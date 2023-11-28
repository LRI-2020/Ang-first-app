import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {
@Output() onGameStarted=new EventEmitter<number>();
@Output() onGameStopped=new EventEmitter();
  counter: number;

constructor() {
this.counter=0;
}
onStartGame(){
 this.onGameStarted.emit(this.counter);
}

onStopGame(){
  this.onGameStopped.emit();
}

}
