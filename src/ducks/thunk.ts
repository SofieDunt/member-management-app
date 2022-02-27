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

export const addMember = (
  member: MemberProps,
): ThunkAction<void, MemberAppState, unknown, MemberAppAction> => {
  return async (dispatch, getState) => {
    const copiedMembers: AppMembers = copyMembers(getState().members);
    copiedMembers.push(member);
    dispatch(memberAppAction(MemberAppTypes.ADD, { members: copiedMembers }));
  };
};

export const editMember = (
  id: number,
  member: MemberProps,
): ThunkAction<void, MemberAppState, unknown, MemberAppAction> => {
  return async (dispatch, getState) => {
    const copiedMembers: AppMembers = copyMembers(getState().members);

    if (id < copiedMembers.length && id > -1) {
      copiedMembers[id] = member;
      dispatch(
        memberAppAction(MemberAppTypes.EDIT, { members: copiedMembers }),
      );
    }
  };
};

export const deleteMember = (
  id: number,
): ThunkAction<void, MemberAppState, unknown, MemberAppAction> => {
  return async (dispatch, getState) => {
    const copiedMembers: AppMembers = copyMembers(getState().members);

    if (id < copiedMembers.length && id > -1) {
      copiedMembers.splice(id, 1);
      dispatch(
        memberAppAction(MemberAppTypes.DELETE, { members: copiedMembers }),
      );
    }
  };
};
