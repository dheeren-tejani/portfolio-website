// queries/getContactMe.ts
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export const getContactMe = async () => {
  return {
    profilePicture: { url: "" },
    name: "Dheeren Tejani",
    title: "AI Engineer",
    summary: "A passionate AI Engineer and lifelong learner.",
    companyUniversity: "Vivekananda Education Society of Arts, Science and Commerce (Autonomous)",
    linkedinLink: "https://linkedin.com/in/dheeren-tejani",
    email: "dheerennntejani@gmail.com",
    phoneNumber: "+91 78228 68074"
  };
};
