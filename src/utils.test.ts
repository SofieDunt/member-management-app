import { copyMembers } from './utils';
import { AppMembers, MemberRoles } from './ducks/types';

describe('copyMembers', () => {
  it('makes a deep copy of an empty list', () => {
    const members: AppMembers = [];

    const copy = copyMembers(members);

    expect(copy).toEqual(members);
    expect(copy).not.toBe(members);
  });

  it('makes a deep copy of a non-empty list', () => {
    const members: AppMembers = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@instawork.com',
        phone: '111-222-3333',
        role: MemberRoles.REGULAR,
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@instawork.com',
        phone: '111-222-3333',
        role: MemberRoles.ADMIN,
      },
    ];

    const copy = copyMembers(members);

    expect(copy).toEqual(members);
    expect(copy).not.toBe(members);
  });
});
