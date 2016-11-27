import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()

export class ReportsService {
  constructor(public apiHttp: ApiHttp) {}
  postReports(id, body) {
    return this.apiHttp.post('api/staff' + id + '/reports', body)
      .map(res => res.json());
  }

  deleteReports(id) {
    return this.apiHttp.delete('api/staff' + id + '/reports')
      .map(res => res.json());
  }

  getReports(id) {
    return this.apiHttp.get('api/staff' + id + '/reports')
      .map(res => res.json());
  }
}
