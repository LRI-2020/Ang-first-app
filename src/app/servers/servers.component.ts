import {Component, Input} from '@angular/core';
import {ServerComponent} from "../server/server.component";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss'
})
export class ServersComponent {

  allowNewServer = false;
  serverCreattionStatus = 'no server was created';
  serverName = 'Test initial name';
  userName = 'JohnDoe';
  serverCreated = false;
  servers:string[] = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated=true;
    this.serverCreattionStatus = 'server was created. Server name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;

  }

  onResetUserName(){

    if(this.userName.length>0){
      this.userName='';
    }
  }

}
