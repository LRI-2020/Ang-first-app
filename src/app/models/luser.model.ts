import {v4 as uuidv4} from "uuid";
export class LuserModel{
  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }
  private _status: boolean;
  get id(): string {
    return this._id;
  }
  private readonly _id: string;
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  private _name: string;

  constructor(name:string, status:boolean) {
    this._name=name;
    this._id=uuidv4();
    this._status=status;
  }

  getStatus(){
    return this.status?'active':'inactive';
  }
}
