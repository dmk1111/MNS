import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';
const initState = {
    education: {
      mainEducationBlocks: []
    },
    workExperiences: [],
    benefits: [],
    holidays: [],
    premiumFines: [],
    promotions: []
  };
export const staffUpdateReducer: ActionReducer<any> = (state = initState, action: Action) => {
  switch (action.type) {
    case 'SET':
      state[action.payload.key] = Object.assign(
        {},
        state[action.payload.key],
        action.payload.value);
      return Object.assign({}, state);
    case 'SET_EDU':
      let edu = state['education'];
      state['education'] = _.update(
        edu,
        `mainEducationBlocks[${action.payload.index}]`,
        (n) => action.payload.value
      );
      return Object.assign({}, state);
    case 'SET_UPDATE_WORK_EXP':
      state['workExperiences'][action.payload.index] = Object.assign(
        {},
        state['workExperiences'][action.payload.index],
        action.payload.value);
      return Object.assign({}, state);
    case 'SET_UPDATE_BENEFITS':
      state['benefits'][action.payload.index] = Object.assign(
        {},
        state['benefits'][action.payload.index],
        action.payload.value);
      return Object.assign({}, state);
    case 'SET_UPDATE_P_FINES':
      state['premiumFines'][action.payload.index] = Object.assign(
        {},
        state['premiumFines'][action.payload.index],
        action.payload.value);
      return Object.assign({}, state);
    case 'SET_UPDATE_HOLIDAYS':
      state['holidays'][action.payload.index] = Object.assign(
        {},
        state['holidays'][action.payload.index],
        action.payload.value);
      return Object.assign({}, state);
    case 'SET_UPDATE_PROMOTION':
      state['promotions'][action.payload.index] = Object.assign(
        {},
        state['promotions'][action.payload.index],
        action.payload.value);
      return Object.assign({}, state);
    case 'DELETE_UPDATE_FROM_ARR':
      state[action.payload.key] = state[action.payload.key]
        .filter(el => el.id !== action.payload.id);
      return Object.assign({}, state);
    default:
      return state;
  }
};
