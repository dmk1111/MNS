import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()
export class HospitalService {
  constructor(public apiHttp: ApiHttp) {}
  postHospital(id, body) {
    return this.apiHttp.post('api/staff' + id + '/hospital', body)
      .map(res => res.json());
  }

  deleteHospital(id) {
    return this.apiHttp.delete('api/staff' + id + '/hospital')
      .map(res => res.json());
  }

  getHospital(id) {
    return this.apiHttp.get('api/staff' + id + '/hospital')
      .map(res => res.json());
  }
}
