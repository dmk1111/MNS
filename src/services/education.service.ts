import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()
export class EducationService {
  constructor(public apiHTTP: ApiHttp) {}
  getEducation(id) {
    return this.apiHTTP.get('api/staff/' + id + '/education')
      .map(res => res.json());
  }
  deleteEducation(staffId, id) {
    return this.apiHTTP.delete('api/staff/' + staffId + '/' + id + '/education')
      .map(res => res.json());
  }
  setEducation(id, body) {
    return this.apiHTTP.post('api/staff/' + id + '/education', body)
      .map(res => res.json());
  }
}
