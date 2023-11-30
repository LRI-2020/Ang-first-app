import {Component, EventEmitter, Injectable, Input, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";
import {Server} from "./server.model";
import {CompanyServerService} from "../services/company.server.service";

@Component({
  selector: 'app-company-server',
  templateUrl: './company-server.component.html',
  styleUrl: './company-server.component.scss'
})
export class CompanyServerComponent implements OnInit {
  @Input() serverElement: { name: string; status: boolean; id: string; };

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

