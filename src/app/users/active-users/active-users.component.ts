import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LusersService} from "../../services/lusers.service";
import {LuserModel} from "../../models/luser.model";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() luser: LuserModel;

  constructor(private usersService:LusersService) {
  }

  onSetToInactive(id: string) {
    this.usersService.ChangeUserStatus(id);
  }

  ngOnInit(): void {

  }
}
