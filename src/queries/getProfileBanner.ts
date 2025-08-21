// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `
 {
  profilebanner {
    backgroundImage {
      url
    }
    headline
    resumeLink {
      url
    }
    linkedinLink
    profileSummary
  }
}
`;

export const getProfileBanner = async () => {
  // TODO: Replace with static data
  return {};
};
