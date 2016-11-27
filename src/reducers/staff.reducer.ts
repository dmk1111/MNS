import { ActionReducer, Action } from '@ngrx/store';

export const SET_STAFF = 'SET_STAFF';

export const staffReducer: ActionReducer<Object> = (state: Staff = undefined, action: Action) => {
  switch (action.type) {
    case SET_STAFF:
      return action.payload;
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
