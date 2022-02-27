import { MemberAppTypes, MemberProps, MemberRoles } from '../types';
import { addMember, deleteMember, editMember } from '../thunks';

describe('Thunks', () => {
  const dummyMember: MemberProps = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@instawork.com',
    phone: '111-222-3333',
    role: MemberRoles.REGULAR,
  };

  const dummyMember2: MemberProps = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@instawork.com',
    phone: '111-222-3333',
    role: MemberRoles.ADMIN,
  };

  describe('addMember', () => {
    it('dispatches an addMember action after adding member', async () => {
      const mockGetState = () => {
        return { members: [] };
      };
      const mockDispatch = jest.fn();
      const mockAddMemberRequest: MemberProps = {
        firstName: 'First',
        lastName: 'Last',
        email: 'first@instawork.com',
        phone: '111-222-3333',
        role: MemberRoles.ADMIN,
      };

      const members = [mockAddMemberRequest];
      await addMember(mockAddMemberRequest)(mockDispatch, mockGetState, {});

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: MemberAppTypes.ADD,
        newState: { members: members },
      });
    });

    it('correctly adds to non-empty list', async () => {
      const mockGetState = () => {
        return { members: [dummyMember] };
      };
      const mockDispatch = jest.fn();
      const mockAddMemberRequest: MemberProps = {
        firstName: 'First',
        lastName: 'Last',
        email: 'first@instawork.com',
        phone: '111-222-3333',
        role: MemberRoles.ADMIN,
      };

      await addMember(mockAddMemberRequest)(mockDispatch, mockGetState, {});

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: MemberAppTypes.ADD,
        newState: { members: [dummyMember, mockAddMemberRequest] },
      });
    });
  });

  describe('editMember', () => {
    const mockEditMemberRequest: MemberProps = {
      firstName: 'First',
      lastName: 'Last',
      email: 'first@instawork.com',
      phone: '111-222-3333',
      role: MemberRoles.ADMIN,
    };

    it('dispatches an editMember action after editing member', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await editMember(1, mockEditMemberRequest)(
        mockDispatch,
        mockGetState,
        {},
      );

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: MemberAppTypes.EDIT,
        newState: { members: [dummyMember, mockEditMemberRequest] },
      });
    });

    it('edits correct member given ID', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await editMember(0, mockEditMemberRequest)(
        mockDispatch,
        mockGetState,
        {},
      );

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: MemberAppTypes.EDIT,
        newState: { members: [mockEditMemberRequest, dummyMember2] },
      });
    });

    it('does not do anything with invalid negative member id', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await editMember(-1, mockEditMemberRequest)(
        mockDispatch,
        mockGetState,
        {},
      );

      expect(mockDispatch).toHaveBeenCalledTimes(0);
    });

    it('does not do anything with member id > members.length', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await editMember(3, mockEditMemberRequest)(
        mockDispatch,
        mockGetState,
        {},
      );

      expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
  });

  describe('deleteMember', () => {
    it('dispatches an editMember action after editing member', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await deleteMember(0)(mockDispatch, mockGetState, {});

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: MemberAppTypes.DELETE,
        newState: { members: [dummyMember2] },
      });
    });

    it('deletes correct member given ID', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await deleteMember(1)(mockDispatch, mockGetState, {});

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenNthCalledWith(1, {
        type: MemberAppTypes.DELETE,
        newState: { members: [dummyMember] },
      });
    });

    it('does not do anything with invalid negative member id', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await deleteMember(-1)(mockDispatch, mockGetState, {});

      expect(mockDispatch).toHaveBeenCalledTimes(0);
    });

    it('does not do anything with member id > members.length', async () => {
      const mockGetState = () => {
        return { members: [dummyMember, dummyMember2] };
      };
      const mockDispatch = jest.fn();

      await deleteMember(3)(mockDispatch, mockGetState, {});

      expect(mockDispatch).toHaveBeenCalledTimes(0);
    });
  });
});
