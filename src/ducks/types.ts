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
