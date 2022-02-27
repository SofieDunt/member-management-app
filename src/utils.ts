import { AppMembers } from './ducks/types';

export const copyMembers = (members: AppMembers) => {
  return JSON.parse(JSON.stringify(members));
};
