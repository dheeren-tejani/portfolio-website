// queries/getTimeline.ts
import { TimelineItem } from '../types';

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelineType
    title
    techStack
    summaryPoints
    dateRange
  }
}
`;

export const getTimeline = async () => {
  // TODO: Replace with static data
  return [];
};
