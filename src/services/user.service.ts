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
  getDeletedStaff() {
    return this.apiHttp.get('api/staff/allDeleted')
      .map(res => res.json());
  }
  createStaff(staff) {
    return this.apiHttp.post('/api/staff', staff)
      .map(res => res.json());
  }

  getRegions() {
    return this.apiHttp.get('api/region')
      .map(res => res.json());
  }
  setRegion(body) {
    return this.apiHttp.post('api/region', JSON.stringify(body))
      .map(res => res.json());
  }
  getUsers() {
    return this.apiHttp.get('api/user')
      .map(res => res.json());
  }
  // postRole(id, role) {
  //   return this.apiHttp.patch('/api/user/' + id + '/role', JSON.stringify({role: role}))
  //     .map(res => res.json());
  // }
  // getRoles() {
  //   return this.apiHttp.get
  // }
  saveUserRegion(userId, regions) {
    return this.apiHttp.patch(`/api/user/${userId}/regions`, regions)
      .map(res => res.json());
  }
  saveUser(user) {
    return this.apiHttp.put(`/api/user`, user)
      .map(res => res.json());
  }
}

