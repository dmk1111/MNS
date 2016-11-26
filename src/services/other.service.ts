import {Injectable} from "@angular/core";
import {ApiHttp} from "./http/apiHttp.service";
@Injectable()

export class OtherService {
  constructor(public apiHttp: ApiHttp) {}

  postOther(id, body) {
    return this.apiHttp.post('api/staff' + id + '/other', body)
      .map(res => res.json())
  }

  deleteOther(id) {
    return this.apiHttp.delete('api/staff' + id + '/other')
      .map(res => res.json())
  }

  getOther(id) {
    return this.apiHttp.get('api/staff' + id + '/other')
      .map(res =>res.json())
  }
}
