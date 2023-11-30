import {v4 as uuidv4} from "uuid";
import {CompanyServer} from "../models/company-server.model";

export class CompanyServerService{

  companyServers: CompanyServer[] = [];

  CreateServer(name:string,status:boolean) {
    this.companyServers.push(new CompanyServer(name,status));
  }

  ChangeStatus(id:string){
    let companyServer= this.getServerById(id);
    companyServer.status= !companyServer.status;
  }


  private getServerById(id: string) {
    return this.companyServers.find(s => s.id === id);
  }
}
