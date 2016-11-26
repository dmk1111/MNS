import {Injectable} from "@angular/core";
import {ApiHttp} from "./http/apiHttp.service";
@Injectable()

export class StaffPersonalSerivce {
  constructor(public apiHttp: ApiHttp){}
  postStaffPersonal(id, body) {
    return this.apiHttp.post('api/staff' + id + '/staffpersonal', body)
      .map(res => res.json())
  }

  deleteStaffPersonal(id) {
    return this.apiHttp.delete('api/staff' + id + '/staffpersonal')
      .map(res => res.json())
  }

  getStaffPersonal(id) {
    return this.apiHttp.get('api/staff' + id + '/staffpersonal')
      .map(res =>res.json())
  }
}
