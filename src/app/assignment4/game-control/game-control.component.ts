import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {
@Output() onIntervalFired=new EventEmitter<number>();
@Output() onGameReset=new EventEmitter();
interval:number;
counter :number=0;

constructor() {
}
onStartGame(){
  this.interval=setInterval(()=>{
    this.counter++;
    this.onIntervalFired.emit(this.counter);
  },1000)
}

onStopGame(){
  clearInterval(this.interval);
}

onResetGame(){
  this.counter=0;
  this.onGameReset.emit();
}


}
