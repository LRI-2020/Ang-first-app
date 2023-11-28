import {Component, EventEmitter, Injectable, Input, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";
import {Server} from "./server.model";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent implements OnInit {
  @Input()serverElement: { name: string; status: boolean; id: string; };

  ngOnInit(): void {
  }



  getColor() {
    return this.serverElement.status ? 'green' : 'red';
  }

  getStatus(){
    return this.serverElement.status ? 'online' : 'offline';
  }

  changeStatus(){
    this.serverElement.status = !this.serverElement.status;
  }


}

