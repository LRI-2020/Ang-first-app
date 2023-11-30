import {EventEmitter, OnInit} from "@angular/core";
import {LuserModel} from "../models/luser.model";
export class LusersService{

  readonly lusers:LuserModel[]=[
    new LuserModel("max",true),
    new LuserModel("lola",false),
    new LuserModel("fanny",false),
    new LuserModel("ben",true),
  ];

  onStatusChanged = new EventEmitter<void>();


  CreateUser(name:string,status:boolean){
    this.lusers.push(new LuserModel(name, status));
  }

  ChangeUserStatus(id:string){
    let user = this.getUserById(id);
    user.status = !user.status;
    this.onStatusChanged.emit();
    console.log('change status for user : ' + user.name +'  User now ' + user.getStatus());

  }

  getActiveUsersCount(){
    return this.getActiveUsers().length;
  }

  getInactiveUsersCount(){
    return this.getInactiveUsers().length;
  }

  getActiveUsers(){
    return this.lusers.filter(u => u.status === true);
  }

  getInactiveUsers(){
    return this.lusers.filter(u => u.status === false);
  }

  private getUserById(id: string) : LuserModel {
    try{
      return this.lusers.find(u => u.id===id);
    }
    catch(e){
      console.log("no user found with id " + id);
    }
  }
}
