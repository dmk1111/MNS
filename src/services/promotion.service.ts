import {Injectable} from "@angular/core";
import {ApiHttp} from "./http/apiHttp.service";
@Injectable()

export class Promotion {
  constructor(public apiHttp: ApiHttp) {}
  postPromotion(id, body) {
    return this.apiHttp.post('api/staff' + id + '/promotion', body)
      .map(res => res.json())
  }

  deletePromotion(id) {
    return this.apiHttp.delete('api/staff' + id + '/promotion')
      .map(res => res.json())
  }

  getPromotion(id) {
    return this.apiHttp.get('api/staff' + id + '/promotion')
      .map(res =>res.json())
  }
}

