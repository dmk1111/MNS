import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()

export class StaffDocumentsSevice {
  constructor(public apiHttp: ApiHttp) {}
  postStaffDocuments(id, body) {
    return this.apiHttp.post('api/staff' + id + '/staffdocuments', body)
      .map(res => res.json());
  }

  deleteStaffDocuments(id) {
    return this.apiHttp.delete('api/staff' + id + '/staffdocuments')
      .map(res => res.json());
  }

  getStaffDocuments(id) {
    return this.apiHttp.get('api/staff' + id + '/staffdocuments')
      .map(res => res.json());
  }
}
