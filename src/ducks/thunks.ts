import {
  AppMembers,
  MemberAppAction,
  memberAppAction,
  MemberAppState,
  MemberAppTypes,
  MemberProps,
} from './types';
import { copyMembers } from '../utils';
import { ThunkAction } from 'redux-thunk';

/**
 * A thunk to add the given member to the store.
 * @param member the member to add
 */
export const addMember = (
  member: MemberProps,
): ThunkAction<void, MemberAppState, unknown, MemberAppAction> => {
  return async (dispatch, getState) => {
    const copiedMembers: AppMembers = copyMembers(getState().members);
    copiedMembers.push(member); // add the member to the copied list

    // dispatch an action with the new members list
    dispatch(memberAppAction(MemberAppTypes.ADD, { members: copiedMembers }));
  };
};

/**
 * A thunk to edit the indicated member.
 * @param id the id of the member to edit (idx in members list in store)
 * @param member the new values of the member
 */
export const editMember = (
  id: number,
  member: MemberProps,
): ThunkAction<void, MemberAppState, unknown, MemberAppAction> => {
  return async (dispatch, getState) => {
    const copiedMembers: AppMembers = copyMembers(getState().members);

    // if the given id is invalid, do nothing
    if (id < copiedMembers.length && id > -1) {
      copiedMembers[id] = member; // edit the member in the copied list

      // dispatch an action with the new members list
      dispatch(
        memberAppAction(MemberAppTypes.EDIT, { members: copiedMembers }),
      );
    }
  };
};

/**
 * A thunk to delete the given member.
 * @param id the id of the member to delete (idx in members list in store)
 */
export const deleteMember = (
  id: number,
): ThunkAction<void, MemberAppState, unknown, MemberAppAction> => {
  return async (dispatch, getState) => {
    const copiedMembers: AppMembers = copyMembers(getState().members);

    // if the given id is invalid, do nothing
    if (id < copiedMembers.length && id > -1) {
      copiedMembers.splice(id, 1); // delete the member from the copied list

      // dispatch an action with the new members list
      dispatch(
        memberAppAction(MemberAppTypes.DELETE, { members: copiedMembers }),
      );
    }
  };
};
