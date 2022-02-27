export enum MemberRoles {
  REGULAR,
  ADMIN,
}

export interface MemberProps {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly role: MemberRoles;
}

export interface IdMemberProps extends MemberProps {
  readonly id: number;
}

export enum MemberAppTypes {
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export interface MemberAppAction {
  readonly type: MemberAppTypes;
  readonly newState: MemberAppState;
}

export const memberAppAction = (
  type: MemberAppTypes,
  newState: MemberAppState,
): MemberAppAction => {
  return { type, newState };
};

export type AppMembers = MemberProps[];

export interface MemberAppState {
  readonly members: AppMembers;
}
