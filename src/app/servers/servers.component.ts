import {Component, ElementRef, EventEmitter, Input, ViewChild} from '@angular/core';
import {v4 as uuidv4} from "uuid";


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss'
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  @ViewChild('serverStatusInput') serverStatusInput:ElementRef;
  serverCreated = false;
  servers: {name:string,id:string,status:boolean}[] = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(nameInput: HTMLInputElement) {
    let name = nameInput.value;
    this.servers.push({name:name, id:uuidv4(), status:this.serverStatusInput.nativeElement.checked});
    this.setCreatedStatus();
    this.serverCreationStatus = `server was created. Server name is ${name}`;
  }

  setCreatedStatus(){
    this.serverCreated=true;
    setTimeout(()=>{
      this.serverCreated=false;
    },2000);

  }


}
