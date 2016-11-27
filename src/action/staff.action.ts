import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_STAFF } from '../reducers/staff.reducer';

@Injectable()
export class StaffAction {
  constructor(private store: Store<any>) {}
  setStaff(staff) {
    this.store.dispatch({
      type: SET_STAFF,
      payload: staff
    });
  }
  setStaffBase(key, value) {
    let obj = {};
    obj[key] = value;
    this.store.dispatch({
      type: 'SET_STAFF_BASE',
      payload: obj
    });
  }
  setUpdateStaff(key, value) {
    this.store.dispatch({
      type: 'SET',
      payload: {key: key, value: value}
    });
  }
  setStaffEducation(key, value, index) {
    this.store.dispatch({
      type: 'SET_STAFF_EDUCATIONS',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
  setUpdateStaffEducation(key, value, index) {
    this.store.dispatch({
      type: 'SET_EDU',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
}
