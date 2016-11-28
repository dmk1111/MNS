import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()

export class WorkExperienceService {
  constructor(public apiHttp: ApiHttp) {}
  postWorkExperience(id, body) {
      return this.apiHttp.post('api/staff' + id + '/workexperience', body)
        .map(res => res.json());
  }
  deleteWorkExperience(staffId, id) {
    return this.apiHttp.delete('api/staff/' + id + '/workexperience')
      .map(res => res.json());
  }
  getWorkExperience(id) {
    return this.apiHttp.get('api/staff' + id + '/workexperience')
      .map(res => res.json());
  }
}

