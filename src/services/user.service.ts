import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiHttp } from './http/apiHttp.service';

@Injectable()
export class UserApiService {
  constructor(private apiHttp: ApiHttp) {}
  getStaffList() {
    return this.apiHttp.get('api/staff/all')
      .map(res => res.json());
  }
  getStaff(id) {
    return this.apiHttp.get('api/staff/' + id)
      .map(res => res.json());
  }
}

