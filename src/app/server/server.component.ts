import {Component, Injectable, Input} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-server',
  templateUrl:'./server.component.html',
  styleUrl:'./server.component.scss'
})
export class ServerComponent{

  serverId: number=10;
  serverStatus:string = '';

  constructor() {
    this.serverStatus = Math.random()>0.5?'online':'offline';
  }

    getServerStatus(){
      return this.serverStatus;
    }

    getColor(){

    return this.serverStatus === 'online'? 'green':'red';
    }


}

