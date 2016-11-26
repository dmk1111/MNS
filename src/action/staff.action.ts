import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_STAFF } from '../reducers/staff.reducer';

@Injectable()
export class StaffAction {
  constructor(private store: Store<any>) {}
  setStaff() {
    this.store.dispatch({
      type: SET_STAFF,
      payload: { a : 1 }
    });
  }
}
