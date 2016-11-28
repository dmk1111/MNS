import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';

@Injectable()
export class BenefitsService {
  constructor(public apiHTTP: ApiHttp) {}
  postBenefits(id, body) {
    return this.apiHTTP.post('api/staff/' + id + '/benefits', body)
      .map(res => res.json());
  }
  deleteBenefits(staffId, id) {
    return this.apiHTTP.delete('api/staff/' + staffId + '/' + id + '/benefits')
      .map(res => res.json());
  }
  getBenefits(id) {
    return this.apiHTTP.get('api/staff/' + id + '/benefits')
      .map(res => res.json());
  }
}
