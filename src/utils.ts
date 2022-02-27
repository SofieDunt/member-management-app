import { AppMembers } from './ducks/types';

/**
 * Creates a deep copy of an array of members.
 * @param members the array of members
 */
export const copyMembers = (members: AppMembers): AppMembers => {
  return JSON.parse(JSON.stringify(members));
};
