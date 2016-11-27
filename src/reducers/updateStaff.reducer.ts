import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';
export const staffUpdateReducer: ActionReducer<Object> = (state = {education: {mainEducationBlocks: []}}, action: Action) => {
  switch (action.type) {
    case 'SET':
      state[action.payload.key] = Object.assign(
        {},
        state[action.payload.key],
        action.payload.value);
      return Object.assign({}, state);
    case 'SET_EDU':
      debugger
      let edu = state['education'];
      state['education'] = _.update(
        edu,
        `mainEducationBlocks[${action.payload.index}][${action.payload.key}]`,
        (n) => action.payload.value
      );
      return Object.assign({}, state);
    default:
      return state;
  }
};
