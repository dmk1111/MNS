import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';

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
    case 'SET_STAFF_OTHER':
      return Object.assign(
        {},
        state,
        { other: Object.assign(
          {},
          state.other,
          action.payload)
        });
    case 'SET_STAFF_FIRED':
      return Object.assign(
        {},
        state,
        { other: Object.assign(
          {},
          state.fired,
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
    case 'SET_STAFF_EXP':
      let exp = Object.assign([], state.workExperiences);
      return Object.assign(
        {},
        state,
        {
          workExperiences: _.update(
            exp,
            `[${action.payload.index}][${action.payload.key}]`,
            (n) => action.payload.value)
        });
    case 'SET_STAFF_BENEFITS':
      let ben = Object.assign([], state.benefits);
      return Object.assign(
        {},
        state,
        {
          benefits: _.update(
            ben,
            `[${action.payload.index}][${action.payload.key}]`,
            (n) => action.payload.value)
        });
    case 'SET_STAFF_P_FINES':
      let test = Object.assign([], state.premiumFines);
      return Object.assign(
        {},
        state,
        {
          premiumFines: _.update(
            test,
            `[${action.payload.index}][${action.payload.key}]`,
            (n) => action.payload.value)
        });
    case 'SET_STAFF_PROMOTION':
      let pro = Object.assign([], state.promotions);
      return Object.assign(
        {},
        state,
        {
          promotions: _.update(
            pro,
            `[${action.payload.index}][${action.payload.key}]`,
            (n) => action.payload.value)
        });
    case 'DEL_FROM_ARR':
      state[action.payload.key] = state[action.payload.key]
        .filter(el => el.id !== action.payload.id);
      return Object.assign({}, state);
    case 'DELETE_EDUCATION':
      state['education']['mainEducationBlocks'] = state['education']['mainEducationBlocks']
        .filter(el => !_.isEqual(el, action.payload));
          return Object.assign({}, state);
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
