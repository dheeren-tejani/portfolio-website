// queries/getProjects.ts
import { Project } from '../types';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export const getProjects = async () => {
  // TODO: Replace with static data
  return [];
};
