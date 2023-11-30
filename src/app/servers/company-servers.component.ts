import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompanyServerService} from "../services/company.server.service";


@Component({
  selector: 'app-company-servers',
  templateUrl: './company-servers.component.html',
  styleUrl: './company-servers.component.scss'
})
export class CompanyServersComponent implements OnInit{

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  @ViewChild('serverStatusInput') serverStatusInput:ElementRef;
  @ViewChild('serverNameInput') serverNameInput:ElementRef;
  serverCreated = false;
  companyServers: {name:string,id:string,status:boolean}[] = [];

  constructor(private companyServerService:CompanyServerService) {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.companyServerService.CreateServer(this.serverNameInput.nativeElement.value,this.serverStatusInput.nativeElement.checked)
    this.setCreatedStatus();
    this.serverCreationStatus = `server was created. Server name is ${this.serverNameInput.nativeElement.value}`;
  }

  setCreatedStatus(){
    this.serverCreated=true;
    setTimeout(()=>{
      this.serverCreated=false;
    },2000);

  }

  ngOnInit(): void {
        this.companyServers = this.companyServerService.servers;

  }


}
