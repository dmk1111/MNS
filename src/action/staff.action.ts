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
  setOtherStaff(key, value) {
    let obj = {};
    obj[key] = value;
    this.store.dispatch({
      type: 'SET_STAFF_OTHER',
      payload: obj
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
  setUpdateStaffEducation(value, index) {
    this.store.dispatch({
      type: 'SET_EDU',
      payload: {
        index: index,
        value: value
      }
    });
  }
  setUpdateStaffWorkExp(value, index) {
    this.store.dispatch({
      type: 'SET_UPDATE_WORK_EXP',
      payload: {
        index: index,
        value: value
      }
    });
  }
  setUpdateHolidays(value, index) {
    this.store.dispatch({
      type: 'SET_UPDATE_HOLIDAYS',
      payload: {
        index: index,
        value: value
      }
    });
  }
  setStaffHolidays(key, value, index) {
    this.store.dispatch({
      type: 'SET_STAFF_HOLIDAYS',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
  setUpdateBenefits(value, index) {
    this.store.dispatch({
      type: 'SET_UPDATE_BENEFITS',
      payload: {
        index: index,
        value: value
      }
    });
  }
  setUpdatePremiumFined(value, index) {
    this.store.dispatch({
      type: 'SET_UPDATE_P_FINES',
      payload: {
        index: index,
        value: value
      }
    });
  }
  setUpdatePromotion(value, index) {
    this.store.dispatch({
      type: 'SET_UPDATE_PROMOTION',
      payload: {
        index: index,
        value: value
      }
    });
  }
  setStaffPremiumFines(key, value, index) {
    this.store.dispatch({
      type: 'SET_STAFF_P_FINES',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
  setStaffPromotion(key, value, index) {
    this.store.dispatch({
      type: 'SET_STAFF_PROMOTION',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
  setStaffFired(key, value) {
    let obj = {};
    obj[key] = value;
    this.store.dispatch({
      type: 'SET_STAFF_FIRED',
      payload: obj
    });
  }
  setStaffBenefits(key, value, index) {
    this.store.dispatch({
      type: 'SET_STAFF_BENEFITS',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
  setStaffExp(key, value, index) {
    this.store.dispatch({
      type: 'SET_STAFF_EXP',
      payload: {
        index: index,
        key: key,
        value: value
      }
    });
  }
  delFromArr(key, id) {
    this.store.dispatch({
      type: 'DEL_FROM_ARR',
      payload: {
        key: key,
        id: id
      }
    });
  }
  delFromUpdateArr(key, obj) {
    this.store.dispatch({
      type: 'DELETE_UPDATE_FROM_ARR',
      payload: {
        key: key,
        id: obj
      }
    });
  }
  deleteEducation(edu) {
    this.store.dispatch({
      type: 'DELETE_EDUCATION',
      payload: edu
    });
  }
  delEduUpdate(edu) {
    this.store.dispatch({
      type: 'DELETE_UPDATE_EDU',
      payload: edu
    });
  }
  clearUpdateObj() {
    this.store.dispatch({
      type: 'CLEAR'
    });
  }
}
