import {Component, OnInit} from '@angular/core';
import {LuserModel} from "../../models/luser.model";
import {LusersService} from "../../services/lusers.service";

@Component({
  selector: 'app-lusers',
  templateUrl: './lusers.component.html',
  styleUrl: './lusers.component.scss'
})
export class LusersComponent implements OnInit {

  inactiveUsers:LuserModel[]=[]
  activeUsers:LuserModel[]=[]

  constructor(private usersService:LusersService) {
    this.usersService.onStatusChanged.subscribe(()=>{
      this.inactiveUsers=this.usersService.getInactiveUsers();
      this.activeUsers = this.usersService.getActiveUsers();
    })
  }

  ngOnInit(): void {
    this.inactiveUsers=this.usersService.getInactiveUsers();
    this.activeUsers = this.usersService.getActiveUsers();

  }
}
