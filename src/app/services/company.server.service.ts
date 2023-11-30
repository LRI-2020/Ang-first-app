import {v4 as uuidv4} from "uuid";

export class CompanyServerService{

  servers: {name:string,id:string,status:boolean}[] = [];

  CreateServer(name:string,status:boolean) {
    this.servers.push({name:name, id:uuidv4(), status:status});
  }

  ChangeStatus(id:string){
    let companyServer= this.getServerById(id);
    companyServer.status= !companyServer.status;
  }


  private getServerById(id: string) {
    return this.servers.find(s => s.id === id);
  }
}
