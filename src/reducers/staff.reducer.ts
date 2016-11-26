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
export interface Wallet {
  id: number;
  state: number;
  name: string;
}
export interface Staff {
  id: number;
  name: string;
  selected_wallet: number;
  wallets: Wallet[];
}
