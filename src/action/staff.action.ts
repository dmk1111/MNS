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
  setStaffBase(key, value, needUpdate?) {
    let obj = {};
    obj[key] = value;
    if (needUpdate)
      obj['needUpdate'] = true;
    this.store.dispatch({
      type: 'SET_STAFF_BASE',
      payload: obj
    });
  }
}
