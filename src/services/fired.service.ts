import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()

export class FiredService {
  constructor(public apiHttp: ApiHttp) {}
  postFired(id, body) {
    return this.apiHttp.post('api/staff' + id + '/fired', body)
      .map(res => res.json());
  }
  deleteFired(id) {
    return this.apiHttp.delete('api/staff' + id + '/fired')
      .map(res => res.json());
  }
  getFired(id) {
    return this.apiHttp.get('api/staff' + id + '/fired')
      .map(res => res.json());
  }
}
