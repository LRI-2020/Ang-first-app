import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompanyServerService} from "../services/company.server.service";
import {CompanyServer} from "../models/company-server.model";


@Component({
  selector: 'app-company-servers',
  templateUrl: './company-servers.component.html',
  styleUrl: './company-servers.component.scss'
})
export class CompanyServersComponent implements OnInit{


  companyServers: CompanyServer[] = [];

  constructor(private companyServerService:CompanyServerService) {

  }



  ngOnInit(): void {
        this.companyServers = this.companyServerService.companyServers;

  }


}
