import { applyMiddleware, createStore, Reducer } from 'redux';
import {
  MemberAppAction,
  MemberAppState,
  MemberAppTypes,
  MemberRoles,
} from './ducks/types';
import thunk from 'redux-thunk';

export const initialStoreState: MemberAppState = {
  members: [
    {
      firstName: 'Adrien',
      lastName: 'Olczak',
      email: 'adrien@instawork.com',
      phone: '415-310-1619',
      role: MemberRoles.ADMIN,
    },
    {
      firstName: 'Charlene',
      lastName: 'Pham',
      email: 'charlene@instawork.com',
      phone: '415-310-1619',
      role: MemberRoles.REGULAR,
    },
    {
      firstName: 'Benson',
      lastName: 'Mach',
      email: 'benson@instawork.com',
      phone: '415-310-1619',
      role: MemberRoles.REGULAR,
    },
    {
      firstName: 'Dan',
      lastName: 'Petrie',
      email: 'dan@instawork.com',
      phone: '415-310-1619',
      role: MemberRoles.REGULAR,
    },
  ],
};

export const memberAppReducer: Reducer<MemberAppState, MemberAppAction> = (
  state = initialStoreState,
  action: MemberAppAction,
) => {
  switch (action.type) {
    case MemberAppTypes.ADD:
    case MemberAppTypes.EDIT:
    case MemberAppTypes.DELETE:
      return action.newState;
    default:
      return state;
  }
};

export const store = createStore(
  memberAppReducer,
  initialStoreState,
  applyMiddleware(thunk),
);
