import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LuserModel} from "../../models/luser.model";
import {LusersService} from "../../services/lusers.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input()luser: LuserModel;

  onSetToActive(id: string) {
    this.usersService.ChangeUserStatus(id);
  }

  constructor(private usersService:LusersService) {
  }

  ngOnInit(): void {
  }
}
