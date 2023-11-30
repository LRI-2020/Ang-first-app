import {Component, ElementRef, ViewChild} from '@angular/core';
import {CompanyServerService} from "../../services/company.server.service";
import {CompanyServer} from "../../models/company-server.model";

@Component({
  selector: 'app-company-server-new',
  templateUrl: './company-server-new.component.html',
  styleUrl: './company-server-new.component.scss'
})
export class CompanyServerNewComponent {

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  @ViewChild('serverStatusInput') serverStatusInput:ElementRef;
  @ViewChild('serverNameInput') serverNameInput:ElementRef;
  serverCreated = false;
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

}
