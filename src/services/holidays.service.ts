import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()

export class HolidaysService {
  constructor(public apiHttp: ApiHttp) {
  }

  postHolidays(id, body) {
    return this.apiHttp.post('api/staff' + id + '/holidays', body)
      .map(res => res.json());
  }

  deleteHolidays(id) {
    return this.apiHttp.delete('api/staff' + id + '/holidays')
      .map(res => res.json());
  }

  getHolidays(id) {
    return this.apiHttp.get('api/staff' + id + '/holidays')
      .map(res => res.json());
  }
}
