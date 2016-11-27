import { ActionReducer, Action } from '@ngrx/store';
import * as  _ from 'lodash';

export const SET_STAFF = 'SET_STAFF';

export const staffReducer: ActionReducer<Object> = (state: Staff = undefined, action: Action) => {
  switch (action.type) {
    case SET_STAFF:
      return action.payload;
    case 'SET_STAFF_BASE':
      return Object.assign(
        {},
        state,
        { mainStaff: Object.assign(
          {},
          state.mainStaff,
          action.payload)
        });
    case 'SET_STAFF_EDUCATIONS':
      let edu = Object.assign({}, state.education);
      return Object.assign(
        {},
        state,
        {
          education: _.update(
            edu,
            `mainEducationBlocks[${action.payload.index}][${action.payload.key}]`,
            (n) => action.payload.value)
        });
    default:
      return state;
  }
};
export interface Staff {
  benefits: Array<any>;
  education: Object;
  fired: Object;
  holidays: any[];
  id: number;
  isDeleted: any;
  mainStaff: Object;
  other: Object;
  premiumFines: any[];
  promotions: any[];
  region: any;
  workExperiences: any[];
}
