import {Injectable} from "@angular/core";
import {ApiHttp} from "./http/apiHttp.service";
@Injectable()

export class PremiumFineService {
  constructor(public apiHttp: ApiHttp){}
  postPremiumFine(id, body) {
    return this.apiHttp.post('api/staff' + id + '/premiumfine', body)
      .map(res => res.json())
  }

  deletePremiumFine(id) {
    return this.apiHttp.delete('api/staff' + id + '/premiumfine')
      .map(res => res.json())
  }

  getPremiumFine(id) {
    return this.apiHttp.get('api/staff' + id + '/premiumfine')
      .map(res =>res.json())
  }
}
