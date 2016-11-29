import { Injectable } from '@angular/core';
import { ApiHttp } from './http/apiHttp.service';

@Injectable()
export class UserApiService {
  constructor(private apiHttp: ApiHttp) {}
  getStaffList() {
    return this.apiHttp.get('api/staff/all')
      .map(res => res.json());
  }
  getStaff(id) {
    return this.apiHttp.get('api/staff/whole/' + id)
      .map(res => res.json());
  }
  saveStaff(staffId, obj) {
    return this.apiHttp.patch('api/staff/' + staffId, obj)
      .map(res => res.json());
  }
  deleteStaff(staffId) {
    return this.apiHttp.delete('api/staff/' + staffId)
      .map(res => res.json());
  }
}

