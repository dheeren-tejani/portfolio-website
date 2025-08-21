// queries/getTimeline.ts
import { Skill } from '../types';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export const getSkills = async () => {
  // TODO: Replace with static data
  return [];
};
