import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-server',
  templateUrl:'./server.component.html'
})
export class ServerComponent{

  allowServerCreation=false;
  servers:string[]=[];
  serverName='';
  clusterId='';

  constructor() {

    setTimeout(()=>{
      this.allowServerCreation=true;
    },3000)
  }

  isValidId(){
    return !!(this.clusterId && this.clusterId.length > 3);

  }

  onResetClusterId(){
    this.clusterId='';
  }
  onCreateServer(){

    if(this.serverName!== null && this.serverName!== undefined && this.serverName.length>3){
      this.servers.push(this.serverName);
      this.servers.length;
    }

    else{
      alert('Enter a valid name for your server');
    }

  }

  onSetServerName(event:Event){

    this.serverName= (<HTMLInputElement> event.target).value;
  }


}

