import {Component, Input, OnInit} from '@angular/core';
import {CompanyServerService} from "../../services/company.server.service";
import {CompanyServer} from "../../models/company-server.model";

@Component({
  selector: 'app-company-server',
  templateUrl: './company-server.component.html',
  styleUrl: './company-server.component.scss'
})
export class CompanyServerComponent implements OnInit {
  @Input() serverElement: CompanyServer;

  constructor(private companyServerService: CompanyServerService) {
  }

  ngOnInit(): void {
  }


  getColor() {
    return this.serverElement.status ? 'green' : 'red';
  }

  displayStatus() {
    return this.serverElement.status ? 'online' : 'offline';
  }

  changeStatus() {
    this.companyServerService.ChangeStatus(this.serverElement.id);
  }


}

